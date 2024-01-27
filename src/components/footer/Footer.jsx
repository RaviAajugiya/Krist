import React from "react";
import Icon from "@mdi/react";
import {
  mdiPhoneOutline,
  mdiWalletBifoldOutline,
  mdiEmailOpenOutline,
  mdiApple,
  mdiGooglePlay,
} from "@mdi/js";

import FooterIteam from "./FooterIteam";
import Logo from "../common/Logo";

function Footer() {
  return (
    <>
      <footer className="pt-10 px-32">
        <div className="flex justify-between flex-wrap gap-10">
          <div className="mb-16 max-w-[270px]">
            <div className="space-y-4">
              <Logo className="scale-125 ml-8" />
              <div className="flex flex-col gap-5 pt-8">
                <p className="flex  items-center gap-3 text-[#9CA3AF]">
                  <Icon
                    path={mdiWalletBifoldOutline}
                    size={1}
                    className="text-primary"
                  />
                  <span>
                    Shop 009A, Level 4, Block A, <br /> Demo Park, Ottawa{" "}
                  </span>
                </p>
                <p className="flex items-center  gap-3 text-[#9CA3AF] ">
                  <Icon
                    path={mdiPhoneOutline}
                    size={1}
                    className="text-primary"
                  />
                  <span> +1-613-555-0182 </span>
                </p>
                <p className="flex items-center   gap-3 text-[#9CA3AF]">
                  <Icon
                    path={mdiEmailOpenOutline}
                    size={1}
                    className="text-primary"
                  />
                  <span> contact@yourmail.com </span>
                </p>
              </div>
            </div>
          </div>
          <FooterIteam
            heading="My Account"
            items={[
              "My Profile",
              "My Order History",
              "Order Tracking",
              "Shopping Cart",
            ]}
          />
          <FooterIteam
            heading="Shop Departments"
            items={[
              "Computers & Accessories",
              "Smartphones & Tablets",
              "TV, Video & Audio",
              "Cameras, Photo & Video",
            ]}
          />

          <div>
            <p className="text-3xl">Download app</p>
            <div className="flex p-2 items-center gap-4 mt-10 mb-5 border-0 rounded-lg bg-primary">
              <Icon path={mdiApple} size={1.5} />
              <div>
                <p className="text-sm">Download app from</p>
                <p className=" text-lg">Apple app store</p>
              </div>
            </div>
            <div className="flex p-2 items-center gap-4">
              <Icon path={mdiGooglePlay} size={1.5} />
              <div>
                <p className="text-sm">Get it on</p>
                <p className=" text-lg">Google play store</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
