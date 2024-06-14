import axios from "axios";



const instance2 = axios.create({
    baseURL: "https://dummyjson.com/"
})


export const logMe = (data) =>{
    return(
        instance2.post('auth/login', {
            username: data.login,
            password: data.password,
            expiresInMins: 30 // optional, defaults to 60
        })
        .then(response => {
            return response;
        })
        .catch(error => {
            return {error: "Неправильный логин или пароль"}; // Можно бросить ошибку дальше для дальнейшей обработки
        })
    )
    // instance.post("auth/login", {username: data.login, password: data.password}).then(response => {
    //     return response.data;
    // })
}




const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "9ca2952f-915f-4c87-afd0-8a5fff218e08"
    }
})


export const AuthAPI = {
    authMe(){
        return(
            instance.get(`auth/me`).then(response =>{
                return response.data;
            })  
        );
    },
    logMe(login, password, rememberMe = true, captcha = null){
        return(
            instance.post("auth/login", {email: login, password: password, rememberMe: rememberMe, captcha: captcha})
        );
    },
    logoutMe(){
        return(
            instance.delete("auth/login")
        );
    },
    getCaptchaUrl(){
        return(
            instance.get("security/get-captcha-url")
        );
    }
}
