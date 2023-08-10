import { Button } from '../../../components';
import { useRoute } from '../../../routes';
import './style.css';

export const Header = () => {
  const { push, goBack } = useRoute();

  return (
    <div className="container--home">
      <h1 onClick={() => push('/', { newStack: true })} className="logo">
        HOME LOGO
      </h1>
      <Button onClick={() => goBack()}>back</Button>
    </div>
  );
};
