import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './container/StatefullComponent';
import YouTubeComp from './component/YouTubeComp/YouTubeComp';
import Home from './container/Home/Home';

//Stateless component / functional component
// const HelloWorld = () => {
//     return <p>Hello World</p>
// }

//Statefull component / class component
// class SatefullComponent extends React.Component{
//     render(){
//         return <p>Statefull Component</p>
//     }
// }

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
