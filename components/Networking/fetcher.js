import axios from "axios";

export const fetcher = async (requestUrl) => {
  try {
    const res = await axios({
      method: "get",
      url: requestUrl,
      headers: {"Content-Type": "application/json",}
    });
    // console.log(res)
    return res;
  } catch (error) {
    return error;
  }
};

export const axiosFetcher = requestUrl => axios.get(requestUrl).then(res => res.data)

// export default fetcher;