import { RecoilRoot } from 'recoil'
import GlobalStyles from './commons/styles/globalStyles'
import BoardContainer from './components/board/board.container'
import LoadingModal from './components/modals/loadingModal/loadingModal'

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />

      <LoadingModal />
      <BoardContainer />
    </RecoilRoot>
  )
}

export default App
