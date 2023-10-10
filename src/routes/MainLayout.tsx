import "react-native-gesture-handler";
import { FC, PropsWithChildren } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTypedSelector } from "@app/hooks";
import { cl } from "@app/styles";
import { CustomToast } from "@app/components";
import HomeListModal from "@app/components/screens/home/HomeListModal";
import useMainLayout from "@app/hooks/screens/useMainLayout";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { notification } = useTypedSelector((state) => state.application);
  const { modals, toggleModal } = useMainLayout();

  return (
    <SafeAreaProvider style={cl.positionRelative}>
      {children}
      {notification.show && !notification.inModal && (
        <CustomToast
          show={notification.show}
          authLayout
          messages={notification.messages}
          type={notification.type}
          top={notification.top || false}
        />
      )}
      <HomeListModal modals={modals} toggleModal={toggleModal} />
    </SafeAreaProvider>
  );
};

export default MainLayout;
