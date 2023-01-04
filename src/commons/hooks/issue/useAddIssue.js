import moment from 'moment/moment'
import { useRecoilState } from 'recoil'
import { issuesState } from '../../store/issue'

const useAddIssue = () => {
  const [issues, setIssues] = useRecoilState(issuesState)

  const createIssue = (sequence, inputs) => ({
    ...inputs,
    sequence,
    createAt: moment(),
  })

  const addIssue = (inputs) => {
    const newIssue = createIssue(issues.sequence, inputs)

    setIssues((prev) => {
      const copy = { ...prev.issues }
      copy[newIssue.sequence] = newIssue

      return {
        issues: copy,
        sequence: prev.sequence + 1,
      }
    })
  }

  return {
    addIssue,
  }
}

export default useAddIssue
