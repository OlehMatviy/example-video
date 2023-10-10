import "react-native-gesture-handler";
import MainNavigation from "@app/routes/MainNavigation";
import MainLayout from "@app/routes/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <MainNavigation />
    </MainLayout>
  );
};

export default App;
