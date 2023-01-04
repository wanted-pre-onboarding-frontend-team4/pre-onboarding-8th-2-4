import * as S from './board.styles'
import IssueModal from '../modals/issueModal/issueModal'
import Column from '../column/column'
// import useUpdateIssue from '../../commons/hooks/issue/useUpdateIssue'

const statuses = [
  { title: '할 일', status: 'todo' },
  { title: '진행 중', status: 'ongoing' },
  { title: '완료', status: 'done' },
]

export default function BoardUI({ issueModalState, handleOpenIssueModal, handleCloseIssueModal }) {
  //   const { updateIssue } = useUpdateIssue()

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (status) => () => {
    console.log('drop - status', status)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <h1>asdf</h1>
      </S.Header>

      <S.Section>
        {statuses.map(({ title, status }) => (
          <S.ColumnWrapper key={status} onDragOver={handleDragOver} onDrop={handleDrop(status)}>
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
