import s from './Searchbar.module.scss';
export default function Searchbar() {
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm}>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
}
