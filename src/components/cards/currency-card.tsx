import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CurrencyCard = ({
  icon,
  currency,
  initialAmount,
  balance,
  action,
  actionColor,
}: {
  icon: React.ReactNode;
  currency: string;
  initialAmount: string;
  balance: string;
  action: string;
  actionColor: string;
}) => {
  // amount state
  const [amount, setAmount] = useState(initialAmount);

  return (
    <div
      className={`bg-[#242427] backdrop-blur-sm rounded-customBorderRadius p-4 space-y-4 ${
        action === "Send" && "pb-8"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div
            className={`w-[60px] h-[60px] ${actionColor} rounded-full flex items-center justify-center`}
          >
            {icon}
          </div>
          <span className="font-normal text-2xl">{currency}</span>
          <FaChevronDown className="text-gray-400" />
        </div>
        <button
          className={`text-sm border border-gray-700 py-2 px-4 text-gray-400 rounded-3xl`}
        >
          {action}
        </button>
      </div>
      <div className="flex items-center justify-around">
        <div />
        <input
          type="number"
          value={Number(amount)}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            appearance: "none",
            MozAppearance: "textfield",
          }}
          className={`text-3xl w-full ${
            action === "Send" && "-mr-[60px]"
          } font-bold text-center bg-transparent border-none outline-none !text-white`}
        />
        {action === "Send" && (
          <button className="text-sm bg-[#093822] text-[#00CC6B] py-2 px-4 rounded-[50px]">
            Max
          </button>
        )}
      </div>
      <p className="text-sm text-gray-500 text-center">
        Balance: <span className="text-white">{balance}</span>
      </p>
    </div>
  );
};
export default CurrencyCard;
