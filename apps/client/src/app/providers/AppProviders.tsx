import { Provider } from 'react-redux';
import { store } from './theme/store';
import { ThemeProvider } from './theme/ThemeProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};
