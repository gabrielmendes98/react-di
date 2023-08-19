import ContentLoader from 'react-content-loader';

export const Loader = ({
  children,
  width,
  height,
  viewBox,
  className,
}: Props) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={viewBox || `0 0 ${width} ${height}`}
    className={className}
  >
    {children}
  </ContentLoader>
);

type Props = {
  width: number | string;
  height: number | string;
  children: React.ReactNode;
  viewBox?: string;
  className?: string;
};
