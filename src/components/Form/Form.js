import React from 'react';
import './Form.css';
import useForm from '../../function/useForm';
import validation from '../../function/validation';

const Form = () => {
  const { handleChange, values, handleSubmit, errors, data } =
    useForm(validation);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Test form and validation</h3>

        <div
          className={
            errors.firstname && values.firstname.length === 0
              ? 'validate-input'
              : ''
          }
        >
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="Please fill first name"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && (
            <p className="text-validate">{errors.firstname}</p>
          )}
        </div>

        <div
          className={
            errors.lastname && values.lastname.length === 0
              ? 'validate-input'
              : ''
          }
        >
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Please fill last name"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && (
            <p className="text-validate">{errors.lastname}</p>
          )}
        </div>

        <div
          className={
            errors.email && values.email.length === 0 ? 'validate-input' : ''
          }
        >
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="Please fill e-mail"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-validate">{errors.email}</p>}
        </div>

        <div
          className={
            errors.password && values.password.length === 0
              ? 'validate-input'
              : ''
          }
        >
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Please fill password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-validate">{errors.password}</p>
          )}
        </div>

        <div
          className={
            errors.passwordValidate && values.passwordValidate.length === 0
              ? 'validate-input'
              : ''
          }
        >
          <label>Verify Password</label>
          <input
            type="password"
            name="passwordValidate"
            placeholder="Please fill verify password"
            value={values.passwordValidate}
            onChange={handleChange}
          />
          {errors.passwordValidate && (
            <p className="text-validate">{errors.passwordValidate}</p>
          )}
        </div>

        <div
          className={
            errors.gender && values.gender.length === 0 ? 'validate-input' : ''
          }
        >
          <label>Gender</label>
          <select
            name="gender"
            defaultValue={values.gender}
            onChange={handleChange}
          >
            <option value={values.gender} disabled>
              Please select a gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="text-validate">{errors.gender}</p>}
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>

        {data.firstname &&
        data.lastname &&
        data.email &&
        data.gender &&
        data.password &&
        data.passwordValidate &&
        Object.keys(errors).length === 0 ? (
          <div className="result">
            <b>Result</b>
            <p>First Name : {data.firstname}</p>
            <p>Last Name : {data.lastname}</p>
            <p>E-mail : {data.email}</p>
            <p>Gender : {data.gender}</p>
          </div>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

Form.propTypes = {};

export default Form;
