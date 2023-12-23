import { useQuery } from "@tanstack/react-query";

const fetchTicker = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v3/ticker/24hr`
  );
  const data = await response.json();

  return data;
};

const CACHE_TIME = 5 * 60 * 1000;

const useTicker = () => {
  return useQuery({
    queryKey: ["ticker"],
    queryFn: () => fetchTicker(),
    refetchInterval: CACHE_TIME,
    staleTime: CACHE_TIME,
  });
};

export { useTicker, fetchTicker };
