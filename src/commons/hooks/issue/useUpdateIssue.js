import { useRecoilState } from 'recoil'
import { issuesState } from '../../store/issue'

const useUpdateIssue = () => {
  const [issues, setIssues] = useRecoilState(issuesState)

  const updateIssue = (sequence, newInputs) => {
    console.log('update', sequence, newInputs)
    const updated = { ...issues.items[sequence], ...newInputs }

    setIssues((prev) => ({ ...prev, items: { ...prev.items, [sequence]: updated } }))
  }

  return {
    updateIssue,
  }
}

export default useUpdateIssue
