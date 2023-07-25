import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LinkCardShimla from "./link-card-shimla";

const RentPropertiesCard = () => {
  const navigate = useNavigate();

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
    <div className="self-stretch flex-1 flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            "Stay steps ahead in the quest for your dream home – Discover the
            latest properties with us and seize the opportunity to turn your
            aspirations into reality."
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          <LinkCardShimla
            locationText="/mappin.svg"
            locationId="Shimla"
            locationImageUrl="/arrowsout2.svg"
            onCard11Click={onCard11Click}
          />
          <LinkCardShimla
            locationText="/mappin1.svg"
            locationId="Himachal Pradesh"
            locationImageUrl="/arrowsout3.svg"
            propBackgroundImage={`url("/card-21@3x.png")`}
            onCard11Click={onCard21Click}
          />
          <LinkCardShimla
            locationText="/mappin.svg"
            locationId="Mumbai"
            locationImageUrl="/arrowsout2.svg"
            propBackgroundImage={`url("/card-31@3x.png")`}
            onCard11Click={onCard31Click}
          />
          <LinkCardShimla
            locationText="/mappin1.svg"
            locationId="Goa"
            locationImageUrl="/arrowsout3.svg"
            propBackgroundImage={`url("/card-41@3x.png")`}
            onCard11Click={onCard41Click}
          />
        </div>
      </div>
      <Button variant="contained" color="primary">
        Load more listing
      </Button>
    </div>
  );
};

export default RentPropertiesCard;
