import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button, Button as MuiButton } from "@mui/material";
import {
  Menu as AntMenu,
  Dropdown as AntDropdown,
  Button as AntButton,
} from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const HomeFinderContainer = () => {
  const navigate = useNavigate();

  const onSearchCTAClick = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  return (
    <div className="self-stretch flex-1 flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/public/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base text-primary-700 font-body-large-400">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <Button variant="contained" color="primary">
              Rent
            </Button>
            <Button variant="outlined" color="primary">
              Sale
            </Button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px] text-center">
                <div className="relative leading-[24px] capitalize font-semibold">
                  Locations
                </div>
                <AntDropdown
                  overlay={
                    <AntMenu>
                      {[
                        { value: "New Delhi" },
                        { value: "Mumbai" },
                        { value: "Pune" },
                        { value: "Chennai" },
                        { value: "Himachal Pradesh" },
                      ].map((option, index) => (
                        <AntMenu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </AntMenu.Item>
                      ))}
                    </AntMenu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </AntDropdown>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                  Property Type
                </div>
                <AntDropdown
                  className="self-stretch"
                  overlay={
                    <AntMenu>
                      {[
                        { value: "Studio apartments" },
                        { value: "One-bedroom apartments" },
                        { value: "Two-bedroom apartments" },
                        { value: "Three-bedroom apartments" },
                        { value: "Four or more bedroom apartments/houses" },
                      ].map((option, index) => (
                        <AntMenu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </AntMenu.Item>
                      ))}
                    </AntMenu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </AntDropdown>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                  Rent Range
                </div>
                <AntDropdown
                  className="self-stretch"
                  overlay={
                    <AntMenu>
                      {[
                        { value: "₹35000-₹55000" },
                        { value: "₹60000-₹950000" },
                        { value: "₹100000" },
                      ].map((option, index) => (
                        <AntMenu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </AntMenu.Item>
                      ))}
                    </AntMenu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </AntDropdown>
              </div>
              <MuiButton
                className="cursor-pointer"
                sx={{ width: 102 }}
                variant="contained"
                color="primary"
                onClick={onSearchCTAClick}
              >
                Search
              </MuiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFinderContainer;
