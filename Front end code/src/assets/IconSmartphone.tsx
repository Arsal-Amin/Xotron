export default function IconSmartphone(props: IconSmartphoneProps) {
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
        <g clipPath="url(#clip0_1223_903)">
          <path
            d="M 11.334 1.833 H 4.667 C 3.93 1.833 3.334 2.43 3.334 3.167 V 13.833 C 3.334 14.57 3.93 15.167 4.667 15.167 H 11.334 C 12.07 15.167 12.667 14.57 12.667 13.833 V 3.167 C 12.667 2.43 12.07 1.833 11.334 1.833 Z"
            stroke="#667085"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           />
          <path
            d="M 8 12.5 H 8.007"
            stroke="#667085"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           />
        </g>
        <defs>
          <clipPath id="clip0_1223_903">
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

IconSmartphone.defaultProps = {};

interface IconSmartphoneProps {}

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
