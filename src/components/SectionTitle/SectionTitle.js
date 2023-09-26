import React from "react";

const SectionTitle = ({ lebelData, selectBtn }) => {
  return (
    <>
      <h2>{lebelData.title}</h2>
      <h4>{lebelData.subTitle}</h4>
      <p>
        {" "}
        {selectBtn} {lebelData.unit}
      </p>
    </>
  );
};

export default SectionTitle;
