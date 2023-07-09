//authenticate , is local storage has token it mean the user is logged in

export const isLoggedIn = () => {
    let data = localStorage.getItem("data")
    if(data == null){
        return false;
    }
    else{
        return true;
    }
}

//do login, store token to localstorage

export const doLogin = (data,next) => {
    //key value is data
    localStorage.setItem("data" , JSON.stringify(data));
    next()
}


// do logout , remove from local storage

export const doLogout = (next) => {
    localStorage.removeItem("data")
    next()
}

//get current user

export const getCurrentUserDetail = () => {
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data"))?.user ;
    }
    else{
        return undefined;
    }
}