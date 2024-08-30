import React from "react";
import styles from "./CustomTable.module.css"
const CustomTable = ({ columns, data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th className={styles.th} key={index}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td className={styles.td} key={colIndex}>{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
