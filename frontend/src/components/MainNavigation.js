import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const LINKS = [
  { path: '/', text: 'Home' },
  { path: '/events', text: 'Events' },
];

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
