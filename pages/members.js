import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

import dbConnect from "../lib/dbConnect";
import User from "../model/User";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables({ users }) {
  console.log("Found Users in Tables : ", users);
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
    console.log("Found Users ", users);
  } catch (error) {
    console.log("Found Users Error ", error);
  }
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    }, // will be passed to the page component as props
  };
}

Tables.layout = Admin;
