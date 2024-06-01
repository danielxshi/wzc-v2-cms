import style from "../../style/modules/_footer.module.scss"
import FooterMenuTitle from "./FooterMenuTitle";

function FooterMenuItems(props) {
  return (
    <div className={style["footer--menu--module--container"]}>
      <FooterMenuTitle 
        title={props.title}
      />
      <div className={style["footer--links"]}>{props.children}</div>
    </div>
  );
}

export default FooterMenuItems;
