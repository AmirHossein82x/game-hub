import { useState, useEffect } from "react";
import APIClient from "../../services/api-client";
import { CanceledError } from "axios";
import genres from "../../data/genres";

import { useQuery, useQueryClient } from "@tanstack/react-query";

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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default UseGenres;
