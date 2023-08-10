import { Button } from '../../../components';
import { useRoute } from '../../../routes/useRoute';

export const NestedOne = () => {
  const { goBack, push } = useRoute();

  const handleBack = () => {
    goBack();
  };

  return (
    <div>
      <Button onClick={handleBack}>back</Button>
      <Button onClick={() => push('/nested-2')}>nest more</Button>
      <h1>NestedOne</h1>
    </div>
  );
};
