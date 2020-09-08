import React from 'react';
import UsersDetail from './UsersDetail';
import RecentComments from './RecentComments'

import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'antd'

const { TextArea } = Input;

function LeadDetails() {
  return (
    <div className="lead-details">
      <UsersDetail />
      <RecentComments />

      <Row>
        <Col span={8}></Col>
        <Col span={16}>
          <Form layout="inline" className="comment-section">
            <Form.Item>
              <TextArea rows={1} />
            </Form.Item>
            <Form.Item>
              <Button block type="primary">
                Add Comment
              </Button>
            </Form.Item>
            <Form.Item>
              <Button block>
                Set Reminder
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default LeadDetails