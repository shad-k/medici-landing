import React from "react";

import HistoryItem from "./HistoryItem";
import MintButton from "./MintButton";

const Drop: React.FC<{}> = () => {
  return (
    <section className="w-full lg:w-1/2 lg:overflow-auto h-full">
      <div
        className="w-full relative min-h-[100vh] bg-no-repeat bg-center bg-cover flex flex-col justify-end"
        style={{
          backgroundImage:
            'url("https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0280/usr/exhibitions/images/feature_panels/59/blue_smoke_web.jpeg")',
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
        <div className="w-full z-10 flex items-center justify-center">
          <div className="w-1/6 text-2xl text-left pl-5">
            <span className="text-base">PRICE</span>
            <br />
            <span>1 ETH</span>
          </div>
          <div className="w-1/6 text-2xl text-left">
            <span className="text-base">REMAINING</span>
            <br />
            <span>11/50</span>
          </div>
        </div>
        <MintButton />
      </div>
      <div className="p-3">
        <h4 className=" border-t border-slate-300/25 pt-8">HISTORY</h4>
        <div className="pt-2">
          <HistoryItem
            address="0x9C19B0497997Fe9E75862688a295168070456951"
            txHash="0xdda064c6969b221612c10041b43becd169151efc3e0c9de9aaa82af33739a4e4"
          />
          <HistoryItem
            address="0x9C19B0497997Fe9E75862688a295168070456951"
            txHash="0xdda064c6969b221612c10041b43becd169151efc3e0c9de9aaa82af33739a4e4"
          />
          <HistoryItem
            address="0x9C19B0497997Fe9E75862688a295168070456951"
            txHash="0xdda064c6969b221612c10041b43becd169151efc3e0c9de9aaa82af33739a4e4"
          />
        </div>
      </div>
    </section>
  );
};

export default Drop;
