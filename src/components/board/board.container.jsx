import { useState } from 'react'
import BoardUI from './board.presenter'

function BoardContainer() {
  const [issueModalState, setIssueModalState] = useState({
    visible: false,
    status: '',
    defaultValue: undefined,
  })

  const handleCloseIssueModal = () => {
    setIssueModalState({
      visible: false,
      status: undefined,
      defaultValue: undefined,
    })
  }

  const handleOpenIssueModal = (status, defaultValue) => {
    setIssueModalState({
      visible: true,
      status,
      defaultValue,
    })
  }

  return (
    <BoardUI
      issueModalState={issueModalState}
      handleOpenIssueModal={handleOpenIssueModal}
      handleCloseIssueModal={handleCloseIssueModal}
    />
  )
}

export default BoardContainer
