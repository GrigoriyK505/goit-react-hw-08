import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import s from './Login.module.css'

const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate('/contacts', {replace: true});
      })
      .catch(() => toast.error('Invalid data'));
    options.resetForm();
    
  }
  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span className={s.label}>Email:</span>
            <Field className={s.input} name='email'/>
          </label>
          <label>
            <span className={s.label}>Password:</span>
            <Field className={s.input} name='password' type='password'/>
          </label>
          <button className={s.login} type='submit'>Login</button>
          <p className={s.qw}>You do not have acc yet? <Link to='/register'>Get it!</Link></p>
        </Form>
      </Formik>
    </div>
  )
}

export default Login