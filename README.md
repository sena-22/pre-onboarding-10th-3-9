![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=300&section=header&text=원티드%20프리온보딩%202차%20과제%209팀%20-%20김현정%20%20&fontSize=50)

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white">
</p>

<br/>

# 🗓️ 프로젝트 기간

## 2023.5.2 ~ 2023.5.5

<br/>

# ✨ 세부 구현 방법

## 1. 로컬 캐싱 방법 ([PR Link](https://github.com/sena-22/pre-onboarding-10th-2-9/pull/6))

- 검색 시 만료 기간을 설정하여 검색어를 키로, 추천 검색어들의 배열과 만료 기한을 값으로 만들어 로컬 스토리지에 저장하였습니다.
- 재검색 시 해당 검색어가 만료되지 않았으면 로컬 스토리지에서 꺼낸 추천 검색어를 그대로 반환하고, 만료되었다면 삭제 후 API 요청을 통해 다시 추천 검색어를 반환한 뒤 로컬 스토리지에 새로운 만료기간과 함께 저장하는 방식으로 구현하였습니다.
- 만료 기간은 임의로 10분 뒤로 설정하였습니다.

<br/>

## 2. API 호출 횟수 조절 방법 ([PR Link](https://github.com/sena-22/pre-onboarding-10th-2-9/pull/3))

- `useDebounce` 커스텀 훅을 이용하여 API 요청 횟수를 줄이도록 구현하였습니다.
- `useDebounce`는 검색어와 지연되는 시간을 받아 지정된 시간 뒤의 `value`로 `debouncedValue`를 설정하여 반환하게 되고, 반환된 값을 이용하여 API 요청을 하게 됩니다.

<img width="873" alt="스크린샷 2023-05-03 오후 10 06 25" src="https://user-images.githubusercontent.com/110877564/235924723-5c949e43-c7b1-4271-a57b-6f71ab2c2bdd.png">

<br/>

## 3. 키보드로 추천 검색어 이동하기 ([PR Link](https://github.com/sena-22/pre-onboarding-10th-2-9/pull/4))

- `keydownHandler`라는 유틸 파일을 만들어서 방향키에 따라 활성화된 검색어의 인덱스를 조절하는 방식으로 구현하였습니다.
- 활성화된 인덱스를 가진 검색어는 `active`라는 `className`을 가지게 되어 현재 가리키는 검색어를 알 수 있습니다.

<br/>

# 📂 폴더 구조

```javascript
📦src
 ┣ 📂@types
 ┃ ┗ 📜search.ts
 ┣ 📂api
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜searchAPI.ts
 ┣ 📂components
 ┃ ┣ 📜Dropdown.tsx
 ┃ ┗ 📜style.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useDebounce.ts
 ┣ 📂pages
 ┃ ┣ 📜SearchPage.tsx
 ┃ ┗ 📜style.tsx
 ┣ 📂utils
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜keydownHandler.ts
 ┃ ┗ 📜storage.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```

# 참고자료

[디바운스(Debounce) & 쓰로틀(Throttle)](https://ye-yo.github.io/til/2022/03/29/debounce-throttle.html)

[디바운스(Debounce)와 쓰로틀(Throttle) 그리고 차이점](https://webclub.tistory.com/607)
