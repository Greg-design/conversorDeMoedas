import axios from 'axios'

// base >  https://economia.awesomeapi.com.br/json/    
// > Rota para buscar EUR>BRL:  last/EUR-BRL       

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/'
})

export default api