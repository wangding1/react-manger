import { AxiosRequestConfig } from 'axios';

export interface IConfig extends AxiosRequestConfig {
  showLoading?: boolean;
  showError?: boolean;
}
