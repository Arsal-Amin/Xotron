export default function XotronSignin(props: XotronSigninProps) {
  return (
    <div
      className={`relative bg-white text-left w-[1512px] h-[982px] overflow-clip font-['Inter']`}
      style={props.style}
    >
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/e2184390add592515d4f4947c31e9327ccc18edd.webp)_center_/_cover] left-0 top-0 absolute w-[1512px] h-[982px]"
       />
      <div
        className="left-0 top-0 absolute w-[1512px] h-[108px] bg-[rgba(143,123,226,1)]"
       />
      <p
        className="absolute text-2xl font-extrabold text-white inline m-0 h-[29px] w-[168px] left-[61px] top-[45px] leading-[normal]"
      >
        SignUp /SignIn
      </p>
      <p
        className="absolute font-bold inline m-0 w-[93px] left-[1330px] top-[45px] text-[32px] leading-[normal] text-[rgba(253,253,253,1)]"
      >
        Back
      </p>
      <div
        className="absolute top-60 leading-none inline-block font-bold left-[609px] text-[rgba(255,254,254,1)]"
      >
        <p className="text-5xl inline m-0 leading-[normal]">{"Sign "}</p>
        <p className="inline m-0 text-[55px] leading-[normal]">i</p>
        <p className="text-5xl inline m-0 leading-[normal]">n</p>
      </div>
      <div
        className="absolute w-[333px] h-[47px] left-[542px] top-[385px] bg-[rgba(217,217,217,1)] rounded-[5px]"
       />
      <p
        className="top-96 absolute font-normal text-black inline m-0 left-[555px] text-[32px] leading-[normal]"
      >
        Enter Email
      </p>
      <div
        className="absolute rounded w-[333px] h-[47px] left-[542px] top-[491px] bg-[rgba(217,217,217,1)]"
       />
      <p
        className="absolute font-normal text-black inline m-0 left-[546px] top-[491px] text-[32px] leading-[normal]"
      >
        Password
      </p>
      <div
        className="w-40 absolute font-bold h-[55px] left-[564px] top-[678px] bg-[rgba(119,114,114,0.42)] overflow-clip rounded-[57px] text-[rgba(53,47,56,1)]"
      >
        <p
          className="absolute m-0 left-[18px] top-[3px] text-[32px] leading-[normal]"
        >
          access
        </p>
      </div>
      <div
        className="absolute text-black font-normal w-[226px] h-[52px] left-[716px] top-[598px] bg-[rgba(235,216,216,1)] overflow-clip rounded-[15px]"
      >
        <p
          className="left-2 absolute text-2xl m-0 top-[9px] leading-[normal]"
        >
          forgot Password?
        </p>
      </div>
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/0f4a55c1493c55e04b1beb7f55fedec7571b9fbe:0.webp)_no-repeat_center_/_contain] absolute w-[518px] h-[877px] left-[994px] top-[103px]"
       />
      <div
        className="absolute w-[518px] h-[877px] left-[994px] top-[105px]"
       />
    </div>
  );
}

XotronSignin.defaultProps = {
  style: {},
};

interface XotronSigninProps {
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
