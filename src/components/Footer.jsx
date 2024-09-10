import React from 'react';

const footerStyle = {
    backgroundColor: '#65532F',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    borderTop: '3px solid #4b3e24',
};

const footerContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
};

const linkHoverStyle = {
    textDecoration: 'underline',
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
                    onMouseOut={(e) => (e.target.style.textDecoration = linkStyle.textDecoration)}
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
                    onMouseOut={(e) => (e.target.style.textDecoration = linkStyle.textDecoration)}
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:youremail@example.com"
                    style={linkStyle}
                    onMouseOver={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
                    onMouseOut={(e) => (e.target.style.textDecoration = linkStyle.textDecoration)}
                >
                    Email
                </a>
            </div>
        </footer>
    );
};

export default Footer;
