import React from 'react';
import ReactDOM from 'react-dom/client';

// css, JavaScript는 상대경로로 지정한다
import './index.css';
import App from './App';

// 이미지 로드는 public 경로이므로 절대 경로로 지정한다
//< img src="/images.background.png" alt="background" />

import reportWebVitals from './reportWebVitals';

// ReactDOM 컨테이너 생성
const root = ReactDOM.createRoot(document.getElementById('root'));

//ReactDOM은 render()로 화면을 그린다 
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
