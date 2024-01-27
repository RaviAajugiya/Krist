import React from "react";
import Logo from "../common/Logo";
import Icon from "@mdi/react";
import {
  mdiPhoneOutline,
  mdiWalletBifoldOutline,
  mdiEmailOpenOutline,
} from "@mdi/js";

function FooterIteam({ heading, items }) {
  return (
    <div className="mb-16 max-w-[270px]">
      <div className="space-y-4">
        <p className="text-3xl">{heading}</p>
        <div className="flex flex-col gap-5 pt-8">
          {items.map((item) => (
            <p key={item} className="text-[#9CA3AF] ">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterIteam;
