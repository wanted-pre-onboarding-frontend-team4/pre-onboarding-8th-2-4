import useIssues from 'commons/hooks/issue/useIssues';

import * as S from 'components/column/column.styles';
import AddIssueButton from 'components/buttons/addIssueButton';
import IssueItem from 'components/item/issueItem';

const Column = ({ title, status, onClickAddItem, onClickItem }) => {
  const { issues } = useIssues();

  const handleClickAddItem = () => {
    onClickAddItem(status);
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <AddIssueButton onClick={handleClickAddItem} />
      <S.ContentsWrapper>
        {issues &&
          Object.entries(issues)
            .filter(([, v]) => v.status === status)
            .sort(([, a], [, b]) => {
              if (a.order > b.order) return 1;
              if (a.order < b.order) return -1;
              if (a.sequence > b.sequence) return 1;
              return -1;
            })
            .map(([k, v]) => (
              <IssueItem key={k} issue={v} onClickItem={onClickItem} />
            ))}
      </S.ContentsWrapper>
    </S.Wrapper>
  );
};

export default Column;
