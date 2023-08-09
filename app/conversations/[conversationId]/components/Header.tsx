"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo } from "react";
import Avatar from "@/app/components/Avatar";

import { BiSolidLeftArrow } from "react-icons/bi";
import { PiDotsSixBold } from "react-icons/pi";
interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}
const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }
    return "Activate";
  }, [conversation]);

  return (
    <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <Link
          className="lg:hidden block text-yellow-400 hover:text-yellow-500 transition cursor-pointer"
          href={"/conversations"}
        >
          <BiSolidLeftArrow size={25} />
        </Link>
        <Avatar user={otherUser} />
        <div className="flex items-center gap-3">
          <span className="font-bold">
            {conversation.name || otherUser.name}
          </span>
          <span className="font-light text-[12px] text-gray-600">
            / {statusText}
          </span>
        </div>
      </div>
      <PiDotsSixBold
        size={30}
        onClick={() => {}}
        className="text-yellow-500 cursor-pointer hover:text-yellow-600 transition"
      />
    </div>
  );
};

export default Header;
