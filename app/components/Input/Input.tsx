"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-800" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(`form-input block w-full border py-1.5 shadow-sm placeholder:text-gray-400 border-gray-500 outline-none rounded-sm focus:boder-sky-500 `,errors[id] && 'focus:ring-rose-500',disabled&& 'opacity-50 cursor-default')}
        />
      </div>
    </div>
  );
};

export default Input;
