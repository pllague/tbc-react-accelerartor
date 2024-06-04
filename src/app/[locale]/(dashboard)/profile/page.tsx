// "use client";
// import { useState } from "react";
// import AvatarUpload from "../../../../components/AvatarUpload";

// const Profile = () => {
//   const [profileData, setProfileData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     mobile: "",
//     currentPassword: "",
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   const {
//     firstname,
//     lastname,
//     email,
//     mobile,
//     currentPassword,
//     newPassword,
//     confirmNewPassword,
//   } = profileData;

//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setProfileData((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   }

//   return (
//     <>
//       <AvatarUpload />
//       <h2 className="text-[40px] leading-[25px] text-center my-[20px]">
//         Edit Your Profile Data
//       </h2>
//       <form className="w-1/5 border-2 border-light_blue shadow-xl shadow-light_blue p-8 rounded-xl flex flex-col gap-3 justify-between items-start mx-auto [&>input]:bg-white">
//         <input
//           className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
//           maxLength={100}
//           name="firstname"
//           placeholder="Firstname"
//           type="text"
//           autoCapitalize="none"
//           autoComplete="off"
//           spellCheck="false"
//           value={firstname}
//           onChange={handleChange}
//         />

//         <input
//           className="w-full h-full border-2 border-light_blue  py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
//           maxLength={100}
//           name="lastname"
//           placeholder="Lastname"
//           type="text"
//           autoCapitalize="none"
//           autoComplete="off"
//           spellCheck="false"
//           value={lastname}
//           onChange={handleChange}
//         />

//         <input
//           className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
//           maxLength={100}
//           name="email"
//           placeholder="Email"
//           type="text"
//           autoCapitalize="none"
//           autoComplete="off"
//           spellCheck="false"
//           value={email}
//           onChange={handleChange}
//         />

//         <input
//           className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
//           maxLength={100}
//           name="mobile"
//           placeholder="Mobile"
//           type="text"
//           autoCapitalize="none"
//           autoComplete="off"
//           spellCheck="false"
//           value={mobile}
//           onChange={handleChange}
//         />

//         <input
//           className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
//           maxLength={100}
//           name="currentPassword"
//           placeholder="Current Password"
//           type="password"
//           autoCapitalize="none"
//           autoComplete="off"
//           spellCheck="false"
//           value={currentPassword}
//           onChange={handleChange}
//           required
//         />

//         <input
//           className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
//           maxLength={100}
//           name="newPassword"
//           placeholder="New Password"
//           type="password"
//           autoCapitalize="none"
//           autoComplete="off"
//           spellCheck="false"
//           value={newPassword}
//           onChange={handleChange}
//           required
//         />

//         <input
//           className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
//           maxLength={100}
//           name="confirmNewPassword"
//           placeholder="Confirm New Password"
//           type="password"
//           autoCapitalize="none"
//           autoComplete="off"
//           spellCheck="false"
//           value={confirmNewPassword}
//           onChange={handleChange}
//           required
//         />

//         <div className="w-full flex gap-3">
//           <button className="w-full h-full border-0 bg-red-800 py-3 mx-auto text-white lg:text-[20px] rounded-[5px] hover:bg-orange transition-all transform duration-300 ease-linear">
//             Cancel
//           </button>
//           <button className="w-full h-full border-0  bg-blue-500 py-3 mx-auto text-white lg:text-[20px] rounded-[5px] hover:bg-orange transition-all transform duration-300 ease-linear">
//             Save
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Profile;

import AvatarUpload from "../../../../components/AvatarUpload";
import { getUserImage, getUserInfo } from "../../../api";
import ProfileInfo from "../../../../components/ProfileInfo";
export const metadata = {
  title: "Profile",
  description: "Profile by Next",
};

export default async function Profile() {
  const userImage = await getUserImage();
  const userInfo = await getUserInfo();

  return (
    <div className="px-[4%] pb-24 flex justify-center items-center md:flex-col gap-20 md:gap-12">
      <div className="flex flex-col gap-3 justify-center items-center">
        <AvatarUpload userImage={userImage} />
      </div>
      <div className="flex flex-col justify-center gap-8">
        <div className="flex border border-blue-500 p-4 xs:p-2 rounded-lg gap-8 xs:gap-3 shadow-lg bg-white items-baseline dark:bg-slate-900">
          <div className="flex flex-1 justify-center items-center"></div>
          <div className="font-bold text-blue-500">
            {userInfo.name && (
              <h3 className="text-xl  leading-6 h-8">Full Name</h3>
            )}
            {userInfo.nickname && (
              <h3 className="text-xl  leading-6 h-8">Nickname</h3>
            )}
            {userInfo.email && <h3 className="text-xl leading-6 h-8">Email</h3>}
          </div>
          <ProfileInfo user={userInfo} />
        </div>
      </div>
    </div>
  );
}
