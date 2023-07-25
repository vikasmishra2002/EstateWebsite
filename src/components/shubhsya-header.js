const ShubhsyaHeader = () => {
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] pr-[89px] pl-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between lg:flex lg:self-stretch lg:h-auto mq350small:hidden">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">
              Shubhāsya
            </div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-gray-100 lg:hidden sm:hidden">
          <div className="flex flex-row items-start justify-start gap-[30px]">
            <div className="relative leading-[22px]">HOME</div>
            <div className="relative leading-[22px]">ABOUT US</div>
            <div className="relative leading-[22px]">OUR AGENTS</div>
            <div className="relative leading-[22px] font-semibold">
              PROPERTIES
            </div>
            <div className="relative leading-[22px]">GALLERY</div>
            <div className="relative leading-[22px]">BLOG</div>
            <div className="relative leading-[22px]">CONTACT US</div>
            <div className="relative leading-[22px]">SEARCH</div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex md:flex mq350small:flex">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ShubhsyaHeader;
