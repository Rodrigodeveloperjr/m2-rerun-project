import axios from "axios"

const api = axios.create({ baseURL: "https://api-kenzie-food.herokuapp.com" })

export default api
