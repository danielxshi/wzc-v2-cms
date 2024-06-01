"use client"
import style from "../../style/modules/_contact.module.scss";
import style2 from "../../style/modules/_button.module.scss";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

import { useRouter } from "next/router";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function EmailForm() {

  return (
    <div className={style["form--content--wrapper"]}>
      <h3 className={style["contact--form--title"]}>在线留言</h3>
      <form method="post">
        <div className={style["label--input--wrapper"]}>
          <label className={style["form--label"]} htmlFor="name">
            全名
          </label>
          <input
            required
            className={style["form--input"]}
            type="text"
            name="name"
            placeholder="请输入您的姓名"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
        </div>
        <div className={style["label--input--wrapper"]}>
          <label className={style["form--label"]} htmlFor="phone">
            电话
          </label>
          <input
            required
            className={style["form--input"]}
            type="text"
            name="phone"
            placeholder="请输入手机"
          />
        </div>
        <div id={style["email"]} className={style["label--input--wrapper"]}>
          <label className={style["form--label"]} htmlFor="email">
            主题词
          </label>
          <input
            required
            className={style["form--input"]}
            type="email"
            name="email"
            placeholder="请输入反馈标题"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={style["label--input--wrapper"]}>
          <label className={style["form--label"]} htmlFor="message">
            留言
          </label>
          <textarea
            rows="4"
            className={[
              style["form--input"],
              style["form--message--input"],
            ].join("")}
            id="subject"
            name="message"
            placeholder="留言内容"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>

        <button
          className={style2["primary--btn"]}
          type="submit"
          value="Your Message"
          onClick={(e) => {}}
        >
          <FiSend />
          提交
        </button>
      </form>
    </div>
  );
}
