"use client";

import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  // console.log(items);
  return (
    <aside className="bg-white pt-5 px-4 w-4/12 h-full border border-gray-200">
      <div className="flex flex-col">
        <div className="text-2xl font-bold text-neutral-700 py-4">People</div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
