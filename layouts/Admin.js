import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import Auth from "./Auth";
import Login from "pages/auth/login";

export default function Admin({ children }) {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.pathname = "/auth/login";
    return (
      <>
        <Auth>
          <Login />
        </Auth>
      </>
    );
  }
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
