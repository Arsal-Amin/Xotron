import IconSmartphone from "assets/IconSmartphone";
import IconLock from "assets/IconLock";
import IconEyeOff from "assets/IconEyeOff";
import IconMail from "assets/IconMail";

export default function Textfield(props: TextfieldProps) {
  return (
    <>
      <div
        className={`gap-1.5 text-left font-bold font-['Gilroy'] text-[rgba(189,189,189,1)] transition-all ${
          props.type === "TYPE2" ? "w-[456px]" : ""
        } ${props.type === "TYPE" ? "w-[456px]" : ""} ${
          props.type === "TYPE1" ? "w-[456px]" : ""
        } ${props.type === "TYPE3" ? "flex-1 h-[43px]" : ""} ${
          props.type === "TYPE4" ? "flex-1" : ""
        }`}
      >
        <div
          className="[box-shadow:0px_0px_0px_1px_rgba(162,_162,_166,_1)_inset] [box-shadow-width:1px] px-3 py-1.5 w-full bg-white gap-2.5 flex items-center self-stretch rounded h-[43px]"
        >
          {props.type === "TYPE1" && <IconSmartphone />}
          {props.type === "TYPE1" && (
            <p className="flex-1 text-xs m-0 leading-[normal]">
              (+123) 9876543210
            </p>
          )}
          {props.type === "TYPE3" && (
            <p className="flex-1 text-xs m-0 leading-[normal]">
              Your firstname
            </p>
          )}
          {props.type === "TYPE4" && (
            <p className="flex-1 text-xs m-0 leading-[normal]">
              Your lastname
            </p>
          )}
          {props.type === "TYPE2" && <IconLock />}
          {props.type === "TYPE2" && (
            <p className="flex-1 text-xs m-0 leading-[normal]">
              Your password
            </p>
          )}
          {props.type === "TYPE2" && <IconEyeOff />}
          {props.type === "TYPE" && <IconMail />}
          {props.type === "TYPE" && (
            <p className="flex-1 text-xs m-0 leading-[normal]">
              Your email
            </p>
          )}
        </div>
      </div>
    </>
  );
}

Textfield.defaultProps = {
  type: "TYPE",
};

interface TextfieldProps {
  type: "TYPE" | "TYPE1" | "TYPE2" | "TYPE3" | "TYPE4";
}

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
