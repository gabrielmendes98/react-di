/**
 * @param {Object} props
 * @param {PersonDetails} props.details
 * @returns {React.ReactElement}
 */
export const Details = ({ details }) => (
  <>
    <h2>Person details:</h2>
    <p>Name: {details.name}</p>
    <p>Age: {details.age}</p>
  </>
);
