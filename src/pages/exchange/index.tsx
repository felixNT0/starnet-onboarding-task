import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CgArrowsExchangeV } from "react-icons/cg";
import { FaDollarSign, FaEthereum } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../components/button";
import CurrencyCard from "../../components/cards";
import { useAppContext } from "../../context";

export default function Exchange() {
  // Fetching data from the context
  const { toggleExchangeModal, toggleActiveTab } = useAppContext();

  // State for the exchange state and animation key
  const [isExchanged, setIsExchanged] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Function that close the modal and set active tab to default value
  const onClose = () => {
    toggleActiveTab("Dashboard");
    toggleExchangeModal(false);
  };

  // Function that toggle exchange state and animation key
  const handleExchange = () => {
    setIsExchanged((prev) => !prev);
    setAnimationKey((prev) => prev + 1);
  };

  // Memoized data for the first currency card
  const sendData = useMemo(
    () => ({
      icon: isExchanged ? (
        <FaDollarSign className="text-white" size={30} />
      ) : (
        <FaEthereum className="text-black" size={30} />
      ),
      currency: isExchanged ? "USD" : "ETH",
      initialAmount: isExchanged ? "1801.73" : "0.6948",
      balance: isExchanged ? "100.95 USD" : "0.6948 ETH",
      actionColor: isExchanged ? "bg-[#00CB6A]" : "bg-white",
      action: "Send",
    }),
    [isExchanged]
  );

  // Memoized data for the second currency card
  const receiveData = useMemo(
    () => ({
      icon: isExchanged ? (
        <FaEthereum className="text-black" size={30} />
      ) : (
        <FaDollarSign className="text-white" size={30} />
      ),
      currency: isExchanged ? "ETH" : "USD",
      initialAmount: isExchanged ? "0.6948" : "1801.73",
      balance: isExchanged ? "0.6948 ETH" : "100.95 USD",
      actionColor: isExchanged ? "bg-white" : "bg-[#00CB6A]",
      action: "Receive",
    }),
    [isExchanged]
  );

  return (
    <div className="flex items-center w-full max-md:h-screen justify-center bg-[#161617] text-white p-4">
      <div className="w-full max-w-md space-y-3">
        <div className="flex items-center mb-6">
          <div
            onClick={onClose}
            className="rounded-full !cursor-pointer p-4 z-[90] flex justify-center items-center bg-[#242427]"
          >
            <IoIosArrowBack className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-semibold flex-grow text-center -ml-10">
            Exchange
          </h1>
        </div>

        <motion.div className="flex flex-col space-y-1">
          <div className="flex flex-col space-y-1">
            <motion.div
              key={`currency-send-${animationKey}`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >
              <CurrencyCard
                icon={sendData.icon}
                currency={sendData.currency}
                initialAmount={sendData.initialAmount}
                balance={sendData.balance}
                action={sendData.action}
                actionColor={sendData.actionColor}
              />
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 flex z-10 items-center justify-center">
                <button
                  onClick={handleExchange}
                  className="rounded-full p-4 bg-[#36363B]"
                >
                  <CgArrowsExchangeV className="h-7 w-7" />
                </button>
              </div>
            </div>

            <motion.div
              key={`currency-receive-${animationKey}`}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
            >
              <CurrencyCard
                icon={receiveData.icon}
                currency={receiveData.currency}
                initialAmount={receiveData.initialAmount}
                balance={receiveData.balance}
                action={receiveData.action}
                actionColor={receiveData.actionColor}
              />
            </motion.div>
          </div>
        </motion.div>

        <Button onClick={handleExchange}>Exchange</Button>

        <div className="space-y-2 border border-[#1F1F21] rounded-customBorderRadius p-4">
          <ExchangeInfo label="Rate" value="1 ETH = 2593,00 USD" />
          <ExchangeInfo label="Estimated fee" value="4,28 USD" />
          <ExchangeInfo label="You will receive" value="1 797,45 USD" />
        </div>
      </div>
    </div>
  );
}

const ExchangeInfo = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="text-white">{value}</span>
  </div>
);
