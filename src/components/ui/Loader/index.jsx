import styles from './LoadingScreen.module.scss';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.preloader}>
        <svg viewBox='0 0 102 102' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            className={styles.bigCircle}
            d='M101 51C101 78.6142 78.6142 101 51 101C23.3858 101 1 78.6142 1 51'
            stroke='#FE5F1F'
            strokeWidth='2'
          />
          <path
            className={styles.smallCircle}
            d='M91 51C91 28.9086 73.0914 11 51 11C28.9086 11 11 28.9086 11 51'
            stroke='#FE5F1F'
            strokeWidth='2'
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
