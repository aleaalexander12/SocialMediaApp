import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import PostCard from "../components/PostCard";

// Avatar you provided
const avatarURL =
  "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/464857778_1685821188629397_2485675738634627979_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=7F7zaQ3ylcQQ7kNvgGHz5Ho&_nc_oc=AdnGxIzaKl0u_1-SBi7EIMnE367aTnO4GRCTZdtT5PcA7NzQUN0TXdQ91qForFqUgjqlR5R6kAfSbjUUesP5id7g&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=h519OxmAvhnM06c2jnXzWA&oh=00_AYEJsJYLxklF7Za2-B3jP_cyykq0xkD54OL8m8PodlDUtg&oe=67EB3464";

const dummyUser = {
  avatar: avatarURL,
  username: "DigitalVisionary",
  bio: "|Creating Digital MasterPieces|",
  followers: 1200,
  following: 340,
};

// Post images you provided
const posts = [
  {
    _id: "1",
    userAvatar: avatarURL,
    username: dummyUser.username,
    image:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/480258617_1779981625880019_1287261705637954459_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Xh5vHJiT618Q7kNvgF8ys5R&_nc_oc=AdlfMr2vOmQZ_vcDszS-7dz7swq513plW9Ail6GRuVZbmnuhPxPfMASganBBZzaL_zdRCHGDRjVHt7D5Ky_VY09Y&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2v0F-Iqs3xpLCloZN3WtOQ&oh=00_AYHU2F1_CYFX2qVwXlI9c_Zbh0zNK22gPXWliaD72cAPKQ&oe=67EB23EF",
    caption: "DND🎧",
    likes: 210,
    comments: 18,
  },
  {
    _id: "2",
    userAvatar: avatarURL,
    username: dummyUser.username,
    image:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/472843868_1733299927214856_6680476038779064540_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5VD0f6JGz4EQ7kNvgGy5T1n&_nc_oc=Adn-wxBvbos2HWi_O-hvFAIGb-ZyY7XRFfIg076y-9PfFBpEzgYvSdoNj7IDUBc4SS_tZif00ZfsT5wkW1dxf48M&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=eHAcTQliVM27QQrvzrWxHw&oh=00_AYEYhYPbynGN2RTTyO7ZotNRiTZxA2urq4NCA47LXW8w0Q&oe=67EB2687",
    caption: "His love rewrites my story, bringing healing to every chapter. #GodsGrace",
    likes: 154,
    comments: 12,
  },
  {
    _id: "3",
    userAvatar: avatarURL,
    username: dummyUser.username,
    image:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/481015210_1764443634100485_2200052985729672030_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aUheaU38wXwQ7kNvgGr__Kx&_nc_oc=Adl5_B1I43waZ2OjhAYPBZnL0onpCCSyg2h8Y0PszFvrpRoeGTz5nPl5xsGvI0E-J2xsMboCrY9Jwdyh-jSTt3S6&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=zVsSoZ9YPMPw_srUyx8-Zg&oh=00_AYGjyp5sBPDWtWpl1OC5KG1qrp7O2IxfiJXiBABWXs6pDA&oe=67EB3782",
    caption: "Living a life with purpose🖤",
    likes: 193,
    comments: 9,
  },
];

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 hidden md:block border-r bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <ProfileHeader user={dummyUser} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
