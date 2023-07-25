import { Button } from "@mui/material";

const RentCard = () => {
  return (
    <div className="self-stretch flex-1 bg-primary-50 flex flex-row flex-wrap py-[86px] px-[5px] items-start justify-center text-center text-21xl text-primary-800 font-body-large-400">
      <div className="w-[900px] h-[609px] flex flex-col py-0 px-2.5 box-border items-center justify-start gap-[40px] max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Contact us
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            "Ready to embark on your journey to a new home? Reach out to us now
            and let's turn your property dreams into a seamless and exciting
            reality."
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-center justify-start gap-[17px] text-left text-5xl text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <b className="self-stretch relative leading-[36px]">Enquiry Form</b>
            <div className="self-stretch relative text-lg leading-[30px] font-components-input-text text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
              <input
                className="font-components-input-text text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray-200 md:flex-[unset] md:self-stretch"
                type="text"
                placeholder="First name"
              />
              <div className="self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-center border-[1px] border-solid border-gray-200 md:flex-[unset] md:self-stretch">
                <input
                  className="[border:none] font-components-input-text text-base bg-[transparent] relative tracking-[0.15px] leading-[24px] text-darkgray text-left"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray-200">
              <input
                className="[border:none] font-components-input-text text-base bg-[transparent] relative tracking-[0.15px] leading-[24px] text-darkgray text-left"
                type="email"
                placeholder="Email id"
              />
            </div>
            <div className="self-stretch rounded box-border h-[105px] flex flex-col p-3 items-start justify-start border-[1px] border-solid border-gray-200">
              <input
                className="[border:none] font-components-input-text text-base bg-[transparent] relative tracking-[0.15px] leading-[24px] text-darkgray text-left"
                type="text"
                placeholder="Comments or questions"
              />
            </div>
            <Button sx={{ width: 222 }} variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
