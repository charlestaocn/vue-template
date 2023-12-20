import axiosInstance from './index.ts';

export interface ApiResult<T> {
    code: number;
    msg: string;
    data: T;
}


let handlerResponse = (res: ApiResult<any>): any => {
    if (res.code == 200) {
        return res.data;
    } else {
        throw new Error(` api request fail code [ ${res.code} ]  msg [${res.msg}]`);
    }
}


export async function get<T>(url: string, params?: any): Promise<T> {
    const response = await axiosInstance.get<ApiResult<T>>(url, {params});
    return handlerResponse(response.data);
}

export async function post<T>(url: string, data?: any): Promise<T> {
    const response = await axiosInstance.post<ApiResult<T>>(url, data);
    return handlerResponse(response.data);
}

export async function put<T>(url: string, data?: any): Promise<T> {
    const response = await axiosInstance.put<ApiResult<T>>(url, data);
    return handlerResponse(response.data);
}

export async function del<T>(url: string, params?: any): Promise<T> {
    const response = await axiosInstance.delete<ApiResult<T>>(url, {params});
    return handlerResponse(response.data);
}
