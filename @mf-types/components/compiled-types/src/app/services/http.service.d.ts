import { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
export declare class HttpService {
    axios: AxiosInstance;
    constructor(config?: CreateAxiosDefaults<any>);
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: {
        [key: string]: any;
    }, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: {
        [key: string]: any;
    }, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: {
        [key: string]: any;
    }, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config: AxiosRequestConfig): Promise<T>;
}
