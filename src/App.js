import { api } from './service/api.js'
import BreadCrumb from './BreadCrumb.js'
import Nodes from './Nodes.js'
import ImageView from './ImageView.js'
import Loading from './Loading.js'

let cache = {}

export default function App($app) {
    this.state = {
        nodes: [], // 경로에 포함된 파일과 디렉토리
        depth: [], // BreadCrumb의 경로
        filePath: null, // 파일 이미지 경로
        modalToggle: false, // 모달창 토글
        isLoading: true // 로딩창 토글
    }

    this.setState = (nextState) => {
        this.state = nextState
        breadCrumb.setState(this.state.depth)
        nodes.setState({ depth: this.state.depth, nodes: this.state.nodes })
        imageView.setState({ filePath: this.state.filePath, modalToggle: this.state.modalToggle })
        loading.setState(this.state.isLoading)
    }

    // 로딩창 표시
    const showLoading = () => {
        this.setState({
            ...this.state,
            isLoading: true
        })
    }

    // 경로 표시
    const breadCrumb = new BreadCrumb({
        $app, initState: this.state.depth,
        // 경로 클릭 시 이동
        onClick : (nodeIndex) => {
            if(this.state.depth.length-1 === Number(nodeIndex)){
                return
            } else if(nodeIndex === 'root'){
                this.setState({
                    ...this.state,
                    nodes : cache.rootNodes,
                    depth : []
                })
            } else {
                this.setState({
                    ...this.state,
                    nodes : cache[this.state.depth[nodeIndex].id],
                    depth : this.state.depth.slice(0, Number(nodeIndex)+1)
                })
            }
        }
    })

    //경로의 폴더 및 파일 표시
    const nodes = new Nodes({
        $app, initState: { depth: this.state.depth, nodes: this.state.nodes },
        // 파일이나 경로 선택 
        onClick: async (selectedNode) => {
            showLoading()
            let nextNode = []
            if (cache[selectedNode.id]) {//캐싱된 데이터가 있는지 확인
                nextNode = cache[selectedNode.id]
            } else {
                nextNode = await api(selectedNode.id)
                cache[selectedNode.id] = nextNode
            }
            if (selectedNode.type === 'DIRECTORY') {// 디렉토리면 노드와 경로 업데이트
                this.setState({
                    ...this.state,
                    nodes: cache[selectedNode.id],
                    depth: [...this.state.depth, selectedNode],
                    isLoading: false
                })
            } else if (selectedNode.type === 'FILE') {// 파일이면 파일 정보 업데이트  
                this.setState({
                    ...this.state,
                    filePath: selectedNode.filePath,
                    modalToggle: true,
                    isLoading: false,
                })
            }
        },
        // 뒤로 가기
        onClickBack: async () => {
            showLoading()
            let prevNode = []
            this.state.depth.pop()
            if (this.state.depth.length === 0) {
                prevNode = cache.rootNodes
            } else {
                const prevNodeId = this.state.depth[this.state.depth.length - 1].id
                prevNode = cache[prevNodeId]
            }
            this.setState({
                ...this.state,
                nodes: prevNode,
                isLoading: false,
            })
        }
    })

    //이미지 표시
    const imageView = new ImageView({
        $app, initState: { filePath: this.state.filePath, modalToggle: this.state.modalToggle },
        modalToggle: () => {
            showLoading()
            this.setState({
                ...this.state,
                modalToggle: false,
                isLoading: false,
            })
        }
    })

    //로딩창 표시
    const loading = new Loading({
        $app, initState: this.state.isLoading
    })

    // 첫 화면 루트노드 로딩
    const init = async () => {
        const rootNodes = await api()
        this.setState({
            ...this.state,
            nodes: rootNodes,
            isLoading: false,
        })
        cache.rootNodes = rootNodes
    }
    init()
}