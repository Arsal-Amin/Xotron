export default function Ellipse2(props: Ellipse2Props) {
  return (
    <div>
      <div className="absolute w-[39px] h-[38px] left-[1416px] top-[141px]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="19.5"
            cy="19"
            rx="19.5"
            ry="19"
            fill="#A09F9F"
           />
        </svg>
      </div>
    </div>
  );
}

Ellipse2.defaultProps = {};

interface Ellipse2Props {}

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
