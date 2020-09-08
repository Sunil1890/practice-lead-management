import React from 'react';
import {
  Row,
  Col,
  Typography,
  Select,
  Button,
  Tabs,
} from 'antd';

const { Text, Title } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

function UsersDetail() {
  return (
    <Row>
      <Col span={8} className="lead-info">
        <Title level={2}>John Doe</Title>
        <p><Text strong>Ph : </Text><Text>+915699787890</Text></p>
        <p><Text strong>Email : </Text><Text>sjhd@asda</Text></p>
        <p><Text strong>Gender : </Text><Text>Male</Text></p>
        <p><Text strong>Reminder : </Text><Text>03-Sept-2020 4:00pm</Text></p>
        <Row>
          <Col span={16}>
            <Select block defaultValue="Status">
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
            </Select>
          </Col>
          <Col>
            <Button type="link">update</Button>
          </Col>
        </Row>
      </Col>
      <Col span={16} className="lead-details-tabs">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Latest" key="1">
            Content of Tab Pane 1
            </TabPane>
          <TabPane tab="23-Aug-2020" key="2">
            Content of Tab Pane 2
            </TabPane>
        </Tabs>
      </Col>
    </Row>
  )
}

export default UsersDetail