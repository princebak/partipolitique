import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

import dbConnect from "../../lib/dbConnect";
import User from "../../model/User";
import { useSession } from "next-auth/react";

// layout for page

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";

export default function Tables({ users }) {
  const { data: session } = useSession();
  const router = useRouter();
  if (session.user.type === "member") {
    router.push("/profile");
  }

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable users={users} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  await dbConnect();
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log("Found Users Error ", error);
  }
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}

Tables.layout = Admin;
