import type { Fetcher } from "swr";

const fetcher: Fetcher = async (url: string, init?: RequestInit) => {
  try {
    const data = await fetch(url, init);
    if (!data.ok) {
      throw new Error("Network response was not OK");
    }
    return await data.json();
  } catch (err) {
    console.error(err);
  }
};

export default fetcher;
