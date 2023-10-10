export interface IAuthenticate {
  userId: string;
  accessToken: string;
  expireInSeconds: number;
  refreshToken: string;
  alias?: string;
  refreshTokenExpireInSeconds: number;
}
