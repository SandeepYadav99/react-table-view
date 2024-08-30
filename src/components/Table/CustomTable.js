import React from "react";
import styles from "./CustomTable.module.css";
import Button from "../Button/Button";
const CustomTable = ({ columns, data, openSidePanel , onClick, deleteHandler}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th className={styles.th} key={index}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td className={styles.td} key={colIndex}>
                {col.accessor === "action" ? (
                  <div className={styles.tAction}>
                    <Button onClick={()=>{openSidePanel(row.id);onClick()}}>Edit</Button>
                    <Button onClick={()=>deleteHandler(row.id)}>Delete</Button>
                  </div>
                ) : (
                  row[col.accessor]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
