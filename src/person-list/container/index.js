import { Details } from '../presentation/details';
import { List } from '../presentation/list';
import { usePersonList as _usePersonList } from '../hooks/use-person-list';
import { usePersonDetails as _usePersonDetails } from '../hooks/use-person-details';

export const PersonListContainer = ({ usePersonList, usePersonDetails }) => {
  const { loadingPersonList, personList } = usePersonList();
  const { loadingPersonDetails, personDetails, showPersonDetails } =
    usePersonDetails();

  return (
    <>
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
