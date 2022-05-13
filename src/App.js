import {api} from './service/api.js'

export default function App (){
    const init = async() =>{
        const rootNodes = await api()
    }

    init()
}