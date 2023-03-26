/* eslint-disable import/no-extraneous-dependencies */
import { NavLink, Outlet } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <h1>Math mathematician</h1>
          <div>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="calculator">Calculator</NavLink>
            <NavLink to="Quotes">Quote</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
