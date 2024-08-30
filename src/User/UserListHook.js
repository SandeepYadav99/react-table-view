import React, { useCallback, useState } from "react";

const useUserListHook = ({ tableChange }) => {
  const [errorData, setErrorData] = useState({});
  const [form, setForm] = useState({
    name: "",
    age: "",
    city: "",
  });

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
      tableChange(form);

      setForm((prev) => {
        return {
          ...prev,
          name: "",
          age: "",
          city: "",
        };
      });
    },
    [checkFormValidation, form, setErrorData, setForm]
  );

  return {
    form,
    onChangeHandler,
    submitHandler,
    errorData,
  };
};

export default useUserListHook;
