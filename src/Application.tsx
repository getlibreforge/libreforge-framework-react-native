import { ReactElement } from 'react';
import { IPages } from "@libreforge/libreforge-framework-shared"
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
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        {
          Object.keys(pages).map(key => {
            return <Stack.Screen key={key} name={key} >
                    {(props) => <ApplicationPage {...props} pages={pages} overridePageName={key} wrapperComponent={wrapperComponent} wrapperContainer={wrapperContainer} />}
                  </Stack.Screen>
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};
