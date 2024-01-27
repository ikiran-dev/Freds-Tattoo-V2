import React from "react";
import styles from "./Contacts.module.scss";
import { MapCurtain, Map } from "../../components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { CloseOpenTracker } from "../../components";

const linkListData = [
  {
    link: "https://www.instagram.com/fredstattoostudio",
    icon: AiFillInstagram,
    text: "fredstattoostudio",
  },
  {
    link: "https://www.facebook.com/fredstattooandpiercingstudio/",
    icon: AiFillFacebook,
    text: "fredstattooandpiercingstudio",
  },
  {
    link: "https://api.whatsapp.com/send?phone=919986596942&text=Hey%20Freds%20Tattoo%20Studio%2C%20I%27d%20like%20to%20book%20an%20appointment%20for%20a%20tattoo%2C%20what%27s%20your%20availability%3F%20Thanks!",
    icon: BsFillTelephoneFill,
    text: "+91-99865 96942",
  },
  {
    link: "https://maps.app.goo.gl/fTmTF76EJUUWAqNQ6",
    icon: FaMapMarkerAlt,
    text: "3rd floor 972/A S.T. Bed, Koramangala 4th Block, Koramangala Bengaluru, Karnataka 560034 India",
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
