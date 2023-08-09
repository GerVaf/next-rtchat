"use client";

import { signOut } from "next-auth/react";
import EmptyState from "../components/EmptyState";

const User = () => {
  return <div className="h-full bg-white">
    <EmptyState />
  </div>;
};

export default User;
