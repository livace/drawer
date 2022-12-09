import './index.css';
import App from './App'
import createChild from './util/createChild';

const app = new App(createChild<HTMLDivElement>(document.body, 'div'))
app.serve()
