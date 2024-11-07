import axios from "axios";

const url = 'http://localhost:8000/reset-password'

export async function resetPassService(data) {
  try {
    const response = await axios.post(url, data);
    return response;
  }catch(err){
    return err.response;
  };
};