export default function BreadCrumb ({$app, initState, onClick}){
    this.state = initState
    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.$target = document.createElement('nav')
    this.$target.className='Breadcrumb'
    $app.appendChild(this.$target)

    this.render = () => {
        this.$target.innerHTML =
        `
        <div id='root'>root</div>
        ${
            this.state ? 
            this.state.map((node, index) => {
                return `<div id=${index}>&nbsp;${node.name}</div>`
            }).join('') : ''
        }
        `
    }

    this.$target.addEventListener('click', (e)=>{
        const nodeIndex = e.target.id
        onClick(nodeIndex)
    })

    this.render()
 }