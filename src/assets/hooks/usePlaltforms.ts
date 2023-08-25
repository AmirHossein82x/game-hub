import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default usePlatforms;
