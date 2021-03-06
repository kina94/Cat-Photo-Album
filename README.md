<div align="center">
  <h1> 📷 프로그래머스 고양이 사진첩 애플리케이션 (Vainlia JS) </h1>
본 레포에는 <a href='https://programmers.co.kr/skill_check_assignments/100'>2021 Dev-Matching: 웹 프론트엔드 개발자(상반기)'</a> 문제 풀이 후 복기한 결과물을 담았습니다.</br>어떠한 라이브러리나 프레임워크를 사용하지 않고 Vanilia JS로만 구현하였으며,</br>복기를 통해 주요 구현 과정, 개념, 코드를 정리하고 CSS를 커스터마이징했습니다. </br></br>

<a href='https://vanilajs-cat-album.netlify.app/'>바로가기</a>

![image](https://user-images.githubusercontent.com/66938939/168343043-58ec8567-e63a-4465-a99d-b1c46f359888.png)


</div>


<hr/>

## <a href='https://velog.io/@kina/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B3%BC%EC%A0%9C%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%82%AC%EC%A7%84%EC%B2%A9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98'>구현 과정🍰</a>
### 1) 선행 지식</br>
* 컴포넌트 추상화</br>
* promise, fetch, await, async</br>
* API 살펴보기</br>
### 2) 로직</br>
* 렌더링 순서 설계</br>
* 폴더 구조 </br>
### 3) 구현</br>
* api.js
  * <a href='https://github.com/kina94/Cat-Photo-Album/blob/main/note/1.%20API%20%EA%B4%80%EB%A0%A8%20%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD.md'>요구사항 정의와 구현 코드</a>
* BreadCrumb.js
  * <a href='https://github.com/kina94/Cat-Photo-Album/blob/main/note/2.%20BreadCrumb%20%EA%B4%80%EB%A0%A8%20%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD.md'>요구사항 정의와 구현 코드</a>
* Nodes.js
  * <a href='https://github.com/kina94/Cat-Photo-Album/blob/main/note/3.%20Nodes%20%EA%B4%80%EB%A0%A8%20%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD.md
'>요구사항 정의와 구현 코드</a>
* ImageView.js
  * <a href='https://github.com/kina94/Cat-Photo-Album/blob/main/note/4.%20ImageView%20%EA%B4%80%EB%A0%A8%20%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD.md
'>요구사항 정의와 구현 코드</a>
* Loading.js
  * <a href='https://github.com/kina94/Cat-Photo-Album/blob/main/note/5.%20Loading%20%EA%B4%80%EB%A0%A8%20%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD.md
'>요구사항 정의와 구현 코드</a>
* index.js
```javascript
import App from "./src/App.js";
new App(document.querySelector('.app'))
````
* App.js
  * <a href='https://github.com/kina94/Cat-Photo-Album/blob/main/note/6.%20App%20%EA%B4%80%EB%A0%A8%20%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD.md
'>요구사항 정의와 구현 코드</a>
