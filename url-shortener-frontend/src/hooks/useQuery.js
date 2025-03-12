import { useQuery } from "react-query";
import api from "../api/api";

export const useFetchMyShortUrls = (token, onError) => {
    return useQuery("my-shortenurls",
         async () => {
            return await api.get(
                "/api/urls/myurls",
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
    },
          {
            select: (data) => {
             
                const sortedData = data.data.sort(
                (a,b) => new Date(b.createdDate) - new Date(a.createdDate)
                   
                );
             
                return sortedData;
            },
            onError,
            staleTime: 5000
          }
        );
};


export const useFetchTotalClicks = (token , onError) => {
return useQuery("url-totalclick", 
     async () => {
    return await api.get("api/urls/totalClicks?startDate=2025-03-11&endDate=2025-03-12", 
        {
            headers : {
                "Content-Type":"application/json",
                Accept : "application/json",
                Authorization : "Bearer " + token,
            },
        }
    );
},
   {
    select: (data) =>{
        // data.data =>
        // {
        // "2025-03-01": 120, 
        // "2025-03-02": 100,
        // "2025-03-03": 80,
        // },
    const  convertToArray = Object.keys(data.data).map((key) => ({
        clickDate : key,
        count : data.data[key]
    }));
    // object.keys(data.data) => ["2025-03-01","2025-03-02","2025-03-03"]

    //FINAL 
    // [
    //     {clickDate:"2025-03-01", count:120},
    //   {clickDate:"2025-03-02", count:100},
    //   {clickDate:"2025-03-03", count:80},
    // ]
      return convertToArray;
   },
   onError,
   staleTime:5000  
 })

};
