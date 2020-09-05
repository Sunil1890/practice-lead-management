import React from "react";
import { Table } from "antd";

const columns = [
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
    dataIndex: "actions",
    key: "actions"
  }
];

const data = [
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

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  }
};

function LeadManagement() {
  return (
    <Table
      columns={columns}
      rowSelection={{ ...rowSelection }}
      dataSource={data}
    />
  );
}

export default LeadManagement;
