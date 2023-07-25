import HomeContainer from "./home-container";

const AreaPropertiesContainer = () => {
  return (
    <div className="self-stretch flex-1 bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-large-400 sm:mix-blend-normal sm:flex sm:self-stretch sm:w-auto sm:h-auto sm:flex-col sm:active:w-auto sm:active:[align-self:unset] sm:active:flex-1">
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            "Discover a curated selection of extraordinary estates, meticulously
            chosen to redefine luxury living and exceed your expectations."
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <div className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px]">
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <img
                className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
                alt=""
                src="/icon.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="relative leading-[32px] font-semibold">
                  Sell your home
                </div>
                <div className="relative text-base leading-[24px] text-lightslategray text-left flex items-end w-[268px]">
                  "Unlock the door to endless possibilities – sell your home
                  with us and embark on a seamless journey towards the next
                  chapter of your life."
                </div>
                <summary className="relative" />
              </div>
            </div>
          </div>
          <HomeContainer
            rentHomeText="/icon1.svg"
            rentHomeDescription="Rent your home"
            rentHomeTagline={`"Experience the true essence of comfort and convenience – rent your dream home with us, where every day feels like a captivating retreat."`}
          />
          <HomeContainer
            rentHomeText="/icon2.svg"
            rentHomeDescription="Buy a home"
            rentHomeTagline={`"Embrace the art of homeownership – find your perfect sanctuary and make cherished memories in a place you can truly call your own."`}
            propWidth="unset"
            propHeight="unset"
          />
          <HomeContainer
            rentHomeText="/icon3.svg"
            rentHomeDescription="Free marketing"
            rentHomeTagline="We do a free evaluation to be sure you want to start selling."
            propWidth="332px"
            propHeight="367px"
          />
        </div>
      </div>
    </div>
  );
};

export default AreaPropertiesContainer;
