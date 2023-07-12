import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre {
    id: number;
    name: string
}



const UseGenres = () => useData<Genre>('/genres')

export default UseGenres;
