import axios from "axios";

const url = 'http://localhost:8000/update-password'
const token =  localStorage.getItem('User_Token');

export async function updatePassService(data) {
  try {
    const response = await axios.patch(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }catch(err){
    return err.response;
  };
};