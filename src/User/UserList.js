import React from "react";
import Input from "../components/Input/Input";
import styles from "./Style.module.css";
import useUserListHook from "./UserListHook";
const UserList = ({tableChange}) => {
  const { form, onChangeHandler, submitHandler, errorData } = useUserListHook({tableChange});
 
  return (
    <form onSubmit={submitHandler}>
      <div className="formFlex">
        <div className="formGroup">
          <Input
            placeholder="Name"
            name="name"
            errorText={errorData.name}
            value={form?.name}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="formFlex">
        <div className="formGroup">
          <Input
            placeholder="Age"
            name="age"
            errorText={errorData.age}
            value={form?.age}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="formFlex">
        <div className="formGroup">
          <Input
            placeholder="City"
            name="city"
            errorText={errorData.city}
            value={form?.city}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="formGroup">
        <div className={styles.actionButton}>
          <button type="submit" >Save</button>
        </div>
      </div>
    </form>
  );
};

export default UserList;
