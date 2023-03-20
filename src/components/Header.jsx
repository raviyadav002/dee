import React, { useState } from "react";
import video from "../assets/img/png/video.png";
import house from "../assets/img/png/house.png";
import trg from "../assets/img/png/trg.png";
import search from "../assets/img/png/search.png";
function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className=" d-flex pt-4 bg_color_fafafa flex-column min-vh-100 overflow-hidden">
        <div class="container">
          <div className=" d-flex justify-content-between align-items-center w-100 ">
            <a className=" d-flex text-decoration-none " href="#">
              <h2 className="text-black text-decoration-none ff_oleo_script fw_400 fs_36  pt-2">
                Dee’s Estate
              </h2>
            </a>{" "}
            <ul className="d-flex gap-5 py-3 list-unstyled d-none d-xl-flex align-items-center mb-0 justify-content-end">
              <li>
                <a
                  class="  opcy text-decoration-none  text-black hover  fs_24 fw_700 ff_nunito  line position-realative"
                  href="#feature"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  class="   opcy text-decoration-none  text-black hover fs_24 fw_400 ff_space_grotesk  line position-realative"
                  href="#lets"
                >
                  Rent
                </a>
              </li>
              <li>
                <a
                  class="  opcy text-decoration-none  text-black hover fs_24 fw_400 ff_space_grotesk  line position-realative"
                  href="#popular"
                >
                  Land
                </a>
              </li>
              <li>
                <a
                  class="   opcy text-decoration-none  text-black hover fs_24 fw_400 ff_space_grotesk line position-realative"
                  href="#best"
                >
                  Agent
                </a>
              </li>
              <li>
                <a
                  class="  opcy text-decoration-none  text-black hover fs_24 fw_400 ff_space_grotesk line position-realative"
                  href="#best"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  class=" text-white fw_700 fs_24 ff_space_grotesk bg_hover  rounded-3 py-3 px-2  border-1  bg_color_blue"
                  href="#"
                >
                  Get Started
                </a>
              </li>
            </ul>{" "}
            <label
              className="menu_formatting d-flex justify-content-end d-xl-none"
              for="check"
            >
              <input
                onClick={() => setNavShow(!navShow)}
                className="menu bg-black "
                type="checkbox"
                id="check"
              />
              <span className="span_nav1"></span>
              <span className="span_nav2"></span>
              <span className="span_nav3"></span>
            </label>
          </div>
          <div className="d-xl-none d-flex ">
            <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3 gap-md-5 pt-3 transition">
                <li>
                  <a
                    class="text-decoration-none opcy hover  text-black fw-700 fs_16 text_strock transition fs_36 fw_400 ff_nunito  line"
                    href="#foot"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none opcy hover text-black text_strock transition fs_24 fw_400 ff_space_grotesk line"
                    href="#"
                  >
                    Rent
                  </a>
                </li>{" "}
                <li>
                  <a
                    class="text-decoration-none opcy hover text-black  fw_500 fs_16 text_strock transition fs_24 fw_400 ff_space_grotesk line"
                    href="#"
                  >
                    Land
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none opcy hover text-black  fw_500 fs_16 text_strock transition fs_24 fw_400 ff_space_grotesk line"
                    href="#"
                  >
                    Agent
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none opcy text-black  fw_500 fs_16 text_strock transition fs_24 fw_400 ff_space_grotesk line"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    class=" text-white fw-bold fs_24 ff_space_grotesk bg_hover  rounded-3 py-3 px-2  border-1  bg_color_blue"
                    href="#"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-grow-1  container flex-column justify-content-center align-items-center">
          <div className="row justify-content-center align-items-center pt-5">
            <div className="col-sm-6">
              <h2 className="fw_500 fs_64 color_blue ff_space_grotesk">
                Helping you find the property of your dreams.
              </h2>
              <p className="fw_400 fs_32 ff_space_grotesk color">
                Creating quality urban lifestyles,building stronger communities
              </p>
              <div className="d-flex gap-5">
                <a
                  class=" text-white fw_700 fs_24 ff_space_grotesk bg_hover  rounded-3 py-2 px-3  border-1  bg_color_blue"
                  href="#"
                >
                  Learn More
                </a>
                <a href="#">
                  <img src={video} alt="sjcaj" />
                </a>
              </div>
            </div>
            <div className="col-sm-6 mt-3 mt-sm-0">
              <img className="w-100" src={house} alt="wjdhqj" />
            </div>
          </div>
        </div>{" "}
        <div className="container">
          <div className="box mx-auto mt-5 px-5">
            <div className="d-flex flex-column justify-content-between flex-sm-row gap-5 py-4">
              <div>
                <div className="d-flex gap-2 align-items-center">
                  <h2 className="fw_700 fs_24 ff_space_grotesk color_blue ">
                    Location
                  </h2>
                  <img src={trg} alt="mn" />
                </div>
                <p className="fw_400 fs_24  ff_space_grotesk opacity_0_5 mb-0">
                  Lekki{" "}
                </p>
              </div>
              <div>
                <div className="d-flex gap-2 align-items-center">
                  <h2 className="fw_bold fs_24 ff_space_grotesk color_blue ">
                    Property Type
                  </h2>
                  <img src={trg} alt="mn" />
                </div>
                <p className="fw_400 fs_24  ff_space_grotesk opacity_0_5 mb-0">
                  Duplex{" "}
                </p>
              </div>
              <div>
                <div className="d-flex gap-2 align-items-center">
                  <h2 className="fw_700 fs_24 ff_space_grotesk color_blue ">
                    Max Price
                  </h2>
                  <img src={trg} alt="mn" />
                </div>
                <p className="fw_400 fs_24  ff_space_grotesk opacity_0_5 mb-0">
                  $10,000{" "}
                </p>
              </div>
              <div>
                <div className="d-flex gap-2 align-items-center">
                  <a
                    class=" text-white fw_700 fs_24 ff_space_grotesk bg_hover  rounded-3 py-3 px-2  border-1  bg_color_blue"
                    href="#"
                  >
                    {" "}
                    <img src={search} alt="mn" />
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
