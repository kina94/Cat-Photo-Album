export default function Nodes({ $app, initState, onClick, onClickBack }) {
    this.state = initState
    this.onClick = onClick

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.$target = document.createElement('div')
    this.$target.className = 'Nodes'
    $app.appendChild(this.$target)

    this.render = () => {
        // 노드 타입에 따른 이미지 로드
        const imgType = (type) => type === 'DIRECTORY' ? './assets/folder.gif' : './assets/image.gif'
        
        // 노드 보여주기
        const showNode =
            this.state.nodes.map(node => {
                return `
                <div id=${node.id} class='Node'>
                <img src=${imgType(node.type)}></img>
                        <div>${node.name}</div>
                </div>`
            }).join('')

        // 루트 노드이면 노드만 보여주고, 하위 경로가 있으면 뒤로 가기 보여주기
        this.$target.innerHTML =
            `${this.state.depth.length != 0 ?
                `<div class='Node' id='-1'>뒤로 가기</div>` : ''}
                ${showNode}`
    }

    this.$target.addEventListener('click', (e)=>{
        const nodeId = e.target.closest('.Node').id
        const selectedNode = this.state.nodes.find(node=>node.id===nodeId)

        if(selectedNode){
            onClick(selectedNode)
        } else {
            onClickBack()
        }

    })

    this.render()
}