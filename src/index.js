import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDom.createRoot(document.querySelector('#root'))

document.documentElement.style.fontSize = 100 / 750 + 'vw'

root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
