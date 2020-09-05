import React from 'react'
import { Form, Input, Button, Row, Col, Image } from 'antd';

function Login() {
  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8} className="align-center form-login-container">
        <Image
          width={120}
          src="https://simplehq.co/wp-content/uploads/2017/02/image-placeholder-blue.png"
        />
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email'
              }
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 6
              }
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item className="align-center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
