import React from "react";
import Choos from "./Choos";

function Choose() {
  return (
    <section className="py-5 bg_color_fafafa">
      <div className="container py-5">
        <h2 className="fw_bold fs_48 color_blue ff_space_grotesk text-center">
          Our Featured Properties.{" "}
        </h2>
        <p className="fw_regular fs_32 ff_space_grotesk text-center color mb-0">
          One of our biggest product to be featured and that has sold out the
          most.{" "}
        </p>
        <div className="d-flex justify-content-end">
          <a
            class=" text-white fw-bold fs_24 ff_space_grotesk bg_hover  rounded-3 py-2 px-3  border-1  bg_color_blue"
            href="#"
          >
            View more
          </a>
        </div>
        <div className="row mb-3 mb-lg- pt-5 justify-content-center">
          {Choos.map((data) => {
            return (
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="box2 p-4">
                  <img className="w-100" src={data.image} alt="" />
                  <div className=" d-flex justify-content-between px-3 py-3 align-items-center">
                    <div>
                      <h2 className="fw_medium fs_32 text-black ff_space_grotesk">
                        {data.h2}
                      </h2>
                      <p className="fw_regular fs_20  text-black ff_space_grotesk opacity_o8 mb-0">
                        {data.p1}
                      </p>
                    </div>
                    <div>
                      <p className="fw_regular fs_20 ff_space_grotesk text-black mb-0">
                        {data.p2}
                      </p>
                      <p className="fw_bold fs_20 ff_space_grotesk color_blue mb-0">
                        {data.p3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Choose;
