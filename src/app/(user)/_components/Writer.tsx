'use client'

import { Editor, EditorProps } from '@toast-ui/react-editor';
import { forwardRef, useRef, useState } from 'react';

import { Button } from '@material-tailwind/react';
import { CircleArrowDown01Icon } from 'hugeicons-react';
import TextInput from '@/app/_components/TextInput';
import Window from '@/app/_components/Window';
import dynamic from 'next/dynamic';

const DynamicEditor = dynamic(() => import('./WrappedEditor') as any, { ssr: false }) as any;
const EditorWithForwardedRef = forwardRef(
  function EditorWithForwardedRef(props: any, ref) {
    return <DynamicEditor {...props} ref={ref} />;
  }
);

export default function Writer({
  isShow,
  onClose,
}: {
  isShow: boolean;
  onClose: () => void;
}) {
  const ref = useRef<Editor>(null);
  const [isCommunityListOpen, setCommunityListOpen] = useState(false);
  const [title, setTitle] = useState('');

  function _onClose(isHide?: boolean) {
    if (isHide) {
      onClose();
      return;
    }
    const text = ref.current?.getInstance().getMarkdown();
    if (
      (title || text) &&
      !confirm('창을 닫으시면 작성 중이던 내용은 삭제 됩니다.\n정말 창을 닫으시겠습니까?')
    ) {
      return;
    }
    setTitle('');
    ref.current?.getInstance().setMarkdown('');
    onClose();
  }

  async function onSubmit() {
    if (!title) {
      return alert('제목을 입력해주세요');
    }
    const text = ref.current?.getInstance().getMarkdown();
    if (!text) {
      return alert('내용을 입력해주세요');
    }
    try {
      const res = await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          community: 'all',
          title,
          text,
        }),
      });
      const { code, data, error } = await res.json();
      if (code === 200) {
        // TODO
      }
    } catch (err) {
      // TODO
    }
  }

  return (
    <Window
      isShow={isShow}
      isMinimizable={true}
      isMaximizable={true}
      minimizeType="hide"
      title="새 글쓰기"
      onClose={_onClose}
    >
      <div className="flex flex-row gap-2 justify-center items-center">
        <Button
          variant="outlined"
          size="sm"
          className="flex gap-1 justify-between items-center pl-2 pr-1 py-0.5 rounded-sm text-nowrap"
          onClick={() => setCommunityListOpen(!isCommunityListOpen)}
        >
          <div className="text-sm">
            전체 그룹
          </div>
          <CircleArrowDown01Icon size="14" />
        </Button>
        <TextInput
          variant="underscore"
          placeholder="제목을 입력해주세요"
          className="flex flex-1"
          value={title}
          maxLength={100}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <Button
          variant="filled"
          size="sm"
          color="gray"
          className="flex px-4 py-1 rounded-sm !text-nowrap text-white"
          onClick={onSubmit}
        >
          등록
        </Button>
      </div>
      <div className="toastui-editor-wrapper flex flex-1 max-h-full">
        <EditorWithForwardedRef
          hideModeSwitch
          ref={ref}
          initialValue={''}
          initialEditType="wysiwyg"
          placeholder="내용을 입력해주세요"
          height="100%"
          className="relative flex flex-col flex-1 bg-white"
        />
      </div>
    </Window>
  );
}
