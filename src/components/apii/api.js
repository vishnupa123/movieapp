import axios from "axios";

// store the url in a variable
const Base_url = "https://api.themoviedb.org/3/movie/popular?api_key=b7e95c400d994857ff15ea758a87b75a";

export const getalldata = async () => {
  const response = await axios.get(Base_url);
  return response.data; // better: return only data
};






// functon to get treding items
const Base_urlT="https://api.themoviedb.org/3/trending/movie/day?api_key=b7e95c400d994857ff15ea758a87b75a";

 export const gettrendingdata= async()=>{

  const response =await axios.get(Base_urlT)
return response

}

