import axios from "axios";

const baseUrl = 'http://localhost:8000'

export async function acessoUser(data, accesOption) {
  let url;

  if(accesOption === 'register') {
    url = `${baseUrl}/user-register`
  } else if (accesOption === 'login') {
    url = `${baseUrl}/auth-login`
  };
  
  try {
    const response = await axios.post(url, data);
    return response;
  }catch(err){
    return err.response;
  };
};