import React from "react";

const Bubble = ({ name, data, handleData, selectedData, lebelData }) => {
  return (
    <>
      <button
        onClick={() => handleData(data, name)}
        style={{
          backgroundColor: selectedData === data ? `${lebelData.active}` : "",
          color: selectedData === data ? `#fff` : ""
        }}
      >
        {data > 1000 ? data / 1024 : data}
        {lebelData.unit === "MB" ? (data > 1000 ? "GB" : "MB") : ""}
      </button>
    </>
  );
};

export default Bubble;
