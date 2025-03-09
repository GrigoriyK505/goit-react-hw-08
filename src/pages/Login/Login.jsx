import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Email:</span>
            <Field name='email'/>
          </label>
          <label>
            <span>Password:</span>
            <Field name='password' type='password'/>
          </label>
          <button type='submit'>Login</button>
          <p>You do not have acc yet? <Link to='/register'>Get it!</Link></p>
        </Form>
      </Formik>
    </div>
  )
}

export default Login