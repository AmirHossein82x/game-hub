import useData from "./useData";

interface PlatForm {
    id: number;
    name: string;
    slug: string;
}


const usePlatforms = () => useData<PlatForm>('/platforms/lists/parents')
export default usePlatforms;