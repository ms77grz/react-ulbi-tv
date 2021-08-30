import { getPagesArray } from '../../../utils/pages';

import classes from './MyPagination.module.css';

export default function MyPagination({ totalPages, page, changePage }) {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={classes.myPaginationContainer}>
      {pagesArray.map(pageNum => (
        <span
          onClick={() => changePage(pageNum)}
          className={
            pageNum === page
              ? [classes.myPagination, classes.active].join(' ')
              : classes.myPagination
          }
          key={pageNum}
        >
          {pageNum}
        </span>
      ))}
    </div>
  );
}
