import { Fragment } from 'react';
import './style.css';
import { useRoute } from 'src/routes/useRoute';

export const Breadcrumb = () => {
  const { currentStack, goBack } = useRoute();

  return (
    <div className="breadcrumb-container">
      {currentStack.map((route, index) => (
        <Fragment key={index}>
          <span className="breadcrumb-link" onClick={() => goBack(route.path)}>
            {route.title}
          </span>
          <span> / </span>
        </Fragment>
      ))}
    </div>
  );
};
