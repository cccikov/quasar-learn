import axios from 'axios'
console.log("axios")

export default ({
    Vue
}) => {
    Vue.prototype.$axios = axios
}
