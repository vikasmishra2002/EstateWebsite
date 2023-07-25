import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardContainer from "./card-container";

const RentPropertiesContainer = () => {
  const navigate = useNavigate();

  const onCard1ContainerClick = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  const onCard2ContainerClick = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  const onCard3ContainerClick = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  const onCard4ContainerClick = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  return (
    <div className="self-stretch flex-1 flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Discover your ideal properties with our website's best-in-class
            listings. From stunning views to convenient locations, luxurious
            amenities to cozy hideaways, find the perfect home sweet home for
            you. Begin your journey today!
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px] text-left text-[14.51px] text-gray-700">
          <CardContainer
            propertyImage="/unsplashrlwe8f8anoc@2x.png"
            xANADUCOONOORTAMILNADU="XANADU, COONOOR TAMIL NADU"
            car="/car.svg"
            bathtub="/bathtub.svg"
            arrowsOut="/arrowsout.svg"
            vikasMishra="Vikas Mishra"
            shareNetwork="/sharenetwork.svg"
            plus="/plus.svg"
            onCard1ContainerClick={onCard1ContainerClick}
          />
          <CardContainer
            propertyImage="/unsplashrlwe8f8anoc1@2x.png"
            xANADUCOONOORTAMILNADU="AN OASIS OF SERENITY, JODHPUR RAJASTHAN"
            car="/car.svg"
            bathtub="/bathtub.svg"
            arrowsOut="/arrowsout.svg"
            vikasMishra="Manni "
            shareNetwork="/sharenetwork.svg"
            plus="/plus1.svg"
            onCard1ContainerClick={onCard2ContainerClick}
          />
          <CardContainer
            propertyImage="/unsplashrlwe8f8anoc2@2x.png"
            xANADUCOONOORTAMILNADU="BALLYHACK COTTAGE, SHIMLA HIMACHAL PRADESH"
            car="/car1.svg"
            bathtub="/bathtub1.svg"
            arrowsOut="/arrowsout1.svg"
            vikasMishra="Parshuram"
            shareNetwork="/sharenetwork1.svg"
            plus="/plus2.svg"
            onCard1ContainerClick={onCard3ContainerClick}
          />
          <CardContainer
            propertyImage="/unsplashrlwe8f8anoc3@2x.png"
            xANADUCOONOORTAMILNADU="BAAG-E-FURSAT CHANDIGARH"
            car="/car1.svg"
            bathtub="/bathtub1.svg"
            arrowsOut="/arrowsout1.svg"
            vikasMishra="Nisha "
            shareNetwork="/sharenetwork1.svg"
            plus="/plus2.svg"
            onCard1ContainerClick={onCard4ContainerClick}
          />
        </div>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] rounded bg-primary-500 flex flex-row py-3 px-6 items-start justify-start text-base text-gray-white"
        to="/properties-grid-view"
      >
        <div className="relative leading-[24px] font-medium">
          Load more listing
        </div>
      </Link>
    </div>
  );
};

export default RentPropertiesContainer;
