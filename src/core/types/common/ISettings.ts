interface IAppSettingRes {
  name: string;
  value: string;
}

interface IAppSetting {
  [key: string]: any;
}

interface ISettingsRes {
  userSetting: IAppSettingRes[];
  appSetting: IAppSettingRes[];
  userId: string;
}

interface ISettings {
  userSetting: IAppSetting;
  appSetting: IAppSetting;
  userId: string;
}

export type { IAppSettingRes, ISettingsRes, ISettings, IAppSetting };
