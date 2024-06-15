"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

const SocialShare = ({
  path,
  id,
  title,
}: {
  path: string;
  id: number;
  title: string;
}) => {
  return (
    <div className="flex gap-2">
      <FacebookShareButton
        url={process.env.NEXT_PUBLIC_VERCEL_URL + `${path}${id}`}
        title={title}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={process.env.NEXT_PUBLIC_VERCEL_URL + `${path}${id}`}
        title={title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export default SocialShare;
