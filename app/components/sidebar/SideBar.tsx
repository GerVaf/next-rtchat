import getCurrentUser from "@/app/actions/getCurrentUser";
import DMSideBar from "./DMSidebar";

async function SideBar({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser()
  return (
    <div className="h-full flex">
      <DMSideBar currentUser={currentUser!} />
      <main className="h-full flex">{children}</main>
    </div>
  );
}
export default SideBar;
