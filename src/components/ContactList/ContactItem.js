import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
export default function ContactItem({ contact }) {
  return (
    <li className={s.item}>
      <span>
        {contact.name}: <span>{contact.phone}</span>
      </span>
      <IconButton aria-label="delete" id={contact.id}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    id: PropTypes.string,
  }),
};
