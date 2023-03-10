import { useRecoilState } from 'recoil';

import { loadingModalVisibleState } from 'commons/recoil/ui';

import * as S from 'components/modals/loadingModal/loadingModal.styles';

const LoadingModal = () => {
  const [isLoading] = useRecoilState(loadingModalVisibleState);

  return (
    <S.Wrapper visibility={isLoading ? 'visible' : 'hidden'}>
      <S.Contents>
        <S.LoadingContainer>
          <S.LoadingPosition>
            <S.Spin />
          </S.LoadingPosition>
        </S.LoadingContainer>
      </S.Contents>
    </S.Wrapper>
  );
};

export default LoadingModal;
