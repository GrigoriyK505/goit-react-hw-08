import SearchBox from "../../components/SearchBox/SearchBox"
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import Modal from '../../components/Modal/Modal'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contacts = () => {
  const [contactToDelete, setContactToDelete] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = (contactId) => {
    setContactToDelete(contactId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setContactToDelete(null)
  };

  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
      closeModal();
    }
  }
  return (
    <div>
      <SearchBox/>
      <ContactForm/>
      <ContactList openModal={openModal}/>
      <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmDelete} />
    </div>
  )
}

export default Contacts