import { createRoot } from 'react-dom/client'
import { App } from './app'
import { GlobalStyles } from './theme/global'

const Main = () => (
  <>
    <GlobalStyles />
    <div id="screen">
      <App />
    </div>
  </>
)

const main = document.querySelector('main')!
createRoot(main).render(<Main />)
