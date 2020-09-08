import React from 'react'

import {
  Row,
  Col,
  List,
  Typography,
} from 'antd'

const { Text, Title } = Typography;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
];

function RecentComments() {
  return (
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
  )
}

export default RecentComments