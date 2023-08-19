import { Button } from 'src/components';
import style from './style.module.css';

/**
 * @param {Object} props
 * @param {PersonList} props.list
 * @param {function} props.handleShowDetails
 * @returns {React.ReactElement}
 */
export const List = ({ list, handleShowDetails }) => (
  <ul className={style.container}>
    {list.map(person => (
      <li key={person.id}>
        {person.name}{' '}
        <Button onClick={() => handleShowDetails(person.id)}>
          show details
        </Button>
      </li>
    ))}
  </ul>
);
