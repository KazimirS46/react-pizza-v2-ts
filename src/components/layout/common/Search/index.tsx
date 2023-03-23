import { FC, useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import styles from './index.module.scss';
import { useAppDispatch } from '../../../../redux/hooks';
import { setSearchValue } from '../../../../redux/slices/filterSlice';

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sendDefferedRequest = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 1000),
    []
  );

  const changeValue: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
    sendDefferedRequest(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
    sendDefferedRequest('');
    searchInputRef.current?.focus();
  };

  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox='0 0 32 32'>
        <path d='m27.414 24.586-5.077-5.077A9.932 9.932 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10a9.932 9.932 0 0 0 5.509-1.663l5.077 5.077a2 2 0 1 0 2.828-2.828zM7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z' />
      </svg>
      <input
        ref={searchInputRef}
        className={styles.input}
        value={inputValue}
        onChange={changeValue}
        placeholder='Поиск пиццы...'
        type='text'
      />
      <svg viewBox='0 0 32 32' className={styles.clearIcon} onClick={clearInput}>
        <g id='cross'>
          <path d='m7 7 18 18M7 25 25 7' />
        </g>
      </svg>
    </div>
  );
};

export default Search;
