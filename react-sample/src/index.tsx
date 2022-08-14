import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';//Appの代わりにHelloをインポートする
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContainerSampleContext';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import { Parent2 } from './components/FizzBuzz';
import { Parent3 } from './components/Saibyouga';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { Parent4 } from './components/UseContext';
import { ImageUploader } from './components/UseRef';
import { Parent5 } from './components/UseImperativeHandle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//下記をHelloにする
root.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Message />
    <Parent />
    <Page />
    <Counter initialValue={0} />
    <CounterReducer initialValue={0}/>
    <Parent2 />
    <Parent3 />
    <UseMemoSample />
    <Clock />
    <Parent4 />
    <ImageUploader />
    <Parent5 />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
