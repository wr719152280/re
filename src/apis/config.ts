import http from "../utils/http"

const configApis = {
    getBaseInfo: () => {
        return http.get('/config/get-base-info')
    }
}

export default configApis