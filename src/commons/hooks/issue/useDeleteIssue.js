import { useRecoilState } from 'recoil';

import issuesState from 'commons/recoil/issue';

const useDeleteIssue = () => {
  const [issues, setIssues] = useRecoilState(issuesState);

  const deleteIssue = sequence => {
    const copy = { ...issues.items };
    delete copy[sequence];

    setIssues(prev => ({
      ...prev,
      items: copy,
    }));
  };

  return {
    deleteIssue,
  };
};

export default useDeleteIssue;
