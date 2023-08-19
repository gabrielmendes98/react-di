import { Loader } from 'src/components/Loader';
import style from './style.module.css';

export const DetailsLoader = () => (
  <Loader width={178} height={89} className={style.container}>
    <rect x="0" y="0" rx="0" ry="0" width="178" height="28" />
    <rect x="41" y="43" rx="0" ry="0" width="86" height="17" />
    <rect x="56" y="72" rx="0" ry="0" width="56" height="17" />
  </Loader>
);
