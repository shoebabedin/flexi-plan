import React from "react";

const SectionTitle = ({ lebelData, selectBtn }) => {
  
  return (
    <>
      <h2>{lebelData.title}</h2>
      <h4>{lebelData.subTitle}</h4>
      {lebelData.title !== "Missed Call Alert" && (
        <p>
          {selectBtn > 1000 ? selectBtn / 1024 : selectBtn}
          {lebelData.unit === "MB"
            ? selectBtn > 1000
              ? "GB"
              : "MB"
            : lebelData.unit}
        </p>
      )}
      <p>{lebelData.desc}</p>
    </>
  );
};

export default SectionTitle;
