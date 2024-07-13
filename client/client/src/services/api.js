import axios from 'axios';

const API_URL = "http://localhost:8000";
export const uplaodFile = async(data) =>{
try{
let response = await axios.post(`${API_URL}/upload` , data);
//axios return kr ga ab object jisme sa humhe data lana ha
return response.data;
} catch(error){
console.log('Error While Calling The Api', error.message);
}
} 