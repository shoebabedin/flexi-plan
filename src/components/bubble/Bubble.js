import React from "react";

const Bubble = ({
  name,
  data,
  handleData,
  selectedData,
  lebelData,
  eligibility
}) => {
  const isDisabled = eligibility === undefined && name !== "longevity";

  const handleClick = () => {
    if (!isDisabled) {
      handleData(data, name);
    }
  };
console.log(isDisabled);
  return (
    <button
      className={isDisabled ? "disabled" : ""}
      onClick={handleClick}
      style={{
        backgroundColor: selectedData === data ? `${lebelData.active}` : "",
        color: selectedData === data ? `#fff` : ""
      }}
    >
      {data > 1000 ? data / 1024 : data}
      {lebelData.unit === "MB" ? (data > 1000 ? "GB" : "MB") : ""}
    </button>
  );
};


export default Bubble;
