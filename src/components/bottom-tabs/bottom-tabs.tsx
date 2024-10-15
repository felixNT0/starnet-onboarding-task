import { motion } from "framer-motion";
import { FaExchangeAlt, FaHome, FaPiggyBank, FaWallet } from "react-icons/fa";
import { useAppContext } from "../../context";

export default function BottomTabs() {
  // Fetching data from the context
  const { toggleExchangeModal, activeTab, toggleActiveTab } = useAppContext();

  // Define the tabs and their actions
  const tabs = [
    {
      id: 1,
      name: "Dashboard",
      icon: <FaHome className="w-6 h-6" />,
      action: () => {},
    },
    {
      id: 2,
      name: "Exchange",
      icon: <FaExchangeAlt className="w-6 h-6" />,
      action: () => toggleExchangeModal(true),
    },
    {
      id: 3,
      name: "Accounts",
      icon: <FaWallet className="w-6 h-6" />,
      action: () => {},
    },
    {
      id: 4,
      name: "Savings",
      icon: <FaPiggyBank className="w-6 h-6" />,
      action: () => {},
    },
  ];

  // Function to handle tab click event and trigger the corresponding action
  const handleTabClick = (tabName: string, action: () => void) => {
    toggleActiveTab(tabName);
    action && action();
  };

  return (
    <nav className="fixed max-md:bottom-0 md:top-0 max-w-[1200px] mx-auto max-md:border-t md:border-b border-[#1F1F21] left-0 right-0 text-gray-400 p-4">
      <div className="flex justify-around items-center">
        {tabs.map(({ name, action, icon, id }) => (
          <motion.div
            key={id}
            className={`flex flex-col items-center !cursor-pointer ${
              activeTab === name ? "text-white" : ""
            }`}
            onClick={() => handleTabClick(name, action)}
            initial={{ scale: 1 }}
            animate={{ scale: activeTab === name ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
            <span className="text-xs mt-1">{name}</span>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
