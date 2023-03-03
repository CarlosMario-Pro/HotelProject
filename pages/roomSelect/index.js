import React, { useState } from 'react';
import styles from "./roomSelect.module.scss";


const roomSelect = () => {
  const [selectedButton, setSelectedButton] = useState("");

    const handleButtonClick = (event) => {
        setSelectedButton(event.target.textContent);
    };


    return (
        <div className={styles.containerButtons}>
            <button className={`${styles.buttons} ${selectedButton === "Estándar Doble" ? styles.selectedButton : ""}`} onClick={handleButtonClick}>Estándar Doble</button>
            <button className={`${styles.buttons} ${selectedButton === "Doble Superior" ? styles.selectedButton : ""}`} onClick={handleButtonClick}>Doble Superior</button>
            <button className={`${styles.buttons} ${selectedButton === "Twin Superior" ? styles.selectedButton : ""}`} onClick={handleButtonClick}>Twin Superior</button>
            <button className={`${styles.buttons} ${selectedButton === "Junior Suite" ? styles.selectedButton : ""}`} onClick={handleButtonClick}>Junior Suite</button>
            <button className={`${styles.buttons} ${selectedButton === "Múltiple" ? styles.selectedButton : ""}`} onClick={handleButtonClick}>Múltiple</button>
        </div>
    );
};

export default roomSelect;