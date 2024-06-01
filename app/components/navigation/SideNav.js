import style from "../../style/modules/_nav.module.scss";

export default function SideNav(props) {
  return (
    <>
      <div className={style["side-nav--container"]}>
        <div className={style["header--container"]}>
          <h4 className="text-xl">{props.category}</h4>
        </div>
        <div className={style["side-nav--menu--container"]}>
          {/* <ul>
              {currentItem.SideNavMenuItems.map((items, index) => {
                return <div key={index}>{renderSwitch(items)}</div>;
              })}
            </ul> */}
          {props.children}
        </div>
      </div>
    </>
  );
}
