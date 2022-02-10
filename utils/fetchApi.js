import axios from 'axios';


export const baseURL = "https://bayut.p.rapidapi.com";


export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "5a1f7f4154mshb90f95ffcdd5491p1d6dd2jsnfc05613eff1b",
    },
  });
  return data;
}