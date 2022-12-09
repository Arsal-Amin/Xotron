import Textfield from "components/Textfield";
import IconLeft from "assets/IconLeft";

export default function SignupScreen(props: SignupScreenProps) {
  return (
    <div
      className="relative bg-white w-[1512px] h-[982px] overflow-clip"
      style={props.style}
    >
      <div
        className="absolute top-0 bg-white w-[756px] h-[982px] left-[756px] overflow-clip"
      >
        <div>
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/e2184390add592515d4f4947c31e9327ccc18edd.webp)_center_/_cover] absolute w-[1071px] h-[1432px] left-[-316px] top-[-450px]"
           />
        </div>
        <div className={`text-black text-left font-normal font-['Gilroy']`}>
          <p
            className="top-40 absolute text-2xl m-0 left-[150px] leading-[normal]"
          >
            Register your account
          </p>
        </div>
        <div className={`text-left font-bold font-['Inter']`}>
          <div
            className="absolute flex flex-col items-start left-[150px] top-[266px] gap-[18px]"
          >
            <div className="flex items-start w-[456px] gap-[18px]">
              <Textfield type="TYPE3" />
              <Textfield type="TYPE4" />
            </div>
            <p
              className="text-2xl m-0 leading-[normal] text-[rgba(13,4,4,1)]"
            >
              Email
            </p>
            <Textfield type="TYPE" />
            <p
              className="text-2xl m-0 leading-[normal] text-[rgba(21,1,1,1)]"
            >
              Phone Number
            </p>
            <Textfield type="TYPE1" />
            <p
              className="text-2xl m-0 leading-[normal] text-[rgba(19,9,9,1)]"
            >
              Password
            </p>
            <Textfield type="TYPE2" />
          </div>
        </div>
        <div className={`text-right font-bold font-['Gilroy']`}>
          <div
            className="absolute gap-1 flex items-start top-[767px] right-[297px]"
          >
            <p
              className="text-xs m-0 leading-[normal] text-[rgba(189,189,189,1)]"
            >
              Already have account?
            </p>
            <p
              className="text-xs m-0 leading-[normal] text-[rgba(54,101,197,1)]"
            >
              Login
            </p>
          </div>
        </div>
        <div>
          <div
            className="absolute gap-1.5 flex items-start left-[150px] top-[60px]"
          >
            <IconLeft />
          </div>
        </div>
        <div className={`text-black text-left font-bold font-['Inter']`}>
          <p
            className="absolute text-2xl m-0 left-[156px] top-[237px] leading-[normal]"
          >
            First Name
          </p>
        </div>
        <div className={`text-white text-center font-bold font-['Inter']`}>
          <p
            className="absolute text-sm leading-4 m-0 left-[356px] top-[685px]"
          >
            Continue
          </p>
        </div>
        <div
          className={`text-left font-bold font-['Inter'] text-[rgba(16,1,1,1)]`}
        >
          <p
            className="absolute text-2xl m-0 left-[391px] top-[237px] leading-[normal]"
          >
            Last Name
          </p>
        </div>
        <div className={`text-black text-left font-bold font-['Inter']`}>
          <p className="left-44 absolute text-xl leading-4 m-0 top-[59px]">
            Back
          </p>
        </div>
      </div>
      <div
        className="absolute left-0 top-0 w-[756px] h-[982px] bg-[rgba(182,152,152,1)] overflow-clip"
      >
        <div>
          <div
            className="[background:url()_no-repeat_center_/_contain] left-0 top-0 absolute w-[756px] h-[982px]"
           />
        </div>
        <div>
          <div
            className="top-0 absolute w-[731px] h-[993px] left-[25px]"
           />
        </div>
        <div>
          <div
            className="[background:linear-gradient(0deg,_rgba(120,_96,_96,_0.37),_rgba(120,_96,_96,_0.37)),url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/0f4a55c1493c55e04b1beb7f55fedec7571b9fbe.webp)_center_/_cover] left-0 top-0 absolute w-[756px] h-[982px] bg-[rgba(120,96,96,0.37)]"
           />
        </div>
      </div>
    </div>
  );
}

SignupScreen.defaultProps = {
  style: {},
};

interface SignupScreenProps {
  style: Object;
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
