import { post } from '../utils/api';

export const getConnexion = (identifiant, password) => {
    return post('login', { identifiant, password });
};

export const getConnexionFromToken = (token) => {
    const string = window.atob(token);
    const tab = string.split(':');
    return post('login', { identifiant: tab[0], password: tab[1] });
};
