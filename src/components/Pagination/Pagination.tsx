import styles from './Pagination.module.css'

interface Props {
  items: number,
  currentPage: number,
  pageSize: number,
  onPageChange: any
}

//? Response pagination selector to enable viewer to view different pages of content based on their needs
const Pagination = ({ items, currentPage, pageSize, onPageChange}: Props) => {
  const pagesCount = Math.ceil(items / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  if (pagesCount === 1) return null;
  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <div
          key={page}
          className={page === currentPage ? styles.pageItemActive : styles.pageItem}
        >
          <a onClick={() => onPageChange(page)}>
            <div className={styles.pageLink} >{page}</div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Pagination;