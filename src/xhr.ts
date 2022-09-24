import axios from "axios";

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/api/v1/"
      : "https://tips.appsteak.com/api/v1/",
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
