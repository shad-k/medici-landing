import React from "react";
import Identicon from "react-identicons";

import { getTrimmedAddress } from "../utils/helpers";

const HistoryItem: React.FC<{ address: string; txHash: string }> = ({
  address,
  txHash,
}) => {
  return (
    <div className="border border-white rounded-xl p-3 flex items-center justify-between my-3">
      <div className="border border-white rounded-full p-3 mr-4">
        <Identicon string="randomness" size="30" />
      </div>
      <div className="flex-1">{getTrimmedAddress(address)}</div>
      <a href={`https://etherscan.io/tx/${txHash}`} target="_blank">
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/external-link.png" />
      </a>
    </div>
  );
};

export default HistoryItem;
