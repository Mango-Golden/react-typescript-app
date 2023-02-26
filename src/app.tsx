/**
 * @author mango
 * @description react app instance
 */
import { Fragment } from 'react';
import { QueryClientProvider } from 'react-query';

import Routers from '@routers';
import useTheme from '@hooks/theme';
import { SystemTheme } from '@constants/enums/system';
import useNewQueryClient from '@hooks/new.query.client';

import 'normalize.css';

export const Configure: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  useTheme(SystemTheme.Light);

  return <Fragment>{children}</Fragment>;
};

export default function App() {
  const client = useNewQueryClient();

  return (
    <QueryClientProvider client={client}>
      <Configure>
        <Routers/>
      </Configure>
    </QueryClientProvider>
  );
}
