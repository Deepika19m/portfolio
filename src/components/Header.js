import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.nameSection}>
        <h1 style={styles.title}>Welcome to My Portfolio</h1>
        <h2 style={styles.name}>DEEPIKA M</h2>
        <p style={styles.details}>BTech Aids | AI Developer | Problem Solver</p>
      </div>

      {/* Navigation links in horizontal format */}
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#projects" style={styles.navLink}>Projects</a></li> {/* Added Projects Link */}
          <li style={styles.navItem}><a href="#certifications" style={styles.navLink}>Certifications</a></li>
          <li style={styles.navItem}><a href="#achievements" style={styles.navLink}>Achievements</a></li>
          <li style={styles.navItem}><a href="#skills" style={styles.navLink}>Skills</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#B19CD9', // Light purple background
    color: 'white',
    padding: '50px 20px', // Padding for spacing
    textAlign: 'center',
  },
  nameSection: {
    textAlign: 'center',
  },
  title: {
    fontSize: '4rem', // Large font size for the title
    fontWeight: 'bold',
    margin: '0',
  },
  name: {
    fontSize: '3rem', // Large font size for your name
    marginTop: '20px',
  },
  details: {
    fontSize: '1.5rem',
    marginTop: '10px',
    color: '#ddd',
  },
  navbar: {
    marginTop: '30px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex', // Display items horizontally
    justifyContent: 'center', // Center the navigation items
    padding: '0',
    margin: '0',
  },
  navItem: {
    margin: '0 15px', // Space between each navigation link
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '1.2rem',
    color: 'white',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#ff7f50', // Hover effect color
  },
};

export default Header;
