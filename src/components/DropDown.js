import React, { Component, useState } from "react";
import styles from "./Dropdown.module.css";
const DropDown = (props) => {
  const { label, placeholder, options } = props;
  const [selectedItem, setSelectedItem] = useState({
    selected: false,
    label: "",
  });

  const [showDropDown, setShowDropDown] = useState(false);
  const optionSelectHandler = (item) => {
    setSelectedItem({
      selected: true,
      label: item,
    });
    setShowDropDown(false);
  };
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <div
        onMouseOver={() => setShowDropDown(true)}
        onMouseLeave={() => setShowDropDown(false)}
      >
        <div className={styles.selectDiv}>
          <div>{selectedItem.selected ? selectedItem.label : "Select"}</div>
          <img
            src={require("../icons/down-arrow.png")}
            style={{ height: 30, width: 30 }}
          ></img>
        </div>
        {showDropDown &&
          options.map((item) => {
            return (
              <div
                className={styles.optionDiv}
                key={`option${item}`}
                onClick={() => optionSelectHandler(item)}
              >
                <label>{item}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DropDown;
