const baseUrl = 'http://localhost:8000'

export async function acessoUser(data, accesOption) {
  let url;
  let methodOption;

  if(accesOption === 'register') {
    url = `${baseUrl}/user-register`, 
    methodOption = "POST"
  };

  if(accesOption === 'login') {
    url = `${baseUrl}/auth-login`, 
    methodOption = "GET"
  } 

  const response = await fetch(`${url}`, {
    method: methodOption,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });

  if(response.ok) {
    alert(`${accesOption} efetuado com sucesso.`);
  } else {
    throw new Error('failed.');
  };
};