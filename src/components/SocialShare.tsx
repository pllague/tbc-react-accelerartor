"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
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
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={process.env.NEXT_PUBLIC_VERCEL_URL + `${path}${id}`}
        title={title}
      >
        <XIcon size={40} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={process.env.NEXT_PUBLIC_VERCEL_URL + `${path}${id}`}
        title={title}
      >
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
