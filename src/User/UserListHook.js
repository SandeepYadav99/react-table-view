import React, { useCallback, useEffect, useState } from "react";

const useUserListHook = ({
  setSidePanelOpen,
  editData,
  onClose,
  setTableData,
}) => {
  const [errorData, setErrorData] = useState({});
  const [form, setForm] = useState({
    name: "",
    age: "",
    city: "",
    id: null,
  });
 
  useEffect(() => {
    if (!editData) return;
    setForm((prev) => {
      return {
        ...prev,
        name: editData.name,
        age: editData.age,
        city: editData.city,
        id: editData.id,
      };
    });
  }, [editData]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const checkFormValidation = useCallback(() => {
    const errors = { ...errorData };
    let required = ["name", "age", "city"];
    required.forEach((val) => {
      if (
        !form?.[val] ||
        (Array.isArray(form?.[val]) && form?.[val].length === 0)
      ) {
        errors[val] = true;
      } else if (["code"].indexOf(val) < 0) {
        delete errors[val];
      }
    });

    Object.keys(errors).forEach((key) => {
      if (!errors[key]) {
        delete errors[key];
      }
    });

    return errors;
  }, [form, errorData]);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const errors = checkFormValidation();
      if (Object.keys(errors).length > 0) {
        setErrorData(errors);
        return;
      }
      setSidePanelOpen(true);
     
      if (editData?.id) {
        setTableData((prevData) =>
          prevData.map((item) =>
            item.id === form.id ? { ...item, ...form } : item
          )
        );
        
      } else {
      
        setTableData((prev) => [...prev, { ...form, id: new Date() }]);
      }
      onClose()
      setForm((prev) => {
        return {
          ...prev,
          name: "",
          age: "",
          city: "",
        };
      });
    },
    [checkFormValidation, form, setErrorData, setForm, setTableData, onClose]
  );

  return {
    form,
    onChangeHandler,
    submitHandler,
    errorData,
  };
};

export default useUserListHook;
