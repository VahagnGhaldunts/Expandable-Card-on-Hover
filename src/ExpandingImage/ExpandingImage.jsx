// styles
import classes from "./styles.module.css";

export default function ExpandingImage() {
  return (
    <div className={classes.container}>
      <div className={classes.gallery}>
        <div className={classes.img_box}></div>
        <div className={classes.img_box}></div>
        <div className={classes.img_box}></div>
        <div className={classes.img_box}></div>
        <div className={classes.img_box}></div>
      </div>
    </div>
  );
}
