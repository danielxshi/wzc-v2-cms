"use client";
import style from "../../style/modules/_footer.module.scss";
import FooterBottomBar from "./FooterBottomBar";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {
  return (
    <footer className={[style["footer"], ["px-8 pt-8"]].join(" ")}>
      <FooterNavigation />
      <FooterBottomBar />
    </footer>
  );
}
