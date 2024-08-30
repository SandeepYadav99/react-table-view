import React from 'react';
import styles from './SidePanel.module.css'; 

const SidePanel = ({ isOpen, onClose, children }) => {
    return (
        <div className={`${styles.sidePanel} ${isOpen ? styles.open : ''}`}>
            <button className={styles.closeButton} onClick={onClose}>X</button>
            {children}
        </div>
    );
};

export default SidePanel;
