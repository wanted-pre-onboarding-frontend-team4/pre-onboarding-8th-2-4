import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { loadingModalVisibleState } from '../store/ui'

const useLoading = () => {
  const [, setVisible] = useRecoilState(loadingModalVisibleState)

  const showLoadingModal = useCallback(() => setVisible(true), [setVisible])
  const hideLoadingModal = useCallback(() => setVisible(false), [setVisible])

  return {
    showLoadingModal,
    hideLoadingModal,
  }
}

export default useLoading
