import React from 'react';
import { Card } from 'antd';

export default function SidePane({ type }) {
  if (type == null) return null;
  return (
    <Card type="inner" title={type} style={{ height: '100%' }}>
      Content
    </Card>
  );
}
