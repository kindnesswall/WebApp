import axios from 'axios';

// axios.interceptors.response.use(async function (res) {
//     // console.log('mobile number',res.config.data['mobileNumber']);
//     console.log(res.config.data);

//     if (res.status == 403) {
//         const { status, headers } = await axios.post("/api/refreshToken", {body: res.config.data, headers: res.headers["refresh-token"]})
//         if (status == 200) {
//             localStorage.setItem('myKey', headers['token']);
//         }
//     }
//     return res;
// }, function (err) { return Promise.reject(err) });

axios.interceptors.request.use(function (req) {
    if (req.url !== '/api/login') {
        const token = localStorage.getItem('myKey');
        req.headers["token"] = token;
    }
    return req;
}, function (err) { return Promise.reject(err) });

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    head: axios.head,
};
