import AvatarUpload from "../../../../components/AvatarUpload";
import { getUserImage, getUserInfo } from "../../../api";
import ProfileInfo from "../../../../components/ProfileInfo";
export const metadata = {
  title: "Classic Football Shirts - Profile",
  description: "Profile page",
};

const ProfilePage = async () => {
  const userImage = await getUserImage();
  const userInfo = await getUserInfo();
  return (
    <div className="w-[90%] h-auto lg:h-[400px] lg:w-4/5 py-20 mx-auto">
      <div className="w-full h-full flex flex-col justify-center items-center lg:flex-row gap-12">
        <AvatarUpload userImage={userImage} />
        <ProfileInfo user={userInfo} />
      </div>
    </div>
  );
};

export default ProfilePage;
