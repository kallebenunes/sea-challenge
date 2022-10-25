import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Col, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import SectorSelector from "./components/SectorSelector";
import { Route, Router, Routes } from "react-router";
import Edit from './pages/EditSector';
import CreateSector from "./pages/CreateSector";
import EditSector from "./pages/EditSector";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Row style={{ height: "calc(100vh - 64px)" }}>
        <Col style={{ background: "" }} lg={{ span: 8 }}>
          <SectorSelector />
        </Col>
        <Col>
        <Routes>
            <Route path="/" element={<CreateSector />} />
            <Route path="/edit" element={<EditSector />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
