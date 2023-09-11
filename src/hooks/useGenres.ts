import ms from 'ms';
import genres from "../data/genres";
import APIClient from "../services/api-client";

import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const UseGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, // 24 hours
    staleTime: ms('24h'),
    initialData: { count: genres.length, results: genres, next: null },
  });

export default UseGenres;
