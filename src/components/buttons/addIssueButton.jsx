import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddIssueButton = ({ onClick }) => {
  return (
    <Button type="primary" size="large" onClick={onClick}>
      <PlusOutlined />
    </Button>
  );
};
export default AddIssueButton;
