const mainColor = "#3E6DF9";
export const customStyles = {
  control: (provided: any, state: any) => {
    return {
      ...provided,
      border: `1px solid ${
        state.selectProps.className === "error" ? "red" : "#0000004F"
      }`,
      outline: "none",
      boxShadow: "none",
      "&:hover": {
        borderColor: "none",
      },
      "&:focus": {
        borderColor: mainColor,
      },
      borderRadius: 4,
      height: "44px",
      fontSize: "16px",
      boxSizing: "content-box",
      backgroundColor: state.isDisabled ? "#D9D9D9" : "",
      cursor: state.isDisabled ? "not-allowed !important" : "",
    };
  },
  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    color: state.selectProps.className === "error" ? "red" : "gray",
    fontSize: "14px",
  }),
  menu: (provided: any) => ({
    ...provided,
    maxHeight: "250px",
    overflowY: "auto",
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? mainColor : "#fff",
    color: state.isFocused ? "white" : "black",
    padding: "10px 12px",
    borderBottom: "1px solid #CCCCCC",
    "&:hover": {
      cursor: "pointer",
    },
  }),

  multiValue: (styles: any) => {
    return {
      ...styles,
      backgroundColor: mainColor,
      color: "white",
      border: `1px solid ${mainColor}`,
      borderRadius: "4px",
    };
  },
  multiValueLabel: (styles: any, { data }: { data: any }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: "white",
    backgroundColor: "none",
    marginTop: "2px",
    ":hover": {
      color: "red",
      backgroundColor: "none",
    },
  }),
  menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
};
