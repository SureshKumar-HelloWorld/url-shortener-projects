import { useQuery } from "react-query";
import api from "../api/api";


export const useFetchTotalClicks = (token , onError) => {
return useQuery("url-totalclick", 
     async () => {
    return await api.get("api/urls/analytics/totalClicks?startDate=2025-03-04T00:00:00&endDate=2025-03-07T15:59:59", 
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
