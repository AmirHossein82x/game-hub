import { useState, useEffect } from "react";
import apiClient, { FetchResponse } from "../../services/api-client";
import { CanceledError } from "axios";
import genres from "../../data/genres";

import { useQuery, useQueryClient } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const UseGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
      staleTime: 24 * 60 * 60 * 1000, // 24 hours
      initialData: {count: genres.length, results: genres}

  });

export default UseGenres;
