import React from "react";
import Typical from "react-typical";
import { introdata } from "./content_option";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <>
      <div className="min-h-screen p-2 pt-0 bg-gray-600 flex items-center justify-center show-box">
        <div className="shrinkwrap">
          <div className="containerwrap flex">
            <img
              className="img-top opacity-80"
              src="./src/assets/unnamed (1).jpg"
            />
            <img
              className="img-mid opacity-30"
              src="./src/assets/unnamed (2).jpg"
            />
            <img className="img-bottom" src="./src/assets/unnamed.jpg" />
          </div>
        </div>
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="mt-52 intro_sec d-block d-lg-flex align-items-center">
              <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                <div className="align-self-center ">
                  <div className="intro mx-auto">
                    <h2 className="mb-1 mt-2 text-white text-5xl">
                      {introdata.title}
                    </h2>
                    <h1 className="fluidz-48 mb-1 mt-2 text-white text-3xl">
                      <Typical
                        steps={[
                          introdata.animated.first,
                          1000,
                          introdata.animated.second,
                          1000,
                          introdata.animated.third,
                          1000,
                        ]}
                        loop={Infinity}
                        wrapper="p"
                      />
                    </h1>
                    <p className="mb-1 mt-2 w-5/12 text-white text-xl">
                      {introdata.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
