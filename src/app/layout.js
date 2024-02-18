import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"

import LoginBtn from '@/components/LoginBtn'
import LogOutBtn from '@/components/LogOutBtn'
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth].js"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next forum project",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  console.log(session)

  return (
    <html lang="en">
      <body className={`${inter.className} navbar`}>
        <Link href='/' className='logo'>NEXT Forum</Link>
        <Link href='/list'>List</Link>
        {/* <LoginBtn /> */}
        {
          session
            ? <><span>{session.user.name}</span><LogOutBtn /></>
            : <LoginBtn />
        }
        {children}
      </body>
    </html>
  );
}
