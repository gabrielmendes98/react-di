import { useRoute } from '.';

export const Notfound = () => {
  const { goBack } = useRoute();

  const handleBack = () => {
    goBack();
  };

  return (
    <div>
      <h1>Not found</h1>
      <button onClick={handleBack}>Go back</button>
    </div>
  );
};
