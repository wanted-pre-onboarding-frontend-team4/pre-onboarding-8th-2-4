import * as S from 'components/board/board.styles';
import IssueModal from 'components/modals/issueModal/issueModal';
import Column from 'components/column/column';

const statuses = [
  { title: '👀 Todo', status: 'todo' },
  { title: '🔥 Ongoing', status: 'ongoing' },
  { title: '🥳 Done', status: 'done' },
];

const BoardUI = ({
  issueModalState,
  handleOpenIssueModal,
  handleCloseIssueModal,
  handleUpdateIssueStatus,
}) => {
  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = status => () => {
    handleUpdateIssueStatus(status);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <h1>Issue List</h1>
      </S.Header>

      <S.Section>
        {statuses.map(({ title, status }) => (
          <S.ColumnWrapper
            key={status}
            onDragOver={handleDragOver}
            onDrop={handleDrop(status)}
          >
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
  );
};

export default BoardUI;
