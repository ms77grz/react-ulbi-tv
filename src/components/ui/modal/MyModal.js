import useKeypress from '../../../hooks/useKeypress';
import classes from './MyModal.module.css';

export default function MyModal({ children, visible, setVisible }) {
  const rootClasses = [classes.myModal];

  useKeypress('Escape', () => {
    setVisible(false);
  });

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={e => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
