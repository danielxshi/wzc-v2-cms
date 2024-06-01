import ContactItems from "./ContactItems";
import style from "../../style/modules/_contact.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { IoMdMail } from "react-icons/io";

export default function ContactInformation() {
  return (
    <aside className="contact--information--wrapper">
      <h3 className={style["contact--information--header"]}>联系Contact</h3>
      <div className="contact--information--wrapper">
        <ul className={style["contact--information"]}>
          {ContactItems.ContactDetailItems.map((item, index) => {
            return (
              <li className={style["contact--information--item"]} key={index}>
                <div
                  className={
                    "location" == item.name
                      ? style["active"]
                      : style["inactive"]
                  }
                >
                  <HiLocationMarker className="flex" />
                </div>
                <div
                  className={
                    "mail" == item.name ? style["active"] : style["inactive"]
                  }
                >
                  <IoMdMail className="flex" />
                </div>
                <div
                  className={
                    "phone" == item.name ? style["active"] : style["inactive"]
                  }
                >
                  <ImPhone className="flex" />
                </div>
                <div
                  className={
                    "phone2" == item.name ? style["active"] : style["inactive"]
                  }
                >
                  <ImPhone className="flex" />
                </div>

                <div>
                  <span>{item.contactHeader}</span>
                  <span>{item.contactInfo}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
