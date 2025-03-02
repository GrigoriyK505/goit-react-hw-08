import { Field, Form, Formik } from "formik"

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
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
        </Form>
      </Formik>
    </div>
  )
}

export default Login