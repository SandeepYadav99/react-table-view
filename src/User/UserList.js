import React from "react";
import Input from "../components/Input/Input";
import styles from "./Style.module.css";
import useUserListHook from "./UserListHook";
import Button from "../components/Button/Button";
const UserList = ({
  editData,
  isSidePanelOpen,
  setTableData,
  setSidePanelOpen,
  onClose,
}) => {
  const { form, onChangeHandler, submitHandler, errorData } = useUserListHook({
    onClose,
    setSidePanelOpen,
    setTableData,
    editData,
    isSidePanelOpen,
  });

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
            type="number"
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
          <Button type="submit">Save</Button>
        </div>
      </div>
    </form>
  );
};

export default UserList;
