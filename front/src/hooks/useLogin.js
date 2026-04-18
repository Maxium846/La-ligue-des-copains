import { post } from '../utils/api';

export const getConnexion = (adresseMail, password) => {
    return post('login', { adresseMail, password });
};
