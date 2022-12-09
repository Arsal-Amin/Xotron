export default function Shape1(props: Shape1Props) {
  return (
    <div>
      <div
        className="absolute left-[6.46%] right-[72.92%] top-[59.63%] bottom-[33.54%] drop-shadow-lg"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 297 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1153_940)">
            <path
              d="M 12 26 C 12 17.163 19.163 10 28 10 H 269 C 277.837 10 285 17.163 285 26 C 285 34.837 277.837 42 269 42 H 28 C 19.163 42 12 34.837 12 26 Z"
              fill="#FEFEFE"
             />
          </g>
          <defs>
            <filter
              id="filter0_d_1153_940"
              x="0"
              y="0"
              width="297"
              height="56"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
               />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
               />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
               />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1153_940"
               />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1153_940"
                result="shape"
               />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

Shape1.defaultProps = {};

interface Shape1Props {}

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
