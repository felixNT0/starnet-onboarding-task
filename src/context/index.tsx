import { createContext, ReactNode, useContext, useState } from "react";

// creating context type
type IAppContextType = {
  openExchangeModal: boolean;
  toggleExchangeModal: (state: boolean) => void;
  activeTab: string;
  toggleActiveTab: (state: string) => void;
};

//creating the context
export const AppContext = createContext<IAppContextType>({
  openExchangeModal: false,
  toggleExchangeModal: () => {},
  activeTab: "",
  toggleActiveTab: () => {},
});

// Context Provider
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  // State management for the modal and active tab
  const [openExchangeModal, setOpenExchangeModal] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Dashboard");

  // Function to toggle the modal and active tab states
  const toggleExchangeModal = (state: boolean) => setOpenExchangeModal(state);
  const toggleActiveTab = (state: string) => setActiveTab(state);

  return (
    <AppContext.Provider
      value={{
        openExchangeModal,
        toggleExchangeModal,
        activeTab,
        toggleActiveTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

// this hold all the values from the context
export const useAppContext = () => useContext(AppContext);
