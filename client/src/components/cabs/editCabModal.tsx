import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";

type Props = {
  isModalOpen: boolean;
  handleCancel: any;
  onFinish: any;
  onFinishFailed: any;
  data: any;
  updated: number;
};

function EditCabModal({
  isModalOpen,
  onFinish,
  onFinishFailed,
  handleCancel,
  updated,
  data,
}: Props) {
  const [form] = Form.useForm();

  const modeledData = {
    name: data.name,
    price: data.price,
    image: data.image,
  };
  form.setFieldsValue(modeledData);
  useEffect(() => {
    form.resetFields();
  }, [updated]);
  return (
    <>
      <Modal
        title="Edit Cab Details"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
      >
        <div className="w-full py-5 px-28">
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 650 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter the name" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please enter the price" }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="image"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Please enter the image url",
                },
              ]}
            >
              <Input type="url" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  color: "white",
                  backgroundColor: "green",
                  height: "40px",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default EditCabModal;
