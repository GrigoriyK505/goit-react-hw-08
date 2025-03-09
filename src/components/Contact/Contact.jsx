import s from './Contact.module.css'



const Contact = ({contactItem, openModal}) => {
    const { name, number, id } = contactItem;
    
    return (
        <li className={s.item}>
            <div className={s.name}>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            </div>
            <button onClick={() => openModal(id)} className={s.button}>Delete</button>
        </li>
    );
};

export default Contact;