import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: 'Nur Naturals Inc.',
    instagramUrl: '',
    facebookUrl: '',
  });

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/company-info');
        setCompanyInfo(response.data);
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    };

    fetchCompanyInfo();
  }, []);

  return (
    <footer style={styles.footer}>
      <p style={styles.companyName}>{companyInfo.companyName}</p>
      <div style={styles.socialIcons}>
        <a href={companyInfo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={styles.iconLink}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={companyInfo.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={styles.iconLink}>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  companyName: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconLink: {
    color: '#fff',
    margin: '0 10px',
    fontSize: '24px',
    textDecoration: 'none',
  },
};

export default Footer;