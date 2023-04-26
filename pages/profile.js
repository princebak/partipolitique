import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import { useSession } from "next-auth/react";
import Router from "next/router";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  const { data: session } = useSession();
  if (!session) {
    Router.push("/auth/login");
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
