import React from "react";
import house_2 from "../assets/img/png/house_2.png";
import right from "../assets/img/png/right.png";
function Should() {
  return (
    <section className="bg_color_fafafa pt-5">
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img className="w-100 px-lg-5" src={house_2} alt="nmbj" />
          </div>
          <div className="col-lg-6">
            <h2 className="fw_700 fs_48 ff_space_grotesk color_blue">
              Why you should choose us.{" "}
            </h2>
            <p className="color fw_400 fs_24 ff_space_grotesk mb-0">
              Creating quality urban lifestyles,building stronger communities
            </p>
            <div className="d-flex justify-content-between">
              <div className="mt-3">
                <div className="d-flex gap-2">
                  <img src={right} alt="mjhj" />
                  <p className="mb-0 fw_500 text-black fs_24 ff_space_grotesk">
                    World class
                  </p>
                </div>
                <div className="d-flex gap-2 mt-2">
                  <img src={right} alt="mjhj" />
                  <p className="mb-0 fw_500 text-black fs_24 ff_space_grotesk">
                    World class
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex gap-2">
                  <img src={right} alt="mjhj" />
                  <p className="mb-0 fw_500 text-black fs_24 ff_space_grotesk">
                    World class
                  </p>
                </div>
                <div className="d-flex gap-2 mt-2">
                  <img src={right} alt="mjhj" />
                  <p className="mb-0 fw_500 text-black fs_24 ff_space_grotesk">
                    World class
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Should;
