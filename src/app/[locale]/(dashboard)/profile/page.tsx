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
  return (
    <div className="px-[4%] pb-24 flex justify-center items-center md:flex-col gap-20 md:gap-12">
      <div className="flex flex-col gap-3 justify-center items-center">
        <AvatarUpload userImage={userImage} />
      </div>
      <div className="flex flex-col justify-center gap-8">
        <div className="flex p-4 rounded-lg gap-8 ">
          <ProfileInfo user={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
