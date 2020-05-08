import http from "../utils/http"


const usersApi = {
    getUses: () => {
        return http.get('https://api.github.com/users')
    },
    posts:() => {
        return http.get('http://jsonplaceholder.typicode.com/posts')
    },
    login:(loginName:string,password:string)=>{
        return http.post('/user/login',{
            loginName,
            password
        })
    },
    exit:()=>{
        return http.get('/user/exit')
    }

}

export default usersApi