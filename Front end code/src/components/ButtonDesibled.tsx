export default function ButtonDesibled(props: ButtonDesibledProps) {
  return (
    <div
      className={`px-8 py-0 absolute gap-2.5 inline-flex justify-center items-center text-left font-medium w-[134.52px] h-[50px] bottom-[34px] left-[calc(50%_-_67.26px_+_607.26px)] bg-[rgba(220,16,16,1)] rounded-[30px] font-['Roboto'] text-[rgba(248,248,248,1)]`}
    >
      <p className="m-0 text-[32px] leading-[normal]">Exit</p>
    </div>
  );
}

ButtonDesibled.defaultProps = {};

interface ButtonDesibledProps {}

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
