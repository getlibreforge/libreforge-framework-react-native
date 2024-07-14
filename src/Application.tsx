import { ReactElement, useContext, useState } from 'react';
import { IPages } from "@libreforge/libreforge-framework-shared"
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApplicationPage from './ApplicationPage';
import { NavigationCurrentPageProviderContext } from '@libreforge/libreforge-framework';

const Stack = createNativeStackNavigator();

type ApplicationProps = {
  pages: IPages;
  wrapperComponent?: ReactElement; 
  wrapperContainer?: ReactElement;
  routeToUrl: string | undefined;
}

export const Application = (props: ApplicationProps) => {
  const { pages, wrapperComponent, wrapperContainer } = props;

  const { setCurrentRoute } = useContext(NavigationCurrentPageProviderContext);
  const navigationRef = createNavigationContainerRef();

  return (
    <NavigationContainer ref={ navigationRef }
      onReady={() => {}}
      onStateChange={() => {
        setCurrentRoute(navigationRef.getCurrentRoute()?.name)
      }}
    >
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        {
          Object.keys(pages).map(key => {
            return <Stack.Screen key={key} name={key} >
                    {(props) => <ApplicationPage {...props} pageName={key} pages={pages} 
                      wrapperComponent={wrapperComponent} wrapperContainer={wrapperContainer} />}
                  </Stack.Screen>
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};
