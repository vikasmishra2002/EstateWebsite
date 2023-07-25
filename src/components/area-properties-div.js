import CentervilleLink from "./centerville-link";

const AreaPropertiesDiv = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Properties by Area
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          Unlock the Door to Your Dream Home: Your Perfect Estate Awaits!
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <CentervilleLink cityName="Centerville" />
            <CentervilleLink
              cityName="Centerville"
              propBackgroundImage={`url("/card-2@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
            <CentervilleLink
              cityName="Centerville"
              propBackgroundImage={`url("/card-3@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <CentervilleLink
              cityName="Arlington"
              propBackgroundImage={`url("/card-4@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
            <CentervilleLink
              cityName="Centerville"
              propBackgroundImage={`url("/card-5@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaPropertiesDiv;
