import React, { useEffect, useState } from "react";
import useLabel from "../../hooks/useLabel";
import SectionTitle from "../SectionTitle/SectionTitle";
import Bubble from "../bubble/Bubble";

const FlexPlanItem = ({
  item,
  jsonSelectedBubbleData,
  jsonEligibilityData
}) => {
  const [selectBtn, setSelectBtn] = useState(jsonSelectedBubbleData);
  const lebelData = useLabel(item.key);
  const [activateData, setActivateData] = useState({ activateData: lebelData });

  const [dataInfo, setDataInfo] = useState("");
  const [dataTitle, setDataTitle] = useState("");

  useEffect(() => {
    // Use selectBtn.longevity here and check for dataInfo or selectBtn changes
    if (dataInfo === "") {
      let a = jsonEligibilityData["day_" + selectBtn.longevity];

      if (a) {
        // Create a new object to avoid state mutation
        a = { ...a, longevity: [], mca: [] };
        setActivateData(a);
      }
    } else {
      let a = jsonEligibilityData["day_" + dataInfo];

      if (a) {
        // Create a new object to avoid state mutation
        a = { ...a, longevity: [], mca: [] };
        setActivateData(a);
      }
    }
  }, [dataInfo, selectBtn]);

 
  const handleData = (info, title) => {
    setSelectBtn((prevSelectedData) => ({
      ...prevSelectedData,
      [title]: info
    }));

    if (title === "longevity") {
      setDataInfo(info);
      setDataTitle(title);
    }
  };
console.log(jsonEligibilityData);

  console.log(activateData);

  return (
    <>
      <div className={`flexPlanItem ${lebelData.active}`}>
        <div className="title">
          <SectionTitle lebelData={lebelData} selectBtn={selectBtn[item.key]} />
        </div>
        <div className="data">
          <ul>
            {item.data.length > 2 ? (
              item.data.map((data, index) => (
                <li key={index}>
                  <Bubble
                    name={item.key}
                    data={data}
                    handleData={handleData}
                    selectedData={selectBtn[item.key]}
                    lebelData={lebelData}
                    eligibility={
                      activateData[item.key] !== undefined &&
                      activateData[item.key][index]
                    }
                  />
                </li>
              ))
            ) : (
              <div>switch</div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};


export default FlexPlanItem;
