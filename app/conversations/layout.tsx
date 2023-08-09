import getConversations from "../actions/getConversations";
import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <SideBar>
      <div className="h-full flex w-[90vw]">
        <ConversationList  initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
}
