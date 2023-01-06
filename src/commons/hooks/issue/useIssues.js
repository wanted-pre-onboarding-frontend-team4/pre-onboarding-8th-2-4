import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import issuesState from 'commons/recoil/issue';
import useLoading from 'commons/hooks/useLoadingModal';

const useIssues = () => {
  const [issues] = useRecoilState(issuesState);
  const [isLoading, setLoading] = useState(true);

  const { showLoadingModal, hideLoadingModal } = useLoading();

  useEffect(() => {
    setLoading(true);
    const loading = setTimeout(() => setLoading(false), 500);
    return () => {
      clearTimeout(loading);
    };
  }, [issues]);

  useEffect(() => {
    if (isLoading) {
      showLoadingModal();
      return;
    }
    hideLoadingModal();
  }, [isLoading]);

  return {
    isLoading,
    issues: issues.items,
  };
};

export default useIssues;
