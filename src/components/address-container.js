import AddressCardContainer from "./address-card-container";

const AddressContainer = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-large-400">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
        <div className="rounded-3xs bg-gray-white box-border w-[350px] h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
          <img
            className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
            alt=""
            src="/unsplashrlwe8f8anoc4@2x.png"
          />
          <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
            <div className="flex-1 relative leading-[20.32px] font-medium">
              92 ALLIUM PLACE, ORLANDO FL 32827
            </div>
          </div>
          <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
            <div className="relative leading-[18.98px] font-semibold">
              $ 590,693
            </div>
          </div>
          <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500">
            <div className="flex flex-row items-center justify-start gap-[4.35px]">
              <img
                className="relative w-[17.42px] h-[17.42px]"
                alt=""
                src="/car2.svg"
              />
              <div className="relative leading-[16.27px] font-medium">4</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4.35px]">
              <img
                className="relative w-[17.42px] h-[17.42px]"
                alt=""
                src="/bathtub2.svg"
              />
              <div className="relative leading-[16.27px] font-medium">4</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4.35px]">
              <img
                className="relative w-[17.42px] h-[17.42px]"
                alt=""
                src="/arrowsout4.svg"
              />
              <div className="relative leading-[16.27px] font-medium">
                2,096.00 ft
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
            <div className="flex flex-row items-center justify-start gap-[5.81px]">
              <img
                className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                alt=""
                src="/ellipse-11@2x.png"
              />
              <div className="relative leading-[17.42px] font-medium">
                Jenny Wilson
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8.71px]">
              <input
                className="[border:none] bg-primary-50 rounded-[1.45px] flex flex-row p-[2.902620315551758px] items-start justify-start"
                type="text"
              />
              <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                <img
                  className="relative w-[14.51px] h-[14.51px]"
                  alt=""
                  src="/heart1.svg"
                />
              </div>
              <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                <img
                  className="relative w-[14.51px] h-[14.51px]"
                  alt=""
                  src="/plus3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <AddressCardContainer
          propertyImage="/unsplashrlwe8f8anoc5@2x.png"
          car="/car3.svg"
          bathtub="/bathtub3.svg"
          arrowsOut="/arrowsout4.svg"
          ellipse1="/ellipse-11@2x.png"
          shareNetwork="/sharenetwork2.svg"
          heart="/heart2.svg"
          plus="/plus4.svg"
        />
        <AddressCardContainer
          propertyImage="/unsplashrlwe8f8anoc6@2x.png"
          car="/car4.svg"
          bathtub="/bathtub4.svg"
          arrowsOut="/arrowsout4.svg"
          ellipse1="/ellipse-11@2x.png"
          shareNetwork="/sharenetwork3.svg"
          heart="/heart1.svg"
          plus="/plus3.svg"
        />
        <AddressCardContainer
          propertyImage="/unsplashrlwe8f8anoc7@2x.png"
          car="/car3.svg"
          bathtub="/bathtub3.svg"
          arrowsOut="/arrowsout4.svg"
          ellipse1="/ellipse-11@2x.png"
          shareNetwork="/sharenetwork4.svg"
          heart="/heart2.svg"
          plus="/plus5.svg"
        />
        <AddressCardContainer
          propertyImage="/unsplashrlwe8f8anoc4@2x.png"
          car="/car2.svg"
          bathtub="/bathtub2.svg"
          arrowsOut="/arrowsout4.svg"
          ellipse1="/ellipse-11@2x.png"
          shareNetwork="/sharenetwork4.svg"
          heart="/heart3.svg"
          plus="/plus6.svg"
        />
        <AddressCardContainer
          propertyImage="/unsplashrlwe8f8anoc8@2x.png"
          car="/car5.svg"
          bathtub="/bathtub5.svg"
          arrowsOut="/arrowsout5.svg"
          ellipse1="/ellipse-12@2x.png"
          shareNetwork="/sharenetwork5.svg"
          heart="/heart4.svg"
          plus="/plus7.svg"
        />
        <AddressCardContainer
          propertyImage="/unsplashrlwe8f8anoc9@2x.png"
          car="/car6.svg"
          bathtub="/bathtub6.svg"
          arrowsOut="/arrowsout5.svg"
          ellipse1="/ellipse-12@2x.png"
          shareNetwork="/sharenetwork6.svg"
          heart="/heart5.svg"
          plus="/plus8.svg"
        />
        <AddressCardContainer
          propertyImage="/unsplashrlwe8f8anoc10@2x.png"
          car="/car5.svg"
          bathtub="/bathtub5.svg"
          arrowsOut="/arrowsout5.svg"
          ellipse1="/ellipse-12@2x.png"
          shareNetwork="/sharenetwork7.svg"
          heart="/heart4.svg"
          plus="/plus9.svg"
        />
      </div>
    </div>
  );
};

export default AddressContainer;
