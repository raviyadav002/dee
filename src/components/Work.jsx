import React from "react";
import Data from "./Data";

function Work() {
  return (
    <section className="py-5 bg_color_fafafa">
      <div className="container">
        <h2 className="fw_bold fs_48 color_blue ff_space_grotesk text-center">
          How it works.{" "}
        </h2>
        <p className="fw_regular fs_32 ff_space_grotesk text-center color mb-0">
          This is how our products works{" "}
        </p>
        <div className="row pt-5 justify-content-center">
          {Data.map((data) => {
            return (
              <div
                data-aos="fade-up"
                // data-aos-duration="3000"
                // data-aos-offset="100"
                className="col-sm-6 col-md-4 mb-4 mb-md-0"
              >
                <div className="box1 position-relative overflow-hidden">
                  <div className="overlay "></div>
                  <img src={data.image} alt="" />
                  <h2 className="fw_medium fs_36 text-black ff_space_grotesk">
                    {data.h2}
                  </h2>
                  <p className="fw_regular fs_24 ff_space_grotesk text-black mx_373">
                    {data.p}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
