import React, { useState } from "react";
import useLabel from "../../hooks/useLabel";
import SectionTitle from "../SectionTitle/SectionTitle";
import Bubble from "../bubble/Bubble";

const FlexPlanItem = ({ item, jsonSelectedBubbleData }) => {
  const lebelData = useLabel(item.key);
  const [selectBtn, setSelectBtn] = useState(jsonSelectedBubbleData);

  const handleData = (info, title) => {
    setSelectBtn((jsonSelectedBubbleData) => ({
      ...jsonSelectedBubbleData,
      [title]: info
    }));
  };

  return (
    <>
      <div className={`flexPlanItem ${lebelData.active}`}>
        <div className="title">
          <SectionTitle lebelData={lebelData} selectBtn={selectBtn[item.key]}/>
        </div>
        <div className="data">
          <ul>
            {item.data.map((data, index) => (
              <li key={index}>
                <Bubble
                  name={item.key}
                  data={data}
                  handleData={handleData}
                  selectedData={selectBtn[item.key]}
                  lebelData={lebelData}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FlexPlanItem;