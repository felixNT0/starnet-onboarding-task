import { ReactNode } from "react";
import BottomTabs from "../components/bottom-tabs";
import Modal from "../components/modal";
import { useAppContext } from "../context";
import Exchange from "../pages/exchange";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  // Fetching data from the context
  const { openExchangeModal, toggleExchangeModal } = useAppContext();
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-[#161617]">
      {children}
      <BottomTabs />
      <Modal
        className="max-w-[500px] bg-[#161617]"
        isOpen={openExchangeModal}
        onClose={() => toggleExchangeModal(false)}
      >
        <Exchange />
      </Modal>
    </div>
  );
}
