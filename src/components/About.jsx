import React from 'react';
import { Card, Descriptions, Modal, Skeleton } from 'antd';

const systems = [
  {
    name: 'Active Pivot',
    branch: 'release/4.15.0',
    build: 5,
  },
  {
    name: 'Marke Risk UI',
    branch: 'release/4.15.0',
    build: 3,
  },
  {
    name: 'Exposure Monitor',
    branch: 'release/4.15.0',
    build: 1,
  },
  {
    name: 'Static Data',
    branch: 'release/4.11.0',
    build: 2,
  },
];

const bodyStyle = {
  maxHeight: 'calc(100vh - 200px)',
  overflow: 'auto',
};

export default function About({ onCancel }) {
  return (
    <Modal
      visible
      footer={null}
      title="About"
      bodyStyle={bodyStyle}
      onCancel={onCancel}
    >
      <Skeleton loading={false} active={false} paragraph={{ rows: 8 }}>
        <div className="flex w-full flex-col gap-4">
          {systems.map((system) => (
            <Card
              key={system.name}
              title={system.name}
              size="small"
              type="inner"
            >
              <Descriptions bordered column={1} size="small">
                {Object.entries(system).map(([name, value]) => {
                  if (name === 'name') return;
                  return (
                    <Descriptions.Item label={name}>{value}</Descriptions.Item>
                  );
                })}
              </Descriptions>
            </Card>
          ))}
        </div>
      </Skeleton>
    </Modal>
  );
}
