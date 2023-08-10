import { useRoute } from '../../routes';
import './style.css';

export const Breadcrumb = () => {
  const { stack } = useRoute();

  return (
    <div className="container">
      {stack.map((route, index) => (
        <>
          <span className="link" key={index}>
            {route.title}
          </span>
          <span> / </span>
        </>
      ))}
    </div>
  );
};
