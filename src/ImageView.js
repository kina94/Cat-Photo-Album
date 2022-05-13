//이미지 뷰어

const IMG_URL = 'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public'

export default function ImageView({$app, initState, modalToggle}){
    this.state = initState
    this.setState = (nextState) =>{
        this.state =nextState
        this.render()
    }

    this.$target = document.createElement('div')
    this.$target.className = 'Modal ImageViewr'
    $app.appendChild(this.$target)

    this.render = () =>{
        this.$target.innerHTML =
        `<div class='content'>
        <img src=${IMG_URL}${this.state.filePath}></img>
        </div>`

        this.state.modalToggle ?
        this.$target.style.display = 'block' : this.$target.style.display = 'none'
    }

    const handleModalToggle = () =>{
        this.$target.addEventListener('click', (e)=>{
            if(e.target.className === 'Modal ImageViewr'){
                modalToggle()
            }
        })

        window.addEventListener('keydown', (e)=>{
            if(e.key==='Escape'){
                modalToggle()
            }
        })
    }

    this.render()
    handleModalToggle()
}