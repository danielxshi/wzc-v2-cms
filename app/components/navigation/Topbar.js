/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import style from "../../style/modules/_nav.module.scss";
// import { ImPhone } from "react-icons/im";
// import { IoMdMail } from "react-icons/io";
import SocialItems from "../../JSON/SocialItems";
import Modal from "../contact/ContactModal";
import MenuItems from "../../JSON/MenuItems";
import ContentfulImage from "@/lib/contentful-image";

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <nav className={[style["nav-grid"], style["top-bar"]].join(" ")}>
      <div className="flex col-start-12 m-auto">
        <span className="whitespace-nowrap mr-6">服务热线 604-379-9888</span>
        {/* <Modal onClose={() => setShowModal(false)} show={showModal}>
          <div className="flex flex-column justify-items-center m-auto mt-4 pt-4">
            <div className="m-auto w-3/4 h-64 relative">
              <ContentfulImage
                objectFit="contain"
                layout="fill"
                fallbackSrc={MenuItems.QRFallBack}
                src={MenuItems.QRCode}
                priority
              />
            </div>
            <div className="m-auto mt-4">
              <h1 className="text-2xl font-bold">加拿大温州同乡总会宗旨</h1>
              <p className="text-base">团结、互助、携手、共进</p>
            </div>
          </div>
        </Modal> */}
        <ul>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <div className="w-6">
                <ContentfulImage
                  objectFit="contain"
                  width="32"
                  height="32"
                  src={SocialItems.WeChat}
                  priority
                />{" "}
              </div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
