import s from './Buttons.module.css';

export default function Button({ text, onClick }) {
  return (
    <div className={s.wrapper}>
      <button type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
