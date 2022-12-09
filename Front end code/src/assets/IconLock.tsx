export default function IconLock(props: IconLockProps) {
  return (
    <div className="w-4 h-[17px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1223_910)">
          <path
            d="M 12.667 7.833 H 3.333 C 2.597 7.833 2 8.43 2 9.167 V 13.833 C 2 14.57 2.597 15.167 3.333 15.167 H 12.667 C 13.403 15.167 14 14.57 14 13.833 V 9.167 C 14 8.43 13.403 7.833 12.667 7.833 Z"
            stroke="#667085"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           />
          <path
            d="M 4.667 7.833 V 5.167 C 4.667 4.283 5.018 3.435 5.643 2.81 C 6.268 2.185 7.116 1.833 8 1.833 C 8.884 1.833 9.732 2.185 10.357 2.81 C 10.982 3.435 11.333 4.283 11.333 5.167 V 7.833"
            stroke="#667085"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           />
        </g>
        <defs>
          <clipPath id="clip0_1223_910">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0 0.5)"
             />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

IconLock.defaultProps = {};

interface IconLockProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
