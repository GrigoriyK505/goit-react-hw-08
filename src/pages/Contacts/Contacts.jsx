import SearchBox from "../../components/SearchBox/SearchBox"
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'

const Contacts = () => {
  return (
    <div>
      <SearchBox/>
      <ContactForm/>
      <ContactList />
    </div>
  )
}

export default Contacts