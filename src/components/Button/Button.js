import s from './Button.module.scss';

export default function Button() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <button type="button" className={s.Button}>
      Load more
    </button>
  );
}
