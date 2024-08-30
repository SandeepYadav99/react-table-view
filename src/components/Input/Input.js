import React from "react";
import styles from './Input.module.css'

const Input = ({ errorText, type="text", ...rest }) => {

  return (
    <>
      <input type={type}  className={errorText ? styles['input-error'] : styles['input-filed']} {...rest} />
      {/* {errorText && <p className={styles.errorMessage}>{errorText}</p>} */}
    </>
  );
};

export default Input;