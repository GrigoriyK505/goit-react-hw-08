import { Field, Form, Formik, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';


    
const ContactForm = () => {
    const dispatch = useDispatch();
    const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
    const onlyNumbers = /^[0-9]+$/;
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Min 3 letters')
            .max(89, 'Max 89 numbers')
            .required('Required')
            .matches(onlyLetters, 'Only letters'),
        number: Yup.string()
            .min(3, 'Min 3 letters')
            .max(89, 'Max 89 numbers')
            .required('Required').matches(onlyNumbers, 'Only numbers')
    });

    const initialValues = { name: '', number: '' };
    
    const onSubmit = (values, options) => {
        const newContact = {
            name: values.name,
            number: values.number,
            id: crypto.randomUUID(),
        };
        dispatch(addContact(newContact));
        options.resetForm();
    };

    return (
        <section className={s.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
             >
                <Form className={s.form}>
                    <div className={s.box}>
                        <label>Name</label>
                        <Field className={s.input} name="name"></Field>
                        <ErrorMessage className={s.error} component='p' name="name"/> 
                    </div>
                    <div className={s.box}>
                        <label>Number</label>
                        <Field className={s.input} name="number"></Field>
                        <ErrorMessage className={s.error} component='p' name="number"/>
                    </div>
                    <button className={s.button} type='submit'>Add contact</button>
                </Form>
            </Formik>
        </section>
    );
}

export default ContactForm;