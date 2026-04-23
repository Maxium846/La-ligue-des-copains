import { post } from "../utils/api";


export const createUser = async (adresseMail,password,identifiant) => {
  
    return post('user' , {adresseMail,password,identifiant})
 
};