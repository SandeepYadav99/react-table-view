import React from 'react'
import CustomTable from './Table/CustomTable';
import styles from "./App.module.css"
const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Age', accessor: 'age' },
  { header: 'City', accessor: 'city' }
];

const data = [
  { name: 'John Doe', age: 28, city: 'New York' },
  { name: 'Jane Smith', age: 34, city: 'San Francisco' },
  { name: 'Sam Green', age: 22, city: 'Chicago' }
];

const App = () => {
  return (
    <main className={styles.main}>

      <CustomTable columns={columns} data={data} />
    </main>
  )
}

export default App