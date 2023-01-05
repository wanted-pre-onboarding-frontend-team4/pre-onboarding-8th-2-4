import useIssues from '../../commons/hooks/issue/useIssues'
import AddIssueButton from '../buttons/addIssueButton'
import IssueItem from '../item/issueItem'
import * as S from './column.styles'

export default function Column({ title, status, onClickAddItem, onClickItem }) {
  const { issues } = useIssues()

  const handleClickAddItem = () => {
    onClickAddItem(status)
  }

  return (
    <S.Wrapper>
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <S.ContentsWrapper>
        {issues &&
          Object.entries(issues)
            .filter(([, v]) => v.status === status)
            .sort(([, a], [, b]) => a.order - b.order)
            .map(([k, v]) => <IssueItem key={k} issue={v} onClickItem={onClickItem} />)}
      </S.ContentsWrapper>
      <AddIssueButton onClick={handleClickAddItem} />
    </S.Wrapper>
  )
}
