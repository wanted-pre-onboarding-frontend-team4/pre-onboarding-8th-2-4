import { useRecoilState } from 'recoil'
import { issuesState } from '../../store/issue'

const useUpdateIssue = () => {
  const [issues, setIssues] = useRecoilState(issuesState)

  const updateIssue = (sequence, newInputs) => {
    const updated = { ...issues.issues[sequence], ...newInputs }

    setIssues((prev) => ({ ...prev, issues: { ...prev.issues, [sequence]: updated } }))
  }

  return {
    updateIssue,
  }
}

export default useUpdateIssue
