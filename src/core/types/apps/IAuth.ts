interface ILoginRes {
  userId: string;
  accessToken: string;
  expireInSeconds: number;
  refreshToken: string;
  alias?: string;
  refreshTokenExpireInSeconds: number;
}

interface IRegisterRes {
  userId: string;
  authentication: ILoginRes;
}

export type {
  // eslint-disable-next-line import/prefer-default-export
  ILoginRes,
  IRegisterRes,
};
