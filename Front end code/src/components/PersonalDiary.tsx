import Ellipse2 from "assets/Ellipse2";
import Polygon3 from "assets/Polygon3";
import Polygon5 from "assets/Polygon5";

export default function PersonalDiary(props: PersonalDiaryProps) {
  return (
    <div
      className={`relative bg-white text-left w-[1512px] h-[982px] overflow-clip font-['Inter']`}
      style={props.style}
    >
      <div>
        <div
          className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/e2184390add592515d4f4947c31e9327ccc18edd.webp)_center_/_cover] left-0 absolute w-[1512px] h-[1466px] top-[-484px]"
         />
      </div>
      <div>
        <div
          className="left-0 top-0 absolute w-[1512px] h-[108px] bg-[rgba(117,87,182,1)]"
         />
      </div>
      <div>
        <div
          className="absolute w-[604px] h-[60px] left-[869px] top-[130px] bg-[rgba(217,217,217,1)] rounded-[9px]"
         />
      </div>
      <Ellipse2 />
      <div className="text-black font-normal">
        <p
          className="absolute text-2xl m-0 left-[889px] top-[145px] leading-[normal]"
        >
          See yourProfile
        </p>
      </div>
      <Polygon3 />
      <div>
        <div
          className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/0f4a55c1493c55e04b1beb7f55fedec7571b9fbe.webp)_center_/_cover] absolute w-[379px] h-[368px] left-[-172px] top-[-76px] rounded-[331px]"
         />
      </div>
      <div className="text-white">
        <div
          className="absolute w-[763px] h-[105px] left-[400px] top-[25px] overflow-clip"
        >
          <div>
            <p
              className="left-36 absolute text-6xl italic m-0 h-[87px] w-[457px] top-[-87px] leading-[normal]"
            >
              {"     PersonalDiary"}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          className="w-52 absolute h-[59px] left-[1304px] top-[41px] bg-[rgba(217,217,217,1)] rounded-[22px]"
         />
      </div>
      <div className="text-black font-bold">
        <p
          className="absolute text-4xl m-0 left-[1346px] top-[46px] leading-[normal]"
        >
          Back
        </p>
      </div>
      <div>
        <div
          className="absolute left-0 w-[614px] h-[654px] top-[328px] overflow-clip"
        >
          <Polygon5 />
          <div
            className="left-40 top-3.5 absolute w-[236px] h-[47px] bg-[rgba(217,217,217,1)]"
           />
          <div
            className="left-7 top-32 absolute w-[536px] h-[407px] bg-[rgba(0,0,0,0.2)]"
           />
          <div
            className="absolute w-[541px] h-[392px] left-[37px] top-[131px] bg-[rgba(2,2,2,1)]"
           />
        </div>
      </div>
      <div>
        <div
          className="left-0 absolute w-[614px] h-[658px] top-[324px] bg-[rgba(198,200,246,0.85)]"
         />
      </div>
      <div className="text-black font-bold">
        <p
          className="absolute m-0 left-[214px] top-[892px] text-[32px] leading-[normal]"
        >
          Save
        </p>
      </div>
      <div className="text-black font-bold">
        <p
          className="absolute m-0 left-[237px] top-[385px] text-[32px] leading-[normal]"
        >
          Notes
        </p>
      </div>
      <div className="text-black">
        <div
          className="absolute left-40 leading-none inline-block top-[614px]"
        >
          <p className="font-bold inline m-0 text-[32px] leading-[normal]">
            {"  "}
          </p>
          <p className="font-light inline m-0 text-[32px] leading-[normal]">
            type.........
          </p>
        </div>
      </div>
      <div>
        <div
          className="absolute w-[269px] h-[220px] left-[993px] top-[324px] bg-[rgba(217,217,217,1)]"
         />
      </div>
      <div className="text-black font-light">
        <p
          className="absolute m-0 left-[1076px] top-[328px] text-[32px] leading-[normal]"
        >
          {"Private "}
        </p>
      </div>
      <div>
        <div
          className="absolute w-[267px] h-[205px] left-[995px] top-[726px] bg-[rgba(217,217,217,1)]"
         />
      </div>
      <div className="text-black font-light">
        <p
          className="absolute m-0 left-[1033px] top-[726px] text-[32px] leading-[normal]"
        >
          Saved notes
        </p>
      </div>
      <div>
        <div
          className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2f60c60d3752b101597c2c3ec92189d5875f8fde.webp)_center_/_cover] absolute w-[269px] h-[177px] left-[993px] top-[367px]"
         />
      </div>
      <div>
        <div
          className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/770ed282534c234b393505b9109fd1bd37dfa0e9.webp)_center_/_cover] w-56 absolute h-[161px] left-[1016px] top-[777px]"
         />
      </div>
    </div>
  );
}

PersonalDiary.defaultProps = {
  style: {},
};

interface PersonalDiaryProps {
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
