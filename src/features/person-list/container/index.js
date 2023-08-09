import { Details } from '../presenters/details';
import { List } from '../presenters/list';
import { usePersonList as _usePersonList } from '../hooks/use-person-list';
import { usePersonDetails as _usePersonDetails } from '../hooks/use-person-details';
import { getPersonDetails, getPersonList } from '../data';
import { useRoute } from '../../../routes';
import { Button } from '../../../components';

/**
 * @param {Object} props
 * @param {import('../hooks/use-person-list').UsePersonList} props.usePersonList
 * @param {import('../hooks/use-person-details').UsePersonDetails} props.usePersonDetails
 * @returns {React.ReactElement}
 */
export const PersonListContainer = ({ usePersonList, usePersonDetails }) => {
  const { loadingPersonList, personList } = usePersonList(getPersonList);
  const { loadingPersonDetails, personDetails, showPersonDetails } =
    usePersonDetails(getPersonDetails);

  const { push } = useRoute();

  return (
    <>
      <Button onClick={() => push('/register')}>register employee</Button>
      <Button onClick={() => push('/dfkjnwedkjewqkdqewkk')}>
        unregistered route
      </Button>
      <h1>Person container</h1>
      {personList && !loadingPersonList && (
        <List list={personList} handleShowDetails={showPersonDetails} />
      )}
      {loadingPersonList && <div>Loading person list...</div>}
      {personDetails && !loadingPersonDetails && (
        <Details details={personDetails} />
      )}
      {loadingPersonDetails && <div>Loading person details...</div>}
    </>
  );
};

PersonListContainer.defaultProps = {
  usePersonList: _usePersonList,
  usePersonDetails: _usePersonDetails,
};
