import s from './Header.module.css';
import Navigation from './Navigation/Navigation';

export default function Header() {
  return (
    <header className={s.nav}>
      <Navigation></Navigation>
    </header>
  );
}
