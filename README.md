# 원티드 프리온보딩 프론트엔드 4팀 - 2주차 과제

> 원티드 프리온보딩 과제 2주차 (칸반보드)
>
> 기간 : 2023년 1월 3일 ~ 2023년 1월 6일

![main](https://user-images.githubusercontent.com/104765779/211009701-71cdeeac-0c15-4d83-896c-52740d203633.PNG)
<br />

## 📖 목차

- [팀원명](#팀원명)
- [배포링크](#배포링크)
- [협업과정](#협업과정)
- [팀 코드 컨벤션](#팀-코드-컨벤션)
- [폴더구조](#폴더구조)
- [Best Practice 및 채택 근거](#best-practice-및-채택-근거)
- [사용기술](#사용기술)

<br />

## 💪팀원명

| <img src="https://avatars.githubusercontent.com/u/104765779?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/92634711?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/105702862?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/44992033?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/91598778?v=4" width="120" height="120" /> |
|:---:|:---:|:---:|:---:|:---:|
| [tlsrb100](https://github.com/tlsrb100) | [tnals545](https://github.com/tnals545) | [KKKHun2](https://github.com/KKKHun2) | [hyejineee](https://github.com/hyejineee) | [jeongmin7](https://github.com/jeongmin7) |
| 성환(팀장)                              | 수민(팀원)                              | 용훈(팀원)                            | 혜진(팀원)                                | 정민(팀원)                                |

<br />

## 📌배포링크
https://pre-onboarding-8th-2-4.vercel.app/

<details>
  <summary>이슈 삭제</summary>
    <div markdown="1">
      <img src= "https://user-images.githubusercontent.com/104765779/211010550-9b0f520d-ea55-4c6c-a95a-b74d764e2d71.gif"/>
    </div>
</details>

<details>
  <summary>이슈 생성</summary>
    <div markdown="1">
       <img src= "https://user-images.githubusercontent.com/104765779/211010695-f67fa9f4-2421-4662-aa48-54dab8bd7411.gif"/>
    </div>
</details>

<details>
  <summary>입력 예외처리</summary>
    <div markdown="1">
       <img src= "https://user-images.githubusercontent.com/104765779/211010927-905d4bfc-5f48-42d6-88d5-b171ae17f3fa.gif"/>
    </div>
</details>

<details>
  <summary>드래그 앤 드랍</summary>
    <div markdown="1">
       <img src= "https://user-images.githubusercontent.com/104765779/211010842-75667d68-16fe-4c9f-ad31-fea22962b0ca.gif"/>
    </div>
</details>


<details>
  <summary>이슈 수정</summary>
    <div markdown="1">
       <img src= "https://user-images.githubusercontent.com/104765779/211010773-ef7ad14c-88ab-4614-9207-5d532469b4bf.gif"/>
    </div>
</details>



<br />
 
## 😊협업과정

본 프로젝트는 하나의 결과물을 내기 위해 동료학습을 중점으로 하여 진행하였습니다. 각자 자신이 구현한 코드에 대해 **어떠한 목적을 갖고 해당 방식을 선택하여 기능을 구현하였는가**의 설명과 **팀원들이 구현한 코드에 대한 피드백** 및 리팩토링하는 방식으로 Best Practice를 채택하였습니다.

- Best Pracitce를 찾아가기 전, 최적화된 과정을 찾고자 토론을 통해 아래와 같이 **과제를 나눌 단위**를 지정하였습니다.

- 개발하기에 앞서 초기에 과제를 위와 같이 큰 단위들로 나눈 뒤 같이 프로그래밍하는 방식의 프로세스를 선택하였습니다. 팀원 모두 화면 공유 기능을 사용하며 함께 실시간으로 코드를 작성하며 디버깅하면서 에러에 대해 함께 고민하고 대처하며 다양한 피드백을 주고 받으며 해결해나갔습니다.

<br />

#### 💡팀 코드 컨벤션

- git commit message 컨벤션

| 커밋 유형        | 의미                                                         |
| ---------------- | ------------------------------------------------------------ |
| Feat             | 새로운 기능 추가                                             |
| Fix              | 버그, 기능 수정                                              |
| Docs             | 문서 수정                                                    |
| Style            | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Refactor         | 코드 리팩토링                                                |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                       |
| Chore            | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| Design           | CSS 등 사용자 UI 디자인 변경                                 |
| Comment          | 필요한 주석 추가 및 변경                                     |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                           |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                       |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야 하는 경우                      |
| Setting          | prettier, eslint 등 전역 설정 변경, 삭제, 추가하는 경우      |
| ReadMe           | 리드미파일 추가, 수정, 삭제                                  |

<br />

## ✅Best Practice 및 채택 근거
### 1. custom-hook
* 커스텀을 훅을 사용하여 비즈니스 로직을 분리하였습니다. 기존에 container 컴포넌트에 이벤트 핸들러 함수와 비즈니스 로직이 혼합되어 있어 복잡하고 비즈니스 로직을 재사용할 수 없는 단점이 있었는데 커스텀 훅을 사용함으로 이벤트 핸들러 함수와 분리하여 컴포넌트의 복잡성을 낮추고 로직을 재사용할 수 있도록 했습니다.  
https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-2-4/blob/194f0f0731433657d4bb4a230959876164e09828/src/commons/hooks/useLoadingModal.js#L1-L18

### 2. 폴더구조
* jsx를 사용하는 컴포넌트와 js 파일을 components, commons 폴더로 각각 분리했습니다. 
* 화면에 보이는 것에 관여하는 파일과 그렇지 않은 파일을 다르게 묶음으로써 문제가 발생했을 때 어디에 해당하는지 빠르게 찾을 수 있다고 생각했습니다. 
* 그 이후에 각 관심사별로 하위 폴더를 나누어 문제를 빠르게 찾을 수 있도록 했습니다.  
https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-2-4/blob/194f0f0731433657d4bb4a230959876164e09828/src/components/inputs/textInputWithLabel.jsx#L1-L29  

### 3. UI 
* antd UI 라이브러리를 사용해서 통일된 디자인을 사용할 수 있었습니다.
* button, input, checkbox 등 다양한 컴포넌트를 지원합니다.
* 제한된 개발기간내에 기능 개발에 우선적으로 집중할 수 있도록 UI 라이브러리를 사용하였습니다.


### 4. localStorage
* 생성한 이슈들을 관리하기 위해 로컬스토리지를 사용했습니다. 
* 로컬스토리지를 어떻게 사용하는지에 집중하기 보다 비즈니스 로직 구현에 집중할 수 있도록 recoil-persist를 사용했습니다.  
https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-2-4/blob/194f0f0731433657d4bb4a230959876164e09828/src/commons/recoil/issue.js#L1-L15
## 📁폴더구조

```
src
 ┣ commons
 ┃ ┣ hooks
 ┃ ┃ ┣ issue
 ┃ ┃ ┃ ┣ useAddIssue.js
 ┃ ┃ ┃ ┣ useDeleteIssue.js
 ┃ ┃ ┃ ┣ useIssues.js
 ┃ ┃ ┃ ┗ useUpdateIssue.js
 ┃ ┃ ┗ useLoadingModal.js
 ┃ ┣ recoil
 ┃ ┃ ┣ issue.js
 ┃ ┃ ┗ ui.js
 ┃ ┣ styles
 ┃ ┃ ┗ globalStyles.js
 ┃ ┗ util
 ┃ ┃ ┗ debounce.js
 ┣ components
 ┃ ┣ board
 ┃ ┃ ┣ board.container.jsx
 ┃ ┃ ┣ board.presenter.jsx
 ┃ ┃ ┗ board.styles.js
 ┃ ┣ buttons
 ┃ ┃ ┗ addIssueButton.jsx
 ┃ ┣ column
 ┃ ┃ ┣ column.jsx
 ┃ ┃ ┗ column.styles.js
 ┃ ┣ inputs
 ┃ ┃ ┣ common.styles.js
 ┃ ┃ ┣ datePickerWithLabel.jsx
 ┃ ┃ ┣ selectWithLabel.jsx
 ┃ ┃ ┣ textAreaWithLabel.jsx
 ┃ ┃ ┗ textInputWithLabel.jsx
 ┃ ┣ item
 ┃ ┃ ┣ issueItem.jsx
 ┃ ┃ ┣ issueItem.presenter.jsx
 ┃ ┃ ┗ issueItem.styles.js
 ┃ ┗ modals
 ┃ ┃ ┣ issueModal
 ┃ ┃ ┃ ┣ issueModal.jsx
 ┃ ┃ ┃ ┗ issueModal.style.js
 ┃ ┃ ┗ loadingModal
 ┃ ┃ ┃ ┣ loadingModal.jsx
 ┃ ┃ ┃ ┗ loadingModal.styles.js
 ┣ App.js
 ┗ index.js

```

<br />

## 🛠사용기술

<div align=left>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" >
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" >
 <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white" >
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" >
<img src="https://img.shields.io/badge/Recoil-CA4245?style=for-the-badge&logo=Recoil&logoColor=white" >
<img src="https://img.shields.io/badge/Andt-61DAFB?style=for-the-badge&logo=Andt&logoColor=white" >
 </div>

<br />
