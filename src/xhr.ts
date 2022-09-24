import axios from "axios";

const client = axios.create({
  baseURL: "https://tips.appsteak.com/api/v1/",
});

// function* xhrPost(
//   url: string,
//   data: any,
//   onError: (err: any) => void,
//   config: AxiosRequestConfig
// ) {
//   return client.post(url, data, config);
// }

export { client };
