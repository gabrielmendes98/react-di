import { Fragment } from 'react';
import { useRoute } from 'src/routes/useRoute';
import './style.css';

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
