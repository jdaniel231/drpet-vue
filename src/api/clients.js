import { http } from './config'

const resource = '/clients'

export default {
  list() {
    return http.get(`${resource}`)
  },
  create:(client) => {
    return http.post(`${resource}`, client)
  },
  remove:(id) => {
    return http.delete(`${resource}/${id}`)
  }
}