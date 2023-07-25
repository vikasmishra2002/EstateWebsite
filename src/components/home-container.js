import { useMemo } from "react";

const HomeContainer = ({
  rentHomeText,
  rentHomeDescription,
  rentHomeTagline,
  propWidth,
  propHeight,
}) => {
  const rentYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] w-[312px] flex flex-col py-[22px] px-4 box-border items-start justify-start min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400"
      style={rentYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={rentHomeText}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative text-5xl leading-[32px] font-semibold text-center">
            {rentHomeDescription}
          </div>
          <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
            {rentHomeTagline}
          </div>
          <div className="relative leading-[24px] text-primary-500">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
