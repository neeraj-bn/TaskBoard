import { Link } from 'react-router-dom';

function NavigationDrawer({ isOpen, onClose, isMobile }) {
  const handleLinkClick = () => {
    if (isMobile) {
      onClose(); // Only close on mobile when clicking a link
    }
  };

  return (
    <nav className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-header">
        <h1 className="drawer-title">TaskBoard</h1>
        {/* Close button visible in all modes */}
        <button className="close-drawer" onClick={onClose}>&times;</button>
      </div>
      <ul className="drawer-menu">
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to="/tasks" onClick={handleLinkClick}>Tasks</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationDrawer;
