import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialValues: T) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormValues({ ...initialValues });
  };

  const isValidEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formValues,
    isValidEmail,
    resetForm,
    handleInputChange
  };
};
