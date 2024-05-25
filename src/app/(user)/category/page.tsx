'use client'

import { AlertCircleIcon, CheckmarkCircle03Icon, CircleIcon, Image02Icon, Link04Icon } from 'hugeicons-react';
import { Button, Spinner, Typography } from '@material-tailwind/react';
import { useEffect, useRef, useState } from 'react';

import RadioInput from '@/app/_components/RadioInput';
import TextInput from '@/app/_components/TextInput';

function FormBox({
  no, title, subcontext, children,
}: {
  no: number;
  title: string;
  subcontext?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col p-2 rounded-md
      border-[1px] border-gray-300 bg-white drop-shadow-sm"
    >
      <div className="flex flex-row gap-1 items-center mb-1">
        <div className="flex m-1 size-6 justify-center items-center
          rounded-full bg-gray-600 text-white text-[14px]"
        >
          {no}
        </div>
        <Typography variant="h6" className="mt-1">
          {title}
        </Typography>
      </div>
      <Typography
        variant="small"
        className="mx-1 mb-2 text-gray-600"
      >
        {subcontext}
      </Typography>
      {children}
    </div>
  );
}

function CheckListItem({
  isRequired,
  isPassed,
  isLoading,
  label,
}: {
  isRequired?: boolean;
  isPassed: boolean;
  isLoading?: boolean;
  label: string;
}) {
  return (
    <li className="flex flex-row gap-2 itesm-center pb-1">
      {isLoading ? (
        <Spinner className="size-[18px]" />
      ) : isPassed ? (
        <CheckmarkCircle03Icon size="18" color="green" className="mt-[1px]" />
      ) : isRequired ? (
        <AlertCircleIcon size="18" color="red" className="mt-[1px]" />
      ) : (
        <CircleIcon size="18" className="mt-[1px]" />
      )}
      <Typography variant="small">{label}</Typography>
      {!isRequired && <Typography variant="small" className="mt-1 text-[11px] text-gray-600">(선택)</Typography>}
    </li>
  );
}

let timeoutId = null;
export default function NewCommunity() {
  const iconRef = useRef(null);
  const headerRef = useRef(null);
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [slug, setSlug] = useState('');
  const [isProject, setProject] = useState<boolean | undefined>();
  const [isPrivate, setPrivate] = useState<boolean | undefined>();
  const [isPublicRead, setPublicRead] = useState<boolean | undefined>();
  const [isPublicWrite, setPublicWrite] = useState<boolean | undefined>();
  const [slugState, setSlugState] = useState('NONE');
  const [iconState, setIconState] = useState('NONE');
  const [headerImageState, setHeaderImageState] = useState('NONE');

  useEffect(() => {
    checkSlug();
  }, [slug]);

  async function checkSlug() {
    if (slug && slug.length > 4) {
      setSlugState('CHECKING');
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(async () => {
        const res = await fetch('/api/community/check', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug }),
        });
        const { code, data, error } = await res.json();
        if (code === 200) {
          if (data) {
            setSlugState('PASSED');
          } else {
            setSlugState('DUPLICATED');
          }
        } else {
          setSlugState('ERROR');
        }
        timeoutId = null;
      }, 800);
    } else {
      setSlugState('NONE');
    }
  }

  async function uploadIconImage() {
    setIconState('UPLOADING');
  }

  async function uploadHeader() {
    setHeaderImageState('UPLOADING');
  }

  return (
    <div className="container relative flex md:w-[896px]">
      <div className="flex flex-col gap-3 p-3 w-9/12">
        <Typography variant="h5" className="mx-2">
          새 커뮤니티 정보 입력
        </Typography>

        <FormBox
          no={1}
          title="모두에게 공개될 정보를 입력해주세요."
          subcontext="커뮤니티의 이름과 URL에 표시될 고유한 이름을 지정해주세요."
        >
          <Typography variant="h6" className="m-1 mt-4 text-[14px]">
            커뮤니티의 이름을 32자 이내로 이해하기 쉽고 간결하게 입력해주세요.
          </Typography>
          <TextInput
            placeholder="커뮤니티 이름"
            className="flex flex-1 px-2 py-1 w-full rounded-md"
            value={name}
            maxLength={32}
            state={name.length > 0 ? 'success' : 'default'}
            onChange={(e) => setName(e.currentTarget.value)}
          />

          <Typography variant="h6" className="m-1 mt-4 text-[14px]">
            한 줄로 커뮤니티를 소개하는 내용을 100자 이내로 입력해주세요.
          </Typography>
          <TextInput
            placeholder="커뮤니티 소개"
            className="flex flex-1 px-2 py-1 w-full rounded-md"
            value={introduce}
            maxLength={100}
            state={introduce.length > 0 ? 'success' : 'default'}
            onChange={(e) => setIntroduce(e.currentTarget.value)}
          />

          <Typography variant="h6" className="m-1 mt-4 text-[14px]">
            URL에 사용될 간결하고 고유한 이름을 4자 이상 32자 이내로 입력해주세요. [a-z, 0-9, -]
          </Typography>
          <TextInput
            placeholder="고유 식별자"
            className="flex flex-1 px-2 py-1 w-full rounded-md"
            value={slug}
            maxLength={32}
            state={slug.length > 4
              ? slugState === 'PASSED'
                ? 'success'
                : slugState === 'CHECKING'
                  ? 'default'
                  : 'error'
              : 'default'}
            onKeyDown={(e) => {
              if (
                !/^[a-z0-9-]$/.test(e.key) &&
                !e.altKey && !e.shiftKey && !e.ctrlKey &&
                e.key !== 'Enter' && e.key !== 'Backspace'
              ) {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              const value = e.currentTarget.value.toLocaleLowerCase();
              setSlug(value.replace(/[^a-z0-9-]/g, ''));
            }}
          />
          <div className="flex flex-row gap-1 items-center m-1 mb-0 text-gray-600">
            <Link04Icon size="16" />
            <Typography variant="small" className="mt-1 text-[12px]">
              http://teamcommunity/c/{slug}
            </Typography>
          </div>
        </FormBox>

        <FormBox
          no={2}
          title="어떤 커뮤니티를 개설하시고 싶으신가요?"
          subcontext="개설하고자 하는 커뮤니티의 성향을 지정해주세요."
        >
          <Typography variant="h6" className="m-1 mt-4 text-[14px]">
            커뮤니티 성격을 선택해주세요.
          </Typography>
          <div className="flex gap-10">
            <RadioInput
              name="kind"
              label="업무 / 프로젝트"
              checked={isProject === true}
              onChange={(e) => setProject(e.currentTarget.checked)}
            />
            <RadioInput
              name="kind"
              label="소모임 (취미, 사내동호회 등)"
              checked={isProject === false}
              onChange={(e) => setProject(!e.currentTarget.checked)}
            />
          </div>

          <Typography variant="h6" className="m-1 mt-4 text-[14px]">
            커뮤니티 리스트에서 표시할 것인지 공개 여부를 선택해주세요.
          </Typography>
          <div className="flex gap-10">
            <RadioInput
              name="private"
              label="모두에게 공개"
              checked={isPrivate === false}
              onChange={(e) => setPrivate(!e.currentTarget.checked)}
            />
            <RadioInput
              name="private"
              label="기존 참가자의 초대장 필요"
              checked={isPrivate === true}
              onChange={(e) => setPrivate(e.currentTarget.checked)}
            />
          </div>

          <Typography variant="h6" className="m-1 mt-4 text-[14px]">
            글 읽기 권한을 선택해주세요.
          </Typography>
          <div className="flex gap-10">
            <RadioInput
              name="read"
              label="모두가 글을 읽을 수 있음"
              checked={isPublicRead === true}
              onChange={(e) => setPublicRead(e.currentTarget.checked)}
            />
            <RadioInput
              name="read"
              label="커뮤니티 참가자만"
              checked={isPublicRead === false}
              onChange={(e) => setPublicRead(!e.currentTarget.checked)}
            />
          </div>

          <Typography variant="h6" className="m-1 mt-4 text-[14px]">
            글 쓰기 권한을 선택해주세요.
          </Typography>
          <div className="flex gap-10 mb-1">
            <RadioInput
              name="write"
              label="모두가 글을 쓸 수 있음"
              checked={isPublicWrite === true}
              onChange={(e) => setPublicWrite(e.currentTarget.checked)}
            />
            <RadioInput
              name="write"
              label="커뮤니티 참가자만"
              checked={isPublicWrite === false}
              onChange={(e) => setPublicWrite(!e.currentTarget.checked)}
            />
          </div>
        </FormBox>

        <FormBox
          no={3}
          title="커뮤니티 이미지를 선택해주세요."
          subcontext="커뮤니티의 개성을 표현할 수 있는 아이콘과 해더 이미지를 선택해주세요."
        >
          <Typography variant="h6" className="m-1 mt-4 text-[14px]">
            커뮤니티 대표 아이콘을 선택해주세요. (파일 크기: 200KB 이하)
          </Typography>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col w-32 h-32 justify-center items-center
              rounded-md border-[1px] border-gray-300 bg-gray-100 text-gray-300"
            >
              <Image02Icon size="64" />
            </div>
            <div className="flex flex-col">
              <Button
                variant="filled"
                size="sm"
                className="flex flex-row gap-2 rounded-md shadow-none hover:shadow-none"
                disabled={iconState === 'UPLOADING'}
                onClick={() => iconRef.current?.click()}
              >
                <input
                  ref={iconRef}
                  type="file"
                  accept="image/png,image/gif,image/jpeg"
                  className="hidden"
                  onChange={uploadIconImage}
                />
                {iconState === 'UPLOADING' && (
                  <Spinner className="size-4" />
                )}
                이미지 선택
              </Button>
            </div>
          </div>

          <Typography variant="h6" className="m-1 mt-4 text-[14px]">
            커뮤니티 해더 이미지를 선택해주세요. (파일 크기: 500KB 이하)
          </Typography>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col w-full h-[120px] justify-center items-center
              rounded-md border-[1px] border-gray-300 bg-gray-100 text-gray-300"
            >
              <Image02Icon size="64" />
            </div>
            <div className="flex flex-row">
              <Button
                variant="filled"
                size="sm"
                className="flex flex-row gap-2 rounded-md shadow-none hover:shadow-none"
                disabled={headerImageState === 'UPLOADING'}
                onClick={() => headerRef.current?.click()}
              >
                <input
                  ref={headerRef}
                  type="file"
                  accept="image/png,image/gif,image/jpeg"
                  className="hidden"
                  onChange={uploadHeader}
                />
                {headerImageState === 'UPLOADING' && (
                  <Spinner className="size-4" />
                )}
                이미지 선택
              </Button>
            </div>
          </div>
        </FormBox>

      </div>

      <aside className="sticky flex flex-col gap-2 top-12 pt-4 h-[calc(100vh-3rem)] w-3/12">
        <div className="flex flex-col gap-2 p-3 rounded-md border-[1px] border-gray-300 bg-gray-100">
          <Typography variant="h6">
            새 커뮤니티 생성하기
          </Typography>
          <Typography variant="small" className="mb-3 text-[12px] text-gray-600">
            아래 체크리스트를 만족하면 커뮤니티를 생성하실 수 있습니다.
          </Typography>
          <ul className="text-[14px]">
            <CheckListItem
              isRequired={true}
              isPassed={name.trim().length > 0}
              label="이름 정하기"
            />
            <CheckListItem
              isRequired={true}
              isPassed={introduce.trim().length > 0}
              label="한 줄로 커뮤니티 표현하기"
            />
            <CheckListItem
              isRequired={true}
              isPassed={slugState === 'PASSED'}
              isLoading={slugState === 'CHECKING'}
              label="고유 식별자 정하기"
            />
            <CheckListItem
              isRequired={true}
              isPassed={isProject !== undefined}
              label={isProject === undefined
                ? '커뮤니티 성격 선택하기'
                : `${isProject ? '업무 / 프로젝트' : '소모임'} 커뮤니티`}
            />
            <CheckListItem
              isRequired={true}
              isPassed={isPrivate !== undefined}
              label={isPrivate === undefined
                ? '공개 여부 선택하기'
                : isPrivate
                  ? '초대장 필요'
                  : '모두에게 공개'
              }
            />
            <CheckListItem
              isRequired={true}
              isPassed={isPublicRead !== undefined}
              label={isPublicRead === undefined
                ? '읽기 권한 선택하기'
                : `${isPublicRead ? '모두' : '참가자만'} 글을 읽을 수 있음`}
            />
            <CheckListItem
              isRequired={true}
              isPassed={isPublicWrite !== undefined}
              label={isPublicWrite === undefined
                ? '쓰기 권한 선택하기'
                : `${isPublicWrite ? '모두' : '참가자만'} 글을 쓸 수 있음`}
            />
            <CheckListItem
              isPassed={iconState === 'PASSED'}
              isLoading={iconState === 'UPLOADING'}
              label="대표 아이콘"
            />
            <CheckListItem
              isPassed={headerImageState === 'PASSED'}
              isLoading={headerImageState === 'UPLOADING'}
              label="해더 이미지"
            />
          </ul>
        </div>

        <Button
          variant="filled"
          size="sm"
          className="w-full rounded-md shadow-none hover:shadow-none"
          disabled={
            name.trim().length === 0 ||
            introduce.trim().length === 0 ||
            slugState !== 'PASSED' ||
            isProject !== undefined ||
            isPrivate !== undefined ||
            isPublicRead !== undefined ||
            isPublicWrite !== undefined ||
            iconState === 'UPLOADING' ||
            headerImageState === 'UPLOADING'
          }
        >
          완료
        </Button>
      </aside>
    </div>
  );
}
