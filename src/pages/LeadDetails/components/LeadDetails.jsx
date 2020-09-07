import React from "react";
import {
  Typography,
  Row,
  Col,
  Tabs,
  List,
  Input,
  Button,
  Select
} from "antd"

const { Text, Title } = Typography;
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
];

function LeadDetails() {
  return (
    <div className="lead-details">
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

      <Row>
        <Col span={8}></Col>
        <Col span={16}>
          <List
            size="large"
            header={<Title level={4}>Recent Comment</Title>}
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item type="flex" justify="space-between">
                <List.Item.Meta
                  title={<Text>{item}</Text>}
                />
                <Text type="secondary">12:30pm</Text>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Row>
        <Col span={8}></Col>
        <Col span={16} >
          <Row className="comment-section">
            <Col span={12}>
              <TextArea rows={1} value="text" />
            </Col>
            <Col span={6}>
              <Button block type="primary">
                Add Comment
              </Button>
            </Col>
            <Col span={6}>
              <Button block>
                Set Reminder
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default LeadDetails