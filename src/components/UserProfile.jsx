import React from 'react';
import { Descriptions, Modal, Tag } from 'antd';

const bodyStyle = {
  maxHeight: 'calc(100vh - 200px)',
  overflow: 'auto',
};

export default function UserProfile({ userId, roles, onCancel }) {
  return (
    <Modal
      visible
      footer={null}
      title="Profile"
      bodyStyle={bodyStyle}
      onCancel={onCancel}
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Bank Id">{userId}</Descriptions.Item>
        <Descriptions.Item label="Roles">
          {roles.map((role) => (
            <Tag key={role} color="cyan">
              {role}
            </Tag>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}
