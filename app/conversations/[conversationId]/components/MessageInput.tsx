"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { CiLocationArrow1 } from "react-icons/ci";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full flex">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-2xl focus:outline-none"
      />
      <button
        type="submit"
        className=" p-2 text-yellow-500 hover:text-yellow-600"
      >
        <CiLocationArrow1 size={25} />
      </button>
    </div>
  );
};

export default MessageInput;
