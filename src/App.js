import React, { useState } from "react";

import styles from "./App.module.css";
import SidePanel from "./components/SidePanel/SidePanel";
import UserList from "./User/UserList";
import CustomTable from "./components/Table/CustomTable";
const columns = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "City", accessor: "city" },
];

const data = [
  { name: "John Doe", age: 28, city: "New York" },
  { name: "Jane Smith", age: 34, city: "San Francisco" },
  { name: "Sam Green", age: 22, city: "Chicago" },
];

const App = () => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [tableData, setTableData] = useState([...data]);

  const openSidePanel = () => {
    setSidePanelOpen(true);
  };

  const closeSidePanel = () => {
    setSidePanelOpen(false);
  };
  const tableChangeHandler = (newTableData) => {
    setTableData((prevData) => [...prevData, newTableData]);
  };

  return (
    <main className={styles.main}>
      <section>
        <div className={styles.tableAction}>
          <button className={styles.addButton} onClick={openSidePanel}>
            Add+
          </button>
        </div>
        <CustomTable columns={columns} data={tableData} />
      </section>
      <SidePanel isOpen={isSidePanelOpen} onClose={closeSidePanel}>
        <h2>Add New Entry</h2>
        <UserList tableChange={tableChangeHandler} />
      </SidePanel>
    </main>
  );
};

export default App;
