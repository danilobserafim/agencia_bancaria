import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import store from '../store'

const GlobalStyle = createGlobalStyle`
@keyframes fade{
  from{opacity:0}
  to{opacity:1}
}
*{
  animation: fade 1s;
  font-family:sans-serif;
  margin: 0; padding: 0;
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #E97000;
    color:white;
  }
`



export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <GlobalStyle />
        <Component {...pageProps} />
    </Provider>
  )
}
