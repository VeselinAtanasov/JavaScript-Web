
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './App';


ReactDOM.render(Timer(), document.getElementById('root'));



const rerender = ReactDOM.render;

export default rerender;    
