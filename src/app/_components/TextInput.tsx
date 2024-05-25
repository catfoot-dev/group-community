import { ChangeEventHandler, KeyboardEventHandler } from 'react';

import clsx from 'clsx';

export default function TextInput({
  variant = 'box',
  placeholder,
  className = '',
  maxLength,
  value,
  state = 'default',
  onChange,
  onKeyDown,
}: {
  variant?: 'box' | 'underscore';
  placeholder?: string;
  className?: string;
  maxLength?: number;
  value?: string;
  state?: 'default' | 'success' | 'error';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}) {
  return (
    <label className={clsx(
      'flex flex-row gap-2 items-center cursor-text',
      {
        'border-[1px]': variant === 'box',
        'border-b': variant === 'underscore',
        'border-gray-600': state === 'default',
        'border-green-600': state === 'success',
        'border-pink-600': state === 'error',
        [className]: true,
      }
    )}>
      <input
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="m-0.5 w-full text-[14px] outline-none border-0"
      />
    </label>
  );
}
