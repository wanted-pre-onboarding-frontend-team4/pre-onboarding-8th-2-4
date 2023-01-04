import { Card } from 'antd'
import { DeleteOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons'
import useDeleteIssue from '../../commons/hooks/issue/useDeleteIssue'
import * as S from './issueItem.styles'

export default function IssueItem({ issue, onClickItem }) {
  const { deleteIssue } = useDeleteIssue()

  const handleClickDelete = (e) => {
    e.preventDefault()
    deleteIssue(issue.sequence)
  }

  const handleClickItem = (e) => {
    if (e.defaultPrevented) return
    onClickItem(issue.status, issue)
  }

  return (
    <S.Wrapper>
      <Card
        onClick={handleClickItem}
        style={{ width: '100%' }}
        actions={[<DeleteOutlined key='delete' onClick={handleClickDelete} />]}>
        <S.ContentsContainer>
          <S.SequenceWrapper>
            #{issue?.sequence} {issue?.title}
          </S.SequenceWrapper>
          <S.ContentsWrapper style={{ marginBottom: '12px' }}>{issue?.contents}</S.ContentsWrapper>
          <S.ContentsWrapper>
            <CalendarOutlined />
            마감일 : {issue?.dueDate}
          </S.ContentsWrapper>
          <S.ContentsWrapper>
            <UserOutlined />
            담당자 : {issue?.assignee}
          </S.ContentsWrapper>
        </S.ContentsContainer>
      </Card>
    </S.Wrapper>
  )
}
