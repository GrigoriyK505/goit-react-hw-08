import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { registerThunk } from "../../redux/auth/operations";
import s from './Register.module.css'

const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    name: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };

    
  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}> 
          <label>
            <span className={s.label}>Name:</span>
            <Field className={s.input} name='name'/>
          </label>
          <label>
            <span className={s.label}>Email:</span>
            <Field className={s.input} name='email'/>
          </label>
          <label>
            <span className={s.label}>Password:</span>
            <Field className={s.input} name='password' type='password'/>
          </label>
          <button className={s.login} type='submit'>Register</button>
           <p className={s.qw}>You already have acc yet? <Link to='/login'>Get it!</Link></p>
        </Form>
      </Formik>
    </div>
  )
}

export default Register