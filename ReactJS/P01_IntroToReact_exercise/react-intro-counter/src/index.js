
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './App';

ReactDOM.render(Counter(), document.getElementById('root'));

let rerender = ReactDOM.render;
export default  rerender ;
