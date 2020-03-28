import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vue-final-project-c3d49.firebaseio.com/'
})

instance.defaults.headers.common['something'] = 'something'

export default instance