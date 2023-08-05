"use client";

import { signOut } from "next-auth/react";

const User = () => {
  return <button onClick={() => signOut()}>Log out</button>;
};

export default User;
