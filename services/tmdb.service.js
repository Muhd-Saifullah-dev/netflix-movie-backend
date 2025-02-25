const { TMDB_API_KEY}=require("../configs/config")
const axios=require("axios")
const {AppError }=require("../customErrors")


    const fetchDataFromTMDB=async(url)=>{
        const options = {
             headers: {
              accept: 'application/json',
              Authorization: `Bearer ${TMDB_API_KEY}`
            }
          };
        const response=await axios.get(url,options)
          if(response.status !==200){
            throw new AppError("failed to fetch data from TMDB",response.statusText )
          }
          
          return response.data
    }
    module.exports={fetchDataFromTMDB}