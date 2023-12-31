import { Button } from 'src/components';
import { useRoute } from 'src/routes/useRoute';
import './style.css';

export const Header = () => {
  const { push, goBack } = useRoute();

  return (
    <div className="home-container">
      <h1 onClick={() => push('/', { newStack: true })} className="home-logo">
        HOME LOGO
      </h1>
      <Button onClick={() => goBack()}>back</Button>
    </div>
  );
};
