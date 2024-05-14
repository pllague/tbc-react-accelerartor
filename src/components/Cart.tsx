import Link from "next/link";
import { useLocale } from "next-intl";

const Cart = ({
  className,
  selectedNumber,
}: {
  className: string;
  selectedNumber: number;
}) => {
  const locale = useLocale();

  return (
    <Link href={`/${locale}/checkout`}>
      <div className={className}>
        {selectedNumber > 0 ? (
          <span className="group-hover:text-orange transition-all duration-300 ease-in-out">
            {selectedNumber}
          </span>
        ) : (
          ""
        )}
        <svg
          className="w-10 h-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="18.524"
          height="17.75"
          viewBox="0 0 18.524 17.75"
        >
          <g
            id="Icon_feather-shopping-cart"
            data-name="Icon feather-shopping-cart"
            transform="translate(-0.75 -0.75)"
          >
            <path
              className="stroke-primary dark:stroke-white fill-primary dark:fill-white group-hover:stroke-orange group-hover:fill-orange transition-all duration-300 ease-in-out"
              id="Path_29875"
              data-name="Path 29875"
              d="M13.548,30.774A.774.774,0,1,1,12.774,30,.774.774,0,0,1,13.548,30.774Z"
              transform="translate(-5.083 -13.798)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              className="stroke-primary dark:stroke-white fill-primary dark:fill-white group-hover:stroke-orange group-hover:fill-orange transition-all duration-300 ease-in-out"
              id="Path_29876"
              data-name="Path 29876"
              d="M30.048,30.774A.774.774,0,1,1,29.274,30,.774.774,0,0,1,30.048,30.774Z"
              transform="translate(-13.071 -13.798)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              className="stroke-primary dark:stroke-white fill-primary dark:fill-white group-hover:stroke-orange group-hover:fill-orange transition-all duration-300 ease-in-out"
              id="Path_29877"
              data-name="Path 29877"
              d="M1.5,1.5H4.6L6.669,11.861a1.548,1.548,0,0,0,1.548,1.246h7.521a1.548,1.548,0,0,0,1.548-1.246l1.238-6.492H5.369"
              transform="translate(0 0)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </g>
        </svg>
      </div>
    </Link>
  );
};

export default Cart;
