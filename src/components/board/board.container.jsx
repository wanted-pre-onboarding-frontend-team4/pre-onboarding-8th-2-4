import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { grabIssueState } from '../../commons/store/ui'
import useUpdateIssue from '../../commons/hooks/issue/useUpdateIssue'
import BoardUI from './board.presenter'

function BoardContainer() {
  const [issueModalState, setIssueModalState] = useState({
    visible: false,
    status: '',
    defaultValue: undefined,
  })

  const [grabIssue] = useRecoilState(grabIssueState)
  const { updateIssue } = useUpdateIssue()

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

  const handleUpdateIssueStatus = (targetStatus) => {
    updateIssue(grabIssue.sequence, { ...grabIssue, status: targetStatus })
  }

  return (
    <BoardUI
      issueModalState={issueModalState}
      handleOpenIssueModal={handleOpenIssueModal}
      handleCloseIssueModal={handleCloseIssueModal}
      handleUpdateIssueStatus={handleUpdateIssueStatus}
    />
  )
}

export default BoardContainer
