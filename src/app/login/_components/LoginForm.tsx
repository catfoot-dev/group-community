'use client'

import * as yup from 'yup';

import { Button, Card, CardBody, Checkbox, Input, Typography } from '@material-tailwind/react';
import { KeyboardEvent, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';

const HOSTS = [
  'fact-corporation.com',
  'the-swing.co.kr',
];

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function LoginForm() {
  const [uuid, setUuid] = useState('');
  const [email, setEmail] = useState('');
  const [recommends, setRecommends] = useState<string[]>([]);
  const [isRecommendShowing, setRecommendShowing] = useState(false);
  const [recommendsPos, setRecommendPos] = useState(-1);
  const [isRemember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    let uuid = localStorage.getItem('uuid');
    if (!uuid) {
      uuid = uuidv4() ?? '';
      localStorage.setItem('uuid', uuid);
    }
    setUuid(uuid);
    const rememberEmail = localStorage.getItem('rememberEmail');
    if (rememberEmail) {
      setEmail(rememberEmail);
    }
    setRemember(rememberEmail ? true : false);
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const email = value.email;
      if (name !== 'email' || type !== 'change' || !email) {
        return;
      }
      const [account, host] = email.split('@');
      let recommends = HOSTS;
      if (host) {
        recommends = HOSTS.filter((item) => item.startsWith(host));
      }
      setEmail(email);
      setRecommends(recommends.map((item) => `${account}@${item}`));
      setRecommendShowing(true);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const onEmailInputKeyDown = (e: KeyboardEvent) => {
    let pos = recommendsPos;
    switch (e.key) {
      case 'ArrowUp':
        pos = (pos === -1 ? recommends.length : pos) - 1;
        setRecommendPos(pos);
        setValue('email', pos === -1 ? email : recommends[pos]);
        break;
      case 'ArrowDown':
        pos = (pos === recommends.length - 1 ? -1 : pos + 1);
        setRecommendPos(pos);
        setValue('email', pos === -1 ? email : recommends[pos]);
        break;
      case 'Enter':
        setRecommendShowing(false);
        break;
      case 'Tab':
        setRecommendShowing(false);
        break;
    }
  };

  const loginSubmit = async (data: any) => {
    const res = await signIn('credentials', {
      uuid,
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.ok) {
      localStorage.setItem('rememberEmail', isRemember ? data.email : '');
      router.push(searchParams?.get('redirect') || '/');
    } else {
      setError(res?.error || 'Unknown Error');
    }
  };

  const ExclamationMarkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="-mt-px h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365
        9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573
        2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67
        1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75
        0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <form onSubmit={handleSubmit(loginSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 mb-10">
          <Typography variant="h3" color="black">
            로그인
          </Typography>
          <Typography variant="small" color="gray">
            이메일 주소와 패스워드를 입력 후 로그인합니다.
          </Typography>
        </div>
        <div className="w-72 h-14">
          <Input
            crossOrigin=""
            label="Email"
            type="email"
            className="outline-gray-800"
            defaultValue={email}
            error={errors?.email?.type !== undefined}
            onKeyDown={onEmailInputKeyDown}
            {...register('email')}
          />
          {errors?.email ? (
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal"
            >
              {ExclamationMarkIcon} 이메일 주소를 입력해주세요.
            </Typography>
          ) : null}
          {isRecommendShowing && recommends.length ? (
            <Card className={clsx('w-full border-[1px] border-gray-200 bg-blue-gray-50 z-50', {
              '-mt-5': errors?.email,
              'mt-[1px]': !errors?.email,
            })}>
              <CardBody className="flex flex-col gap-1 p-1">
                {recommends.map((item, i) => (
                  <Button
                    fullWidth
                    key={`recommend-${i}`}
                    variant={i === recommendsPos ? 'filled' : 'text'}
                    size="sm"
                    color="gray"
                    className="px-2 text-left lowercase"
                    onClick={() => {
                      setValue('email', item);
                      setRecommendShowing(false);
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </CardBody>
            </Card>
          ) : null}
        </div>
        <div className="w-72 h-14">
          <Input
            crossOrigin=""
            label="Password"
            type="password"
            className="outline-gray-800"
            error={errors?.password?.type !== undefined}
            {...register('password', { required: true })}
          />
          {errors?.password && (
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal"
            >
              {ExclamationMarkIcon} 패스워드를 입력해주세요.
            </Typography>
          )}
        </div>
        <div className="h-8 my-[2px]">
          {error ? (
            <Typography
              variant="small"
              color="red"
              className="flex items-center gap-1 font-normal"
            >
              {error}
            </Typography>
          ) : null}
        </div>
        <div className="flex justify-between mt-5 w-72">
          <div>
            <Checkbox
              crossOrigin=""
              ripple={false}
              checked={isRemember}
              onChange={() => {
                if (isRemember) {
                  localStorage.setItem('rememberEmail', '');
                }
                setRemember(!isRemember);
              }}
              label={
                <Typography variant="small">
                  이메일 주소 기억하기
                </Typography>
              }
            />
          </div>
          <Button type="submit" className="bg-gray-900">로그인</Button>
        </div>
      </div>
    </form>
  );
}
