import useDeleteIssue from '../../commons/hooks/issue/useDeleteIssue'
import useUpdateIssue from '../../commons/hooks/issue/useUpdateIssue'
import IssueItemUI from './issueItem.presenter'

export default function IssueItem({ issue, onClickItem }) {
  const { deleteIssue } = useDeleteIssue()
  const { updateIssueOrder } = useUpdateIssue()

  const handleClickDelete = (e) => {
    e.preventDefault()
    deleteIssue(issue.sequence)
  }

  const handleClickItem = (e) => {
    if (e.defaultPrevented) return
    onClickItem(issue.status, issue)
  }

  const handleUpdateIssueOrder = (targetIssue) => {
    updateIssueOrder(targetIssue)
  }

  return (
    <IssueItemUI
      issue={issue}
      handleClickDelete={handleClickDelete}
      handleClickItem={handleClickItem}
      handleUpdateIssueOrder={handleUpdateIssueOrder}
    />
  )
}
