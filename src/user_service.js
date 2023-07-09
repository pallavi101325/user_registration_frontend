import {myAxios} from "./services/helper";

export const signUp = (user) => {
    return myAxios.post('/users/register', user)
                  .then((response) => response.data)
};

export const loginUser = (loginDetails) => {
     return myAxios.post('/users/login', loginDetails)
                   .then((response) => response.data)
};