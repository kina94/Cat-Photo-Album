<div align="center">
  <h1> 📷 프로그래머스 고양이 사진첩 애플리케이션 (Vainlia JS) </h1>
  본 레포에는 <a href='https://programmers.co.kr/skill_check_assignments/100'>2021 Dev-Matching: 웹 프론트엔드 개발자(상반기)' 고양이 사진첩 애플리케이션</a> 문제 풀이 후 복기한 결과물을 담았습니다. </br>
라이브러리나 프레임워크 없이 Vanilia JS로 구현하였으며, 복기를 통해 주요 구현 과정과 개념을 정리하고 코드와 CSS를 다듬었습니다. </br>
복기 전 첫 풀이의 원본 코드는 https://github.com/kina94/Vanila-JS-Bowl 에서 확인할 수 있습니다.

</div>


<hr/>

## 구현 과정🍰
  ### <a href='https://velog.io/@kina/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B3%BC%EC%A0%9C%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%82%AC%EC%A7%84%EC%B2%A9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98#1-%EC%84%A0%ED%96%89%EC%A7%80%EC%8B%9D'>1) 선행 지식</a></br>
* <a href='https://velog.io/@kina/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B3%BC%EC%A0%9C%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%82%AC%EC%A7%84%EC%B2%A9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98#--%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%B6%94%EC%83%81%ED%99%94'>컴포넌트 추상화</a></br>
* <a href='https://velog.io/@kina/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B3%BC%EC%A0%9C%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%82%AC%EC%A7%84%EC%B2%A9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98#--fetch-await-async-promise'>promise, fetch, await, async</a></br>
* <a href='https://velog.io/@kina/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B3%BC%EC%A0%9C%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%82%AC%EC%A7%84%EC%B2%A9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98#--api-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0'> API 살펴보기 </a> </br>
