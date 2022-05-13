export default function Loading ({$app, initState}){
    this.state = initState

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.$target=document.createElement('div')
    this.$target.className = 'Modal Loading'
    $app.appendChild(this.$target)

    this.render = () =>{
        this.$target.innerHTML = `
        <div class='content'>
        <img src='./assets/nyan-cat.gif'/>
        </div>
        `

        this.$target.style.display = this.state ? 'block' : 'none'
    }

    this.render()
}