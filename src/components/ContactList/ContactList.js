import ContactItem from './ContactItem';
import s from './ContactList.module.css';
import { useGetContactsQuery } from '../../services/mockAPI';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const filter = useSelector(state => state.filter);

  const { data, isFetching } = useGetContactsQuery();

  return (
    <>
      {isFetching && <p>Fetching...</p>}
      <h2 className={s.title}>Contacts</h2>
      {data && !isFetching && (
        <ul>
          {data
            .filter(contact =>
              contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
            )
            .map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
        </ul>
      )}
    </>
  );
}
