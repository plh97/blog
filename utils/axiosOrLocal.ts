import axios, { AxiosRequestConfig } from "axios";

const localAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    Accept: "application/vnd.github.v4.idl",
    "Content-Type": "application/json",
  },
});

// localAxios
export default async function AxiosOrLocal<T>({
  data,
  url,
  method,
}: AxiosRequestConfig) {
  const res = await localAxios<T>({ url, method, data });
  return res.data;
}
