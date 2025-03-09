import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { registerThunk } from "../../redux/auth/operations";

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
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name:</span>
            <Field name='name'/>
          </label>
          <label>
            <span>Email:</span>
            <Field name='email'/>
          </label>
          <label>
            <span>Password:</span>
            <Field name='password' type='password'/>
          </label>
          <button type='submit'>Register</button>
           <p>You already have acc yet? <Link to='/login'>Get it!</Link>'</p>
        </Form>
      </Formik>
    </div>
  )
}

export default Register