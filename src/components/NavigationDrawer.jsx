import { Link } from 'react-router-dom';

function NavigationDrawer({ isOpen, onClose }) {
  return (
    <nav className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-header">
        <h1 className="drawer-title">TaskBoard</h1>
        <button className="close-drawer" onClick={onClose}>&times;</button>
      </div>
      <ul className="drawer-menu">
        <li>
          <Link to="/" onClick={onClose}>Home</Link>
        </li>
        <li>
          <Link to="/tasks" onClick={onClose}>Tasks</Link>
        </li>
        <li>
          <Link to="/about" onClick={onClose}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationDrawer;