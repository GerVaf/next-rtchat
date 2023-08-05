import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Toast from "./context/Toast";
import AuthContext from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "chat_app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <Toast />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
