import React from "react";
import styles from "./MobileBox.module.css";

type Props = {
  title: string;
  text: string;
  num: string;
  borderColor: string;
  bgColor: string;
};
const MobileBox = ({ title, text, num, borderColor, bgColor }: Props) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: `#F5F4F9`, paddingInline: "5%" }}
    >
      {/* title */}
      <div className="d-flex align-items-center mb-4 gap-2">
        <div>
          <div className={styles.num}>{num}</div>
          <div
            className={styles.borderNum}
            style={{ backgroundColor: `#603ebe` }}
          ></div>
        </div>
        <div>
          <h5 className={styles.title}>{title}</h5>
        </div>
      </div>
      {/* text */}
      <div className={`${styles.text}  `}>{text}</div>
    </div>
  );
};

export default MobileBox;
