import classes from './MyLoader.module.css';

export default function MyLoader() {
  return (
    <div className={classes.myLoaderContainer}>
      <div className={classes.myLoader}></div>
    </div>
  );
}
