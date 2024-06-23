import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { formatDate } from "../../../../../helpers";
import SocialShare from "../../../../../components/SocialShare";
import { getBlogs, getDetailedBlog } from "../../../../api";

export async function generateMetadata({ params }: { params: params }) {
  const blogs = await getBlogs();
  const blog = blogs.find((blog: PostElement) => blog.id == params.id);

  return {
    title: `${blog.title}`,
    description: `${blog.description}`,
  };
}

const BlogDetails = async ({ params }: ParamsObj) => {
  unstable_setRequestLocale(params.locale);
  const articleId = params.id;
  const articleData: PostElement = await getDetailedBlog(articleId);
  const formattedDate = formatDate(articleData.date);
  return (
    <section>
      <div className="w-full flex flex-col lg:flex-row gap-7 lg:gap-10 justify-between py-5 px-5 max-w-[1600px] mx-auto my-10 lg:py-10 lg:px-0">
        <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-7">
          <div className="w-full rounded-2xl overflow-hidden">
            <Image
              src={articleData.image}
              alt={articleData.title}
              width={700}
              height={700}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 justify-start dark:text-white text-[14px] lg:text-[16px]">
          <div className="w-full flex flex-col gap-3">
            <h2 className="text-[25px] leading-[25px] lg:text-[40px] lg:leading-[45px] text-start">
              {articleData.title}
            </h2>
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="dark:text-white">{formattedDate}</span>
            </div>
          </div>
          <p>{articleData.description}</p>
          <div className="flex gap-3">{articleData.author}</div>
        </div>
        <SocialShare
          path={"/blog/"}
          id={articleData?.id}
          title={articleData?.title}
        />
      </div>
    </section>
  );
};

export default BlogDetails;
