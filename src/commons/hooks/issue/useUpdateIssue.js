import { useRecoilState } from 'recoil'
import { issuesState } from '../../store/issue'
import { grabIssueState } from '../../store/ui'

const useUpdateIssue = () => {
  const [issues, setIssues] = useRecoilState(issuesState)
  const [grabIssue] = useRecoilState(grabIssueState)

  const updateIssue = (sequence, newInputs) => {
    const updated = { ...issues.items[sequence], ...newInputs }

    setIssues((prev) => ({ ...prev, items: { ...prev.items, [sequence]: updated } }))
  }

  const swap = (arr, target, origin) => {
    const copy = [...arr]

    copy.splice(origin.order - 1, 1)
    copy.splice(target.order - 1, 0, origin)

    return [...copy]
  }

  const updateIssueOrder = (targetIssue) => {
    const copy = { ...issues.items }

    swap(
      Object.values(issues.items)
        .filter((e) => e.status === targetIssue.status)
        .sort((a, b) => a.order - b.order),
      targetIssue,
      grabIssue
    )
      .map((e, index) => ({ ...e, order: index + 1 }))
      .forEach((e) => {
        copy[e.sequence] = { ...e }
      })

    setIssues((prev) => ({ sequence: prev.sequence, items: copy }))
  }

  return {
    updateIssue,
    updateIssueOrder,
  }
}

export default useUpdateIssue
