const CardContainer = ({
  propertyImage,
  xANADUCOONOORTAMILNADU,
  car,
  bathtub,
  arrowsOut,
  vikasMishra,
  shareNetwork,
  plus,
  onCard1ContainerClick,
}) => {
  return (
    <div
      className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] cursor-pointer text-left text-[14.51px] text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
      onClick={onCard1ContainerClick}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={propertyImage}
      />
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          {xANADUCOONOORTAMILNADU}
        </div>
      </div>
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img className="relative w-[17.42px] h-[17.42px]" alt="" src={car} />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={bathtub}
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={arrowsOut}
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
            src="/ellipse-1@2x.png"
          />
          <div className="relative leading-[17.42px] font-medium">
            {vikasMishra}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.71px]">
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={shareNetwork}
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src="/heart.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={plus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
