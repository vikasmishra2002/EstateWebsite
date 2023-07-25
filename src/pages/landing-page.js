import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RentPropertiesContainer from "../components/rent-properties-container";
import ShubhsyaHeader from "../components/shubhsya-header";
import HomeFinderContainer from "../components/home-finder-container";
import AreaPropertiesDiv from "../components/area-properties-div";
import AreaPropertiesContainer from "../components/area-properties-container";
import RentPropertiesCard from "../components/rent-properties-card";
import RentCard from "../components/rent-card";
import ShubhsyaContainer from "../components/shubhsya-container";

const LandingPage = () => {
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

  const onCard11Click = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  const onCard21Click = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  const onCard31Click = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  const onCard41Click = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  return (
    <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
      <RentPropertiesContainer />
      <ShubhsyaHeader />
      <HomeFinderContainer />
      <AreaPropertiesDiv />
      <AreaPropertiesContainer />
      <RentPropertiesCard />
      <RentCard />
      <ShubhsyaContainer
        productIds="/houseline1.svg"
        productImageIds="/social-media-logo.svg"
        productImageIds20x20="/social-media-logo1.svg"
        productImageIds20x20x="/social-media-logo2.svg"
        productImageIds20x20xSmal="/social-media-logo3.svg"
        productImageIds20x20xMedi="/social-media-logo4.svg"
      />
    </div>
  );
};

export default LandingPage;
