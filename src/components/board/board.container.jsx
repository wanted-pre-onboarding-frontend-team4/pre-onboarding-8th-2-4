import { useState } from 'react'
import * as S from './board.styles'
import IssueModal from '../modals/issueModal/issueModal'
import Column from '../column/column'

const statuses = [
  { title: '할 일', status: 'todo' },
  { title: '진행 중', status: 'ongoing' },
  { title: '완료', status: 'done' },
]

function BoardContainer() {
  const [issueModalState, setIssueModalState] = useState({
    visible: false,
    status: '',
    defaultValue: undefined,
  })

  const handleCloseIssueModal = () => {
    setIssueModalState({
      visible: false,
      status: undefined,
      defaultValue: undefined,
    })
  }

  const handleOpenIssueModal = (status, defaultValue) => {
    setIssueModalState({
      visible: true,
      status,
      defaultValue,
    })
  }

  return (
    <S.Wrapper>
      <S.Header>
        <h1>asdf</h1>
      </S.Header>

      <S.Section>
        {statuses.map(({ title, status }) => (
          <S.ColumnWrapper key={status}>
            <Column
              title={title}
              status={status}
              onClickAddItem={handleOpenIssueModal}
              onClickItem={handleOpenIssueModal}
            />
          </S.ColumnWrapper>
        ))}
      </S.Section>

      {issueModalState.visible && (
        <IssueModal
          status={issueModalState.status}
          defaultValue={issueModalState.defaultValue}
          isEdit={issueModalState.defaultValue !== undefined}
          onCancel={handleCloseIssueModal}
        />
      )}
    </S.Wrapper>
  )
}

export default BoardContainer
