import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient, { FetchResponse } from "../../services/api-client";

interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<PlatForm>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default usePlatforms;
