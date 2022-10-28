import React, { useEffect } from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchSectors } from "../../store/modules/sectors";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SectorSelector = () => {
  const dispatch = useDispatch();
  const sectorsState = useSelector((state: any) => state.sectors);
  useEffect(() => {
    dispatch(fetchSectors());
    console.log(sectorsState)
  }, []);

  return (
    <main>
      <h1>Setores</h1>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        {sectorsState && sectorsState.value.map((sector: any) => (
          <Panel
            header={sector?.name}
            key={sector.id}
            className="site-collapse-custom-panel"
          >
            <div>
              <span>
                {sector.positions.map((position:any ) => <span>{position}</span>)}
              </span>
            </div>
          </Panel>
        ))}
      </Collapse>
    </main>
  );
};
export default SectorSelector;
