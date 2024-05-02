import axios from "axios";
import type { NewsParam } from "../types";

// CORS ON PROD (426) BECAUSE OF SUBSCRIPTION RUN IT ON LOCAL
const fetchNewApi = async (params: NewsParam) => {
    try {
        const { data } = await axios.get(
            "https://newsapi.org/v2/top-headlines",
            {
                headers: {
                    "x-api-key": "38b137ee8e90405d93db3c058c0ad4ff",
                },
                params: {
                    ...params,
                },
            }
        );
        return data;
    } catch (error) {
        return console.error(error);
    }
};

const fetchNytimes = async (params: NewsParam) => {
    try {
        const { data } = await axios.get(
            "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            {
                params: {
                    "api-key": "PrahXFIItbtPnEqzDancuCdJItdMtUHO",
                    ...params,
                },
            }
        );
        return data;
    } catch (error) {
        return console.error(error);
    }
};

const fetchGuardians = async (params: NewsParam) => {
    try {
        const { data } = await axios.get(
            "https://content.guardianapis.com/search",
            {
                params: {
                    "api-key": "38ed4779-52a7-4d65-957c-23c1b5ba170b",
                    "page-size": 20,
                    "show-fields": "thumbnail",
                    ...params,
                },
            }
        );
        return data;
    } catch (error) {
        return console.error(error);
    }
};

export { fetchNewApi, fetchNytimes, fetchGuardians };
