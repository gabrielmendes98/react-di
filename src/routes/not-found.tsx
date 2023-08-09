import { useRoute } from '.';

export const Notfound = () => {
  const { goBack } = useRoute();
  return (
    <div>
      <h1>Not found</h1>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};
