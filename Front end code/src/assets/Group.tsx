export default function Group(props: GroupProps) {
  return (
    <div className="absolute left-[5%] right-[8.33%] top-[5%] bottom-[8.33%]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 25.25 25.25 L 19.643 19.633 L 25.25 25.25 Z M 22.75 12.125 C 22.75 14.943 21.631 17.645 19.638 19.638 C 17.645 21.631 14.943 22.75 12.125 22.75 C 9.307 22.75 6.605 21.631 4.612 19.638 C 2.619 17.645 1.5 14.943 1.5 12.125 C 1.5 9.307 2.619 6.605 4.612 4.612 C 6.605 2.619 9.307 1.5 12.125 1.5 C 14.943 1.5 17.645 2.619 19.638 4.612 C 21.631 6.605 22.75 9.307 22.75 12.125 V 12.125 Z"
          stroke="#FEFEFE"
          strokeWidth="2"
          strokeLinecap="round"
         />
      </svg>
    </div>
  );
}

Group.defaultProps = {};

interface GroupProps {}

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
