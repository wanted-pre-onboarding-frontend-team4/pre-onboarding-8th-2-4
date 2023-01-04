import { RecoilRoot } from 'recoil'
import GlobalStyles from './commons/styles/globalStyles'
import BoardContainer from './components/board.container'

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <BoardContainer />
    </RecoilRoot>
  )
}

export default App
