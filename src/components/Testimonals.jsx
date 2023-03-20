import React from "react";
import Alex from "./Alex";

function Work() {
  return (
    <section className="py-5 bg_color_fafafa">
      <div className="container">
        <h2 className="fw_700 fs_48 color_blue ff_space_grotesk text-center">
          Testimonials.{" "}
        </h2>
        <p className="fw_400 fs_32 ff_space_grotesk text-center color mb-0">
          This is what our client are saying{" "}
        </p>
        <div className="d-flex justify-content-end">
          <a
            class=" text-white fw_700 fs_24 ff_space_grotesk bg_hover  rounded-3 py-2 px-3  border-1  bg_color_blue"
            href="#"
          >
            View more
          </a>
        </div>
        <div className="row pt-5 justify-content-center">
          {Alex.map((data) => {
            return (
              <div className="col-md-6 col-lg-4 col-md-4 mb-4 mb-lg-0">
                <div className="box3 p-3 position-relative overflow-hidden">
                  <div className="overlay"></div>
                  <h2 className="fw_700 fs_29 text-black ff_space_grotesk">
                    {data.h2}
                  </h2>
                  <p className="fw_600 fs_18 ff_nunito text-black mb-0">
                    {data.p1}
                  </p>
                  <p className="fw_400 fs_22 ff_space_grotesk text-black mb-0 opacity_0_5">
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
