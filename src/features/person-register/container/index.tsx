import { Button } from '../../../components';
import { useRoute } from '../../../routes';

export const PersonRegisterContainer = () => {
  const { goBack } = useRoute();

  return (
    <div>
      <Button onClick={goBack}>back</Button>
      <h1>PersonRegisterContainer</h1>
    </div>
  );
};
