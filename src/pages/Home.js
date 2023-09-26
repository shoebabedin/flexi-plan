import React, { useEffect, useState } from "react";
import FlexPlanItem from "../components/FlexPlanItem/FlexPlanItem";

const Home = () => {
  const [jsonBubbleData, setJsonBubbleData] = useState([]);
  const [jsonEligibilityData, setJsonEligibilityData] = useState([]);
  const [jsonSelectedBubbleData, setJsonSelectedBubbleData] = useState([]);
  const [jsonFilterData, setJsonFilterData] = useState([]);

  useEffect(() => {
    fetch("/data/bubble-map.json")
      .then((response) => response.json()) // Convert response to JSON {voice:[], bubble:[]}
      .then((data) => {
        var result = Object.keys(data).map(function (key) {
          return { key, data: data[key] };
        });
        setJsonBubbleData(result);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/data/eligibility-map.json")
      .then((response) => response.json()) // Convert response to JSON {voice:[], bubble:[]}
      .then((data) => {
        var result = Object.keys(data).map(function (key) {
          return { key, data: data[key] };
        });
        setJsonEligibilityData(result);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/data/selected-bubbles.json")
      .then((response) => response.json()) // Convert response to JSON {voice:[], bubble:[]}
      .then((data) => {
        // var result = Object.keys(data).map(function (key) {
        //   return { key, data: data[key] };
        // });
        setJsonSelectedBubbleData(data);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  console.log("jsonBubbleData", jsonBubbleData);
  console.log("jsonEligibilityData", jsonEligibilityData);

  return (
    <>
      <div className="flexiPlan">
        <h2>Flexiplan</h2>
        <p>Make your own plan and enjoy great savings! Only for GP Customers</p>
        {jsonBubbleData.map((item, index) => (
          <FlexPlanItem
            key={index}
            item={item}
            jsonSelectedBubbleData={jsonSelectedBubbleData}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
