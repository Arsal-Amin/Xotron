import ButtonDesibled from "components/ButtonDesibled";

export default function Header(props: HeaderProps) {
  return (
    <div>
      <div
        className="absolute left-0 top-0 w-[1440px] h-[118px] bg-[rgba(65,15,170,0.76)]"
      >
        <div className="left-0 top-0 absolute w-[1440px] h-[118px]" />
        <div
          className="h-px left-0 absolute w-[1440px] top-[117px] bg-[rgba(226,226,226,1)]"
         />
        <ButtonDesibled />
      </div>
    </div>
  );
}

Header.defaultProps = {};

interface HeaderProps {}

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
