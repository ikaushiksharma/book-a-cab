"use client";
import React from "react";
import { Button, Form, Input, Select, Space } from "antd";

const { Option } = Select;
type Props = {
  onSubmit(data: any): void;
  onReset(): void;
  disabled?: boolean;
};
const BookingForm = ({ onSubmit, disabled, onReset }: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    onSubmit(values);
  };

  const handleReset = () => {
    form.resetFields();
    onReset();
  };

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 30 },
  };

  const tailLayout = {
    wrapperCol: { offset: 10, span: 40 },
  };
  return (
    <Form disabled={disabled} {...layout} form={form} style={{ width: "75%" }} onFinish={onFinish}>
      <Form.Item
        name="email"
        label="Email Address"
        rules={[{ required: true, message: "Please enter a valid email address" }]}
      >
        <Input placeholder="abc@email.com" type="email" />
      </Form.Item>
      <Form.Item
        name="source"
        label="Pick Up"
        rules={[{ required: true, message: "Please Select Pickup Location" }]}
      >
        <Select placeholder="Please Select Pickup Location" allowClear>
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
          <Option value="D">D</Option>
          <Option value="E">E</Option>
          <Option value="F">F</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="destination"
        label="Drop Off"
        rules={[{ required: true, message: "Please Select Drop Location" }]}
      >
        <Select placeholder="Please Select Drop Location" allowClear>
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
          <Option value="D">D</Option>
          <Option value="E">E</Option>
          <Option value="F">F</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" style={{ background: "#24a0ed" }} htmlType="submit">
            Continue
          </Button>
          <Button htmlType="button" onClick={handleReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default BookingForm;
