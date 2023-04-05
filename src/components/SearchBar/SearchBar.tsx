import styles from './SearchBar.module.css'


const SearchBar = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <input type='text' {...props} />
    </div>
  )
};

export default SearchBar