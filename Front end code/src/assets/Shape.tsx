export default function Shape(props: ShapeProps) {
  return (
    <div>
      <div
        className="absolute left-[28.54%] right-[56.25%] top-[51.71%] bottom-[38.17%] drop-shadow-lg"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 219 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1153_938)">
            <path
              d="M 12 39.5 C 12 23.208 25.208 10 41.5 10 H 177.5 C 193.792 10 207 23.208 207 39.5 C 207 55.792 193.792 69 177.5 69 H 41.5 C 25.208 69 12 55.792 12 39.5 Z"
              fill="#FEFEFE"
             />
          </g>
          <defs>
            <filter
              id="filter0_d_1153_938"
              x="0"
              y="0"
              width="219"
              height="83"
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
                result="effect1_dropShadow_1153_938"
               />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1153_938"
                result="shape"
               />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

Shape.defaultProps = {};

interface ShapeProps {}

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
