import Profile from "pages/profile";
import React from "react";
import Admin from "layouts/Admin";
import dbConnect from "../../lib/dbConnect";
import User from "../../model/User";

function ProfilePage({ user }) {
  return (
    <Admin>
      <Profile member={user} />
    </Admin>
  );
}

export async function getServerSideProps(context) {
  await dbConnect();
  let user;
  try {
    user = await User.findById(context.params.id);
  } catch (error) {
    console.log("Found User Error ", error);
  }
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default ProfilePage;
