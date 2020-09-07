import React from 'react'
import { List, Typography } from 'antd';

const { Text, Title } = Typography
// import InfiniteScroll from 'react-infinite-scroller';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function DashboardAdmin() {
  return (
    <List
      scroll={{ y: 'calc(100vh - 4em)' }}
      size="large"
      header={<Title level={4}>Recent Activity</Title>}
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
  )
}

export default DashboardAdmin
