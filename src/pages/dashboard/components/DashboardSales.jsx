import React from "react";
import { Table, Typography, Space, Button } from "antd";

const { Title } = Typography;

const leadsColumn = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Phone No",
    dataIndex: "phoneno",
    key: "phoneno",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"

  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Created",
    dataIndex: "created",
    key: "created"
  },
  {
    title: "Actions",
    key: "actions",
    render: (v, c, r) => (
      <Space size="middle">
        <Button>v</Button>
      </Space>
    ),
  }
];

const remindersColumn = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Phone No",
    dataIndex: "phoneno",
    key: "phoneno",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"

  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "Actions",
    key: "actions",
    render: (v, c, r) => (
      <Space size="small">
        <Button>v</Button>
        <Button>c</Button>
        <Button>r</Button>
      </Space>
    ),
  }
];

const leadsData = [
  {
    key: 1,
    name: "John Brown sr.",
    phoneno: 1236549877,
    email: "abc@gmail.com",
    status: "In Progress",
    created: 'Jan',
    action: 'Done'
  },
  {
    key: 2,
    name: "Joe Black",
    phoneno: 1236549877,
    email: "abc@gmail.com",
    status: "In Progress",
    created: 'Jan',
    action: 'Done'
  },
  {
    key: 3,
    name: "Joe Black 1",
    phoneno: 3336549877,
    email: "abc@gmail.com",
    status: "In Progress",
    created: 'Jan',
    action: 'Done'
  }
];

const remindersData = [
  {
    key: 1,
    name: "John Brown sr.",
    phoneno: 1236549877,
    email: "abc@gmail.com",
    status: "In Progress",
    time: '4pm',
    action: 'Done'
  },
  {
    key: 2,
    name: "Joe Black",
    phoneno: 1236549877,
    email: "abc@gmail.com",
    status: "In Progress",
    time: '5pm',
    action: 'Done'
  },
  {
    key: 3,
    name: "Joe Black 1",
    phoneno: 3336549877,
    email: "abc@gmail.com",
    status: "In Progress",
    time: '5:30pm',
    action: 'Done'
  }
];

// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   onSelect: (record, selected, selectedRows) => {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     console.log(selected, selectedRows, changeRows);
//   }
// };

function DashboardSales() {
  return (
    <>
      <Title level={4}>Recent Leads (latest by 3 days)</Title>
      <Table
        columns={leadsColumn}
        // rowSelection={{ ...rowSelection }}
        dataSource={leadsData}
      />
      <Title level={4}>Today's Reminders</Title>
      <Table
        columns={remindersColumn}
        // rowSelection={{ ...rowSelection }}
        dataSource={remindersData}
      />
    </>
  );
}

export default DashboardSales;
