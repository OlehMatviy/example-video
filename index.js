import { AppRegistry, LogBox } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Provider } from "react-redux";

import { store } from "./src/store/store";
import App from "./App";
import { name as appName } from "./app.json";

LogBox.ignoreAllLogs();

const Root = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Root));
