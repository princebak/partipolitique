import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import { useSession } from "next-auth/react";
import Router from "next/router";

// layout for page

import Admin from "layouts/Admin.js";

export default function Profile({ member }) {
  const { data: session } = useSession();
  if (!session) {
    Router.push("/auth/login");
  }
  let user;
  if (member) {
    user = { ...member, isFromMembersPage: true };
  } else {
    user = session.user;
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings user={user} />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile user={user} />
        </div>
      </div>
    </>
  );
}

Profile.layout = Admin;
