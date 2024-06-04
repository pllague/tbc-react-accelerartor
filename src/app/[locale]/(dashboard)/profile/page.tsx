import AvatarUpload from "../../../../components/AvatarUpload";
import { getUserImage, getUserInfo } from "../../../api";
import ProfileInfo from "../../../../components/ProfileInfo";
export const metadata = {
  title: "Profile",
  description: "Profile by Next",
};

const ProfilePage = async () => {
  const userImage = await getUserImage();
  const userInfo = await getUserInfo();
  console.log("user data ------------------ :" + userInfo);
  return (
    <div className="px-[4%] pb-24 flex justify-center items-center md:flex-col gap-20 md:gap-12">
      <div className="flex flex-col gap-3 justify-center items-center">
        <AvatarUpload userImage={userImage} />
      </div>
      <div className="flex flex-col justify-center gap-8">
        <div className="flex border border-blue-500 p-4 xs:p-2 rounded-lg gap-8 xs:gap-3 shadow-lg bg-white items-baseline dark:bg-slate-900">
          <div className="flex flex-1 justify-center items-center"></div>
          {/* <div className="font-bold text-blue-500">
            {userInfo?.name && (
              <h3 className="text-xl  leading-6 h-8">Full Name</h3>
            )}
            {userInfo?.email && (
              <h3 className="text-xl leading-6 h-8">Email</h3>
            )}
          </div> */}
          <ProfileInfo user={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
