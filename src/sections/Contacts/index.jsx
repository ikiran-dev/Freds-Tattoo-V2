import React from "react";
import styles from "./Contacts.module.scss";
import { MapCurtain, Map } from "../../components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { CloseOpenTracker } from "../../components";

const linkListData = [
  {
    link: "https://www.instagram.com/darkinktattoostudio7?igsh=MWlxcTY1eHJoZTJ6NA==",
    icon: AiFillInstagram,
    text: "DarkInk Tattoo Studio",
  },
  // {
  //   link: "https://www.facebook.com/fredstattooandpiercingstudio/",
  //   icon: AiFillFacebook,
  //   text: "DarkInk Tattoo Studio",
  // },
  {
    link: "https://api.whatsapp.com/send?phone=919620770719&text=DarkInk%20Tattoo%20Studio,%20I'd%20like%20to%20book%20an%20appointment%20for%20a%20tattoo,%20what's%20your%20availability?%20Thanks!",
    icon: BsFillTelephoneFill,
    text: "+91-9620770719",
  },
  {
    link: "https://g.co/kgs/zbMLJRr",
    icon: FaMapMarkerAlt,
    text: "652 11th main road, 4th block, Jayanagar, Bangalore-560011",
  },
];

export const Contacts = () => {
  return (
    <section className={styles.root}>
      <div className={styles.contentContainer}>
        <ul className={styles.list}>
          {linkListData.map((i) => (
            <li key={i.link} className={styles.listItem}>
              <a href={i.link} target="_blank" rel="noreferrer">
                {i.icon()}
                {i.text}
              </a>
            </li>
          ))}
        </ul>
        <ul style={{ textAlign: "left" }} className={styles.scheduleList}>
          <li>
            <span style={{ fontSize: "50px" }} className="secondaryFont">
              Our Timings:
            </span>
          </li>
          <li>Monday - 10:00 – 20:30</li>
          <li>Tuesday - 10:00–20:30</li>
          <li>Wednesday - 10:00–20:30</li>
          <li>Thursday - 10:00–20:30</li>
          <li>Friday - 10:00–20:30</li>
          <li>Saturday - Closed</li>
          <li>Sunday - Closed</li>
        </ul>
      </div>
      <div className={styles.mapContainer}>
        <Map />
        <MapCurtain />
      </div>
    </section>
  );
};
