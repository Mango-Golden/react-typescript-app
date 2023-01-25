/**
 * @author mango
 * @description react app instance
 */

import Routers from '@routers';
import useTheme from '@hooks/theme';
import { SystemTheme } from '@constants/enums/system';

import "normalize.css";

export default function App() {
  useTheme(SystemTheme.Light);

  return <Routers/>;
};
