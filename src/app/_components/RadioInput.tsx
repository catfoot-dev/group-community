import { ChangeEventHandler } from 'react';
import { Typography } from '@material-tailwind/react';
import clsx from 'clsx';

export default function RadioInput({
  className = '',
  name,
  value,
  label,
  checked,
  onChange,
}: {
  className?: string;
  name: string;
  value?: string;
  label?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <label className={clsx('flex flex-row gap-1 items-center cursor-pointer', {
      [className]: true,
    })}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="m-0.5 text-[14px] outline-none size-4 rounded-full
          border-[1px] border-gray-600 bg-white appearance-none
          checked:border-[6px] checked:border-gray-900"
      />
      {label && (
        <Typography className="text-[14px]">
          {label}
        </Typography>
      )}
    </label>
  );
}
