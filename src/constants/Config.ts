import Config from "react-native-config";

const appConfig = {
  baseApiUrl: String(
    Config.REACT_APP_API_URL || "",
  ),
  gptUrl: String(Config.REACT_APP_GPT_URL || ""),
  gptToken: String(
    Config.REACT_APP_GPT_API_KEY || "",
  ),
  itemsPerPage: 10,
  page: 1,
  maxSuggestionPage: 6,
};

export default appConfig;
