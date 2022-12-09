import Ellipse2 from "assets/Ellipse2";

export default function ReportIssues(props: ReportIssuesProps) {
  return (
    <div
      className={`relative bg-white text-left font-bold w-[1512px] h-[982px] overflow-clip font-['Inter']`}
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
      <Ellipse2 />
      <div>
        <div
          className="[background:linear-gradient(0deg,_rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/0f4a55c1493c55e04b1beb7f55fedec7571b9fbe.webp)_no-repeat_center_/_contain] absolute w-[917px] h-[888px] left-[253px] top-[100px] bg-[rgba(0,0,0,0.2)] rounded-[331px]"
         />
      </div>
      <div className="text-white">
        <div
          className="absolute w-[763px] h-[105px] left-[400px] top-[25px] overflow-clip"
        >
          <p
            className="top-0 absolute text-6xl italic m-0 h-[87px] w-[457px] left-[236px] leading-[normal]"
          >
            {" Report Issue"}
          </p>
        </div>
      </div>
      <div>
        <div
          className="w-52 absolute h-[59px] left-[1304px] top-[41px] bg-[rgba(217,217,217,1)] rounded-[22px]"
         />
      </div>
      <div className="text-black">
        <p
          className="absolute text-4xl m-0 left-[1346px] top-[46px] leading-[normal]"
        >
          Back
        </p>
      </div>
      <div className="text-[rgba(6,6,6,1)]">
        <div
          className="absolute left-0 w-[564px] h-[658px] top-[330px] bg-[rgba(220,186,186,1)] overflow-clip"
        >
          <div>
            <div
              className="left-0 top-0 absolute w-[564px] h-[677px] bg-[rgba(245,240,240,1)]"
             />
          </div>
          <div>
            <p
              className="absolute m-0 left-[178px] top-[42px] text-[32px] leading-[normal]"
            >
              Issue box
            </p>
          </div>
        </div>
      </div>
      <div className="text-black">
        <div
          className="absolute bg-white w-[546px] h-[669px] left-[966px] top-[311px] overflow-clip"
        >
          <div
            className="left-0 top-0 absolute w-[546px] h-[661px] bg-[rgba(246,242,242,1)]"
           />
          <p
            className="absolute inline m-0 left-[195px] top-[50px] text-[32px] leading-[normal]"
          >
            Suggestion Box
          </p>
        </div>
      </div>
      <div className="text-white">
        <p className="left-8 top-6 absolute m-0 text-[32px] leading-[normal]">
          Submit
        </p>
      </div>
    </div>
  );
}

ReportIssues.defaultProps = {
  style: {},
};

interface ReportIssuesProps {
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
