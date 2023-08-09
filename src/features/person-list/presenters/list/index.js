import { Button } from "../../../../components";

/**
 * @param {Object} props
 * @param {PersonList} props.list
 * @param {function} props.handleShowDetails
 * @returns {React.ReactElement}
 */
export const List = ({ list, handleShowDetails }) => (
  <ul>
    {list.map((person) => (
      <li key={person.id}>
        {person.name}{" "}
        <Button onClick={() => handleShowDetails(person.id)}>
          show details
        </Button>
      </li>
    ))}
  </ul>
);
