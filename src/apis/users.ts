import http from "../utils/http"


const usersApi = {
    getUses: () => {
        return http.get('https://api.github.com/users')
    },
    posts:() => {
        return http.get('http://jsonplaceholder.typicode.com/posts')
    }
}

export default usersApi