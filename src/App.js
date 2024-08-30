import React, { useState } from "react";
import CustomTable from "./Table/CustomTable";
import styles from "./App.module.css";
import SidePanel from "./components/SidePanel/SidePanel";
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

  const openSidePanel = () => {
    setSidePanelOpen(true);
  };

  const closeSidePanel = () => {
    setSidePanelOpen(false);
  };

  return (
    <main className={styles.main}>
      <section>
        <div className={styles.tableAction}>
          <button className={styles.addButton} onClick={openSidePanel}>
            Add+
          </button>
        </div>
        <CustomTable columns={columns} data={data} />
      </section>
      <SidePanel isOpen={isSidePanelOpen} onClose={closeSidePanel}>
        <h2>Add New Entry</h2>
      </SidePanel>
    </main>
  );
};

export default App;
