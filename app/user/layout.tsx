import SideBar from "@/app/components/sidebar/SideBar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <SideBar>
      <UserList items={users} />
      <div className="h-full w-[80vw] ">{children}</div>
    </SideBar>
  );
}
