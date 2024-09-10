import React from 'react';

const navStyles = {
  header: {
    backgroundColor: '#65532F',
    color: 'white',
    padding: '30px 0',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #4b3e24',
    marginBottom: '20px'
  },
  logo: {
    flex: '1',
    textAlign: 'left',
    fontSize: '2em',
    marginLeft: '20px'
  },
  navList: {
    display: 'flex',
    justifyContent: 'flex-start',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    flex: '2',
    marginRight: '20px'
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s'
  },
  activeLink: {
    backgroundColor: '#4b3e24',
    fontWeight: 'bold',
  },
  hoverLink: {
    backgroundColor: '#573d28',
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header style={navStyles.header}>
      <div style={navStyles.logo}>
        Oliver Cappis
      </div>
      <ul style={navStyles.navList}>
        <li style={navStyles.navItem}>
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            style={{
              ...navStyles.navLink,
              ...(currentPage === 'About' ? navStyles.activeLink : {}),
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = navStyles.hoverLink.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
          >
            About Me
          </a>
        </li>
        <li style={navStyles.navItem}>
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            style={{
              ...navStyles.navLink,
              ...(currentPage === 'Projects' ? navStyles.activeLink : {}),
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = navStyles.hoverLink.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
          >
            Projects
          </a>
        </li>
        <li style={navStyles.navItem}>
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            style={{
              ...navStyles.navLink,
              ...(currentPage === 'Resume' ? navStyles.activeLink : {}),
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = navStyles.hoverLink.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
