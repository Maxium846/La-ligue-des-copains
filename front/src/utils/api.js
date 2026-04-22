import { URL_FRONT } from './constants';

const baseURL = `${URL_FRONT}/api_ligue_des_copains/`;

export const get = (endpoint) => {
    return fetch(baseURL + endpoint, {
        headers: {
            'Access-Control-Request-Headers': '*',
            'Access-Control-Request-Method': 'OPTIONS,GET,POST'
        }
    }).then((res) => {
        if (!res?.ok) {
            throw new Error(`Response status: ${res.message}`);
        }
        return res.json();
    });
};

export const post = (endpoint, body) => {
    return fetch(baseURL + endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {   
            'Access-Control-Request-Headers': '*',
            'Access-Control-Request-Method': 'OPTIONS,GET,POST',
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        if (!(res.ok || res.status === 400)) {
            throw new Error(`Response status: ${res.status}`);
        }
        return res.json();
    });
};

export const createUser = async (user) => {
  const response = await fetch(baseURL + "user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return await response.json();
};
