// API 호출

const API_URL = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev'

//nodeId를 기준으로 루트인지 아닌지 구분
export const api = async(nodeId) =>{
    try{
        const respose = await fetch(`${API_URL}/${nodeId ? nodeId : ''}`)
        if(!respose.ok) throw new Error('서버 통신에 문제가 있습니다. 다시 시도해주세요.')
        return await response.json()
    } catch(e){
        throw new Error(`문제가 발생했습니다. ${e.message}`)
    }
}