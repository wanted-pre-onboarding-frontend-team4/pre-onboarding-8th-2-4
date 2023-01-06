import { useMemo, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import moment from 'moment/moment';

import issuesState from 'commons/recoil/issue';

const useAddIssue = () => {
  const [issues, setIssues] = useRecoilState(issuesState);

  const todoIssuesSize = useMemo(
    () => Object.values(issues.items).filter(e => e.status === 'todo').length,
    [issues.items],
  );

  const ongoingIssuesSize = useMemo(
    () =>
      Object.values(issues.items).filter(e => e.status === 'ongoing').length,
    [issues.items],
  );

  const doneIssuesSize = useMemo(
    () => Object.values(issues.items).filter(e => e.status === 'done').length,
    [issues.items],
  );

  const getOrder = useCallback(
    status => {
      if (status === 'todo') return todoIssuesSize + 1;
      if (status === 'ongoing') return ongoingIssuesSize + 1;
      return doneIssuesSize + 1;
    },
    [todoIssuesSize, ongoingIssuesSize, doneIssuesSize],
  );

  const createIssue = (sequence, inputs) => {
    const order = getOrder(inputs.status);

    return {
      ...inputs,
      order,
      sequence,
      createAt: moment(),
    };
  };

  const addIssue = inputs => {
    const newIssue = createIssue(issues.sequence, inputs);

    setIssues(prev => {
      const copy = { ...prev.items };
      copy[newIssue.sequence] = newIssue;

      return {
        items: copy,
        sequence: prev.sequence + 1,
      };
    });
  };

  return {
    addIssue,
  };
};

export default useAddIssue;
