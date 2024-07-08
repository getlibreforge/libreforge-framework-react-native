import { ReactElement } from 'react';
import { IPages } from "@libreforge/libreforge-framework-shared"
import { Routes } from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApplicationPage from './ApplicationPage';

const Stack = createNativeStackNavigator();

type ApplicationProps = {
  pages: IPages;
  wrapperComponent?: ReactElement; 
  wrapperContainer?: ReactElement;
  routeToUrl: string | undefined;
}

export const Application = (props: ApplicationProps) => {
  const { pages, wrapperComponent, wrapperContainer } = props;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" >
          {(props) => <ApplicationPage {...props} pages={pages} overridePageName={'home'} wrapperComponent={wrapperComponent} wrapperContainer={wrapperContainer} />}
        </Stack.Screen>

        {/* <Routes stack={Stack} pages={pages} wrapperComponent={wrapperComponent} wrapperContainer={wrapperContainer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
