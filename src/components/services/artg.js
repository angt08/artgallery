import axios from 'axios';
const apiKey = "6b0a6a1f-8d41-4ac7-80c3-bca6b5c2069a"


export const getData = async (inputValue) => {
  
  const response = await axios.get(`https://api.harvardartmuseums.org`)

  console.log(response.data)
  
  return response.data

}