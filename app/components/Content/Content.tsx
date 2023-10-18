"use client";
import React from "react";
import styles from "./Content.module.css";
import { base, base2, base3, base4, base5, base6 } from "@/constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MobileBox from "../MobileBox/MobileBox";
import Image from "next/image";

const Content = () => {
  return (
    <div className="container-fluid px-0 pt-3 pt-md-5 overflow-hidden">
      <div className={`row ${styles.isNotMobile}`}>
        <div className="position-relative">
          <Image
            alt="footballer"
            src="/images/footballer.png"
            fill
            className={`${styles.footballer} position-absolute `}
          />
        </div>
        <div className="d-flex gap-3">
          <div className="col"></div>
          <div className={`${styles.columnWidth} pe-5`}>
            <div className="mb-4 pt-3">
              <h1 className={styles.header}>ATHLETS</h1>
            </div>
            <div className="py-5">
              {/* title */}
              <div className="d-flex align-items-center mb-4 gap-2 ">
                <div>
                  <div className={styles.num}>{base.num}</div>
                  <div
                    className={styles.borderNum}
                    style={{ backgroundColor: `${base.borderColor}` }}
                  ></div>
                </div>
                <div>
                  <h5 className={styles.title}>{base.title}</h5>
                </div>
              </div>
              {/* text */}
              <div
                className={styles.text}
                style={{ backgroundColor: `${base.bgColor}` }}
              >
                {base.text}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.box2} d-flex gap-3 align-items-center`}
          style={{ backgroundColor: `${base2.bgColor}` }}
        >
          <div className="col"></div>
          <div className={`${styles.columnWidth} pe-5`}>
            {/* title */}
            <div className="d-flex align-items-center mb-4 gap-2">
              <div>
                <div className={styles.num}>{base2.num}</div>
                <div
                  className={styles.borderNum}
                  style={{ backgroundColor: `${base2.borderColor}` }}
                ></div>
              </div>
              <div>
                <h5 className={styles.title}>{base2.title}</h5>
              </div>
            </div>
            {/* text */}
            <div className={styles.text}>{base2.text}</div>
          </div>
        </div>

        <div
          className={`${styles.box3} d-flex gap-3 align-items-center`}
          style={{ backgroundColor: `${base3.bgColor}` }}
        >
          <div className="col"></div>
          <div className={`${styles.columnWidth} pe-5`}>
            {/* title */}
            <div className="d-flex align-items-center mb-4 gap-2">
              <div>
                <div className={styles.num}>{base3.num}</div>
                <div
                  className={styles.borderNum}
                  style={{ backgroundColor: `${base3.borderColor}` }}
                ></div>
              </div>
              <div>
                <h5 className={styles.title}>{base3.title}</h5>
              </div>
            </div>
            {/* text */}
            <div className={styles.text} style={{ color: "white" }}>
              {base3.text}
            </div>
          </div>
        </div>
      </div>

      <div className={`row ${styles.isNotMobile}`}>
        <div className="position-relative">
          <Image
            alt="footballer"
            src="/images/baseketball.png"
            className={`${styles.baseketballer} position-absolute `}
            fill
          />
        </div>
        <div className="d-flex px-5 gap-3">
          <div className={`${styles.columnWidth} ps-0 ps-xl-5`}>
            <div className="mb-4 pt-5">
              <h1 className={styles.header}>PLAYERS</h1>
            </div>
            <div className="py-5">
              {/* title */}
              <div className="d-flex align-items-center mb-4 gap-2 ">
                <div>
                  <div className={styles.num}>{base4.num}</div>
                  <div
                    className={styles.borderNum}
                    style={{ backgroundColor: `${base4.borderColor}` }}
                  ></div>
                </div>
                <div>
                  <h5 className={styles.title}>{base4.title}</h5>
                </div>
              </div>
              {/* text */}
              <div
                className={styles.text}
                style={{ backgroundColor: `${base4.bgColor}` }}
              >
                {base4.text}
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div
          className={`${styles.box2} d-flex px-5 gap-3 align-items-center`}
          style={{ backgroundColor: `${base5.bgColor}` }}
        >
          <div className={`${styles.columnWidth} ps-0 ps-xl-5`}>
            {/* title */}
            <div className="d-flex align-items-center mb-4 gap-2">
              <div>
                <div className={styles.num}>{base5.num}</div>
                <div
                  className={styles.borderNum}
                  style={{ backgroundColor: `${base5.borderColor}` }}
                ></div>
              </div>
              <div>
                <h5 className={styles.title}>{base5.title}</h5>
              </div>
            </div>
            {/* text */}
            <div className={styles.text}>{base5.text}</div>
          </div>
          <div className="col"></div>
        </div>

        <div
          className={`${styles.box3} d-flex px-5 gap-3 align-items-center`}
          style={{ backgroundColor: `${base6.bgColor}` }}
        >
          <div className={`${styles.columnWidth} ps-0 ps-xl-5`}>
            {/* title */}
            <div className="d-flex align-items-center mb-4 gap-2">
              <div>
                <div className={styles.num} style={{ color: "#8F6BE8" }}>
                  {base6.num}
                </div>
                <div
                  className={styles.borderNum}
                  style={{ backgroundColor: `${base6.borderColor}` }}
                ></div>
              </div>
              <div>
                <h5 className={styles.title}>{base6.title}</h5>
              </div>
            </div>
            {/* text */}
            <div className={styles.text} style={{ color: "white" }}>
              {base6.text}
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>

      {/* mobile Carousel */}
      <div className={`row ${styles.isMobile}`}>
        <div className={styles.boxHeader}>
          <h1 className={styles.header}>ATHLETS</h1>
          <div>
            <Image
              alt="footballer"
              src="/images/footballer-mobile.png"
              layout="fixed"
              fill
              className={`${styles.footballer}  position-absolute`}
            />
          </div>
        </div>
        <div className="px-0">
          <Carousel showStatus={false} showArrows={true} showThumbs={false}>
            <MobileBox
              title={base.title}
              text={base.text}
              num={base.num}
              borderColor={base.borderColor}
              bgColor={base.bgColor}
            />
            <MobileBox
              title={base2.title}
              text={base2.text}
              num={base2.num}
              borderColor={base2.borderColor}
              bgColor={base2.bgColor}
            />
            <MobileBox
              title={base3.title}
              text={base3.text}
              num={base3.num}
              borderColor={base3.borderColor}
              bgColor={base3.bgColor}
            />
          </Carousel>
        </div>
        <div className={styles.boxHeader}>
          <h1 className={`${styles.header} pt-4`}>PLAYERS</h1>

          <Image
            alt="baseketballer"
            src="/images/baseketball.png"
            layout="fixed"
            fill
            className={`${styles.baseketballer}  position-absolute`}
          />
        </div>
        <div className="px-0">
          <Carousel showStatus={false} showArrows={true} showThumbs={false}>
            <MobileBox
              title={base4.title}
              text={base4.text}
              num={base4.num}
              borderColor={base4.borderColor}
              bgColor={base4.bgColor}
            />
            <MobileBox
              title={base5.title}
              text={base5.text}
              num={base5.num}
              borderColor={base5.borderColor}
              bgColor={base5.bgColor}
            />
            <MobileBox
              title={base6.title}
              text={base6.text}
              num={base6.num}
              borderColor={base6.borderColor}
              bgColor={base6.bgColor}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Content;
