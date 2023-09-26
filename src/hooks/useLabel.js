const useLabel = (key) => {
  if (key === "longevity") {
    return {
      title: "Validity",
      subTitle: "",
      unit: "Days",
      active: "#76c779",
      desc: ""
    };
  }
  if (key === "data") {
    return {
      title: "Internet",
      subTitle: "Regular",
      unit: "MB",
      active: "#76c779",
      desc: ""
    };
  }
  if (key === "fourg") {
    return {
      title: "4G Internet",
      subTitle: "4G Only",
      unit: "MB",
      active: "#76c779",
      desc: "4G enabled handset + SIM required"
    };
  }
  if (key === "voice") {
    return {
      title: "Minutes",
      subTitle: "",
      unit: "Minutes",
      active: "#ee395a",
      desc: "Any Local Number"
    };
  }
  if (key === "bioscope") {
    return {
      title: "Bioscope",
      subTitle: "",
      unit: "GB",
      active: "#c34ab7",
      desc: "Only used to watch Bioscope"
    };
  }
  if (key === "sms") {
    return {
      title: "SMS",
      subTitle: "",
      unit: "SMS",
      active: "#4abbc3",
      desc: ""
    };
  }
  if (key === "mca") {
    return {
      title: "Missed Call Alert",
      subTitle: "",
      unit: "Validity: 30 days",
      active: "#76c779",
      desc: ""
    };
  }
};

export default useLabel;
