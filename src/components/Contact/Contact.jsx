import { deleteContact } from '../../redux/contacts/operations';
import s from './Contact.module.css'
import { useDispatch } from 'react-redux';



const Contact = ({contactItem}) => {
    const dispatch = useDispatch();
     const { name, number } = contactItem;

    return (
        <li className={s.item}>
            <p>{name}: {number}</p>
            <button onClick={() => dispatch(deleteContact(contactItem.id))} className={s.button}>Delete</button>
        </li>
    );
};

export default Contact;