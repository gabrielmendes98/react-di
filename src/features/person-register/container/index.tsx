import { Button } from '../../../components';
import { useRoute } from '../../../routes/useRoute';

export const PersonRegisterContainer = () => {
  const { goBack, push } = useRoute();

  const handleBack = () => {
    goBack();
  };

  return (
    <div>
      <Button onClick={handleBack}>back</Button>
      <Button onClick={() => push('/nested-1')}>nest more</Button>
      <h1>PersonRegisterContainer</h1>
    </div>
  );
};
