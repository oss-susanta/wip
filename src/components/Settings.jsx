import React from 'react';
import { Form, Modal, Radio, Select } from 'antd';
import { fonts } from '../configs/fonts';
import themes from '../configs/themes';

export default function Settings({ defaultValue, onCancel, onOk }) {
  const [form] = Form.useForm();
  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk(values);
    });
  };
  return (
    <Modal
      visible
      title="Settings"
      cancelText="Discard"
      okText="Apply"
      onCancel={onCancel}
      onOk={handleOk}
    >
      <Form layout="vertical" form={form} initialValues={defaultValue}>
        <Form.Item
          name="theme"
          label="Theme"
          rules={[{ required: true, message: 'Please select a theme.' }]}
        >
          <Radio.Group options={themes} />
        </Form.Item>
        <Form.Item
          name="fontFamily"
          label="Font Family"
          rules={[{ required: true, message: 'Please select a font family.' }]}
        >
          <Select options={fonts} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
