import React from "react";
import { Spin, Space } from "antd";
import "antd/dist/antd.css";
import "../styles/loading.css";

export default function Loading() {
  return (
    <Space size="large" className="loader">
      <Spin size="large" />
    </Space>
  );
}
