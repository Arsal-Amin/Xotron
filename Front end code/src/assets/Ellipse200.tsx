export default function Ellipse200(props: Ellipse200Props) {
  return (
    <div
      className="inset-y-0 w-1.5 absolute flex left-[38.46%] right-[40.67%]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 6 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="3.07163"
          cy="2.5"
          rx="2.5"
          ry="2.76451"
          transform="rotate(-90 3.07163 2.5)"
          fill="#979797"
         />
      </svg>
    </div>
  );
}

Ellipse200.defaultProps = {};

interface Ellipse200Props {}

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
