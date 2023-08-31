import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../../services/api-client";
export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<PlatForm>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, // 24 hours
    staleTime: ms('24h'),
  });
export default usePlatforms;
