import { Card } from 'antd'
import { DeleteOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons'
import * as S from './issueItem.styles'

export default function IssueItemUI({ issue, handleClickItem, handleClickDelete }) {
  const handleDragStart = (e) => {
    console.log('handleDragStart', e)
    
  }
  return (
    <S.Wrapper draggable onDragStart={handleDragStart}>
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
