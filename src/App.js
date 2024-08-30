import React, { useState } from "react";

import styles from "./App.module.css";
import SidePanel from "./components/SidePanel/SidePanel";
import UserList from "./User/UserList";
import CustomTable from "./components/Table/CustomTable";
import Button from "./components/Button/Button";
const columns = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "City", accessor: "city" },
  { header: "Action", accessor: "action" },
];

const data = [
  { name: "John Doe", age: 28, city: "New York" , id:1},
  { name: "Jane Smith", age: 34, city: "San Francisco" , id:2},
  { name: "Sam Green", age: 22, city: "Chicago" , id:3},
];

const App = () => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [tableData, setTableData] = useState([...data]);
  const [editData, setEditData] = useState();
 
  const openSidePanel = () => {
    setSidePanelOpen(true);
  };

  const closeSidePanel = () => {
    setSidePanelOpen(false);
  };
  const deleteHandler = (newTableData) => {
    const deletedItem = tableData.filter((tData)=>tData.id !== newTableData);
    setTableData(deletedItem)
   
  };

  const openSidePanelHandler = (id) => {
    console.log(id);
    const editValue = tableData.find((tv) => tv.id === id);
    setEditData(editValue);
  };
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.tableAction}>
          <Button onClick={openSidePanel}>Add+</Button>
        </div>
        <CustomTable
          columns={columns}
          data={tableData}
          onClick={openSidePanel}
          openSidePanel={openSidePanelHandler}
          deleteHandler={deleteHandler}
        />
      </section>
      <SidePanel isOpen={isSidePanelOpen} onClose={closeSidePanel}>
        <h2>Add New Entry</h2>
        <UserList setSidePanelOpen={setSidePanelOpen} setTableData={setTableData} editData={editData} isSidePanelOpen={isSidePanelOpen}/>
      </SidePanel>
    </main>
  );
};

export default App;
