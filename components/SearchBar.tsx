import { useState } from 'react';
import styles from '@/styles/SearchBar.module.css';

interface SearchBarProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className={styles.searchContainer} >
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
      <button>
        <span>Search</span>
      </button>

    </form>
  );
};

export default SearchBar;
