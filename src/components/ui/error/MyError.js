import classes from './MyError.module.css';

export default function MyError({ error }) {
  return (
    <div className={classes.myErrorContainer}>
      <h1 className={classes.myError}>Something went wrong!</h1>
      <h2 className={classes.myErrorMessage}>{error}</h2>
    </div>
  );
}
