import { usePathname } from "next/navigation";
import { useMemo } from "react";
import useConversation from "./useConversation";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { HiChat } from "react-icons/hi";
import { signOut } from "next-auth/react";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "User",
        href: "/user",
        icon: HiUsers,
        active: pathname === "/user",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, conversationId]
  );
  return routes;
};

export default useRoutes;
