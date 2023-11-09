import axios, { AxiosRequestConfig } from "axios";
import nProgress from "nprogress";
import { isCSR } from "./ssr";

const localAxios = axios.create({
  baseURL: "https://api.github.com",
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
  // isCSR() && nProgress.start();
  const res = await localAxios<T>({ url, method, data });
  // isCSR() && nProgress.done();
  return res.data;
}
