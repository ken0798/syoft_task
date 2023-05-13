const BASE_URL = "https://snapkaro.com/eazyrooms_staging/api/";
const api = {
  reg: "user_registeration",
  log: "userlogin",
};

export async function registerUser(req) {
  const url = BASE_URL + api.reg;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(req),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}

export async function loginUser(req) {
  const url = BASE_URL + api.log;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(req),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}
