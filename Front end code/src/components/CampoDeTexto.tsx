export default function CampoDeTexto(props: CampoDeTextoProps) {
  return (
    <div
      className={`text-left font-bold font-['Roboto'] text-[rgba(105,96,96,1)]`}
    >
      <div
        className="absolute w-[518px] h-[93px] left-[855px] top-[282px] rounded-[64px]"
      >
        <div
          className="inset-0 absolute rounded-lg drop-shadow-lg bg-[rgba(254,254,254,1)]"
         />
        <p className="left-4 top-4 absolute text-xl leading-6 inline m-0">
          type
        </p>
      </div>
    </div>
  );
}

CampoDeTexto.defaultProps = {};

interface CampoDeTextoProps {}

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
