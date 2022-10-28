import { useState } from "react";


import { Col, Layout, Row } from "antd";
import { Header } from "antd/lib/layout/layout";

import SectorSelector from "./components/SectorSelector";
import { Route, Routes } from "react-router";

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
