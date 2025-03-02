import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
    const contactList = useSelector(selectFilteredContacts) 
    
    return (
        <ul className={s.list}>
            {contactList.map(contact => (
                <Contact
                    key={contact.id} contactItem={contact} />
            ))}
        </ul>
    );
}

export default ContactList;