"use client";

import clsx from "clsx";
import EmptyState from "../components/EmptyState";
import useConversation from "../hooks/useConversation";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div className={(clsx("h-full w-9/12 flex "), isOpen ? "block" : "hidden")}>
      <EmptyState />
    </div>
  );
};

export default Home;
