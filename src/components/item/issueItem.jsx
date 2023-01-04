import useDeleteIssue from '../../commons/hooks/issue/useDeleteIssue'
import IssueItemUI from './issueItem.presenter'

export default function IssueItem({ issue, onClickItem }) {
  const { deleteIssue } = useDeleteIssue()

  const handleClickDelete = (e) => {
    e.preventDefault()
    deleteIssue(issue.sequence)
  }

  const handleClickItem = (e) => {
    if (e.defaultPrevented) return
    onClickItem(issue.status, issue)
  }

  return (
    <IssueItemUI
      issue={issue}
      handleClickDelete={handleClickDelete}
      handleClickItem={handleClickItem}
    />
  )
}
