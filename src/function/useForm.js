import { useState } from 'react';

const useForm = (validation) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordValidate: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setData(values);
  };

  return { handleChange, values, handleSubmit, errors, data };
};

export default useForm;
