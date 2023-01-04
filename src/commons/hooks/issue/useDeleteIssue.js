import { useRecoilState } from 'recoil'
import { issuesState } from '../../store/issue'

const useDeleteIssue = () => {
  const [issues, setIssues] = useRecoilState(issuesState)

  const deleteIssue = (sequence) => {
    const copy = { ...issues.issues }
    delete copy[sequence]

    setIssues((prev) => ({
      ...prev,
      issues: copy,
    }))
  }

  return {
    deleteIssue,
  }
}

export default useDeleteIssue
