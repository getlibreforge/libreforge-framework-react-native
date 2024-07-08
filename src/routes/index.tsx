import { IPages } from "@libreforge/libreforge-framework-shared";
import { ReactElement, useContext } from "react";
import ApplicationPage from "../ApplicationPage";
import { InversifyContainerProviderContext } from "@libreforge/libreforge-framework";

type RoutesProps = {
  stack: any;
  pages: IPages;
  wrapperComponent?: ReactElement;
  wrapperContainer?: ReactElement;
}

export const Routes: React.FC<RoutesProps> = ({ stack, pages, wrapperComponent, wrapperContainer }) => {

  const defaultPage = "home";
  const container = useContext(InversifyContainerProviderContext);

  return (
    <stack.Screen name="home" component={<ApplicationPage pages={pages} overridePageName={defaultPage} wrapperComponent={wrapperComponent} wrapperContainer={wrapperContainer} />} />
  )

    // { path: '/', element: <ApplicationPage pages={pages} overridePageName={defaultPage} wrapperComponent={wrapperComponent} wrapperContainer={wrapperContainer} /> },
    // { path: '/:pageName', element: <ApplicationPage pages={pages} wrapperComponent={wrapperComponent} wrapperContainer={wrapperContainer} /> },
  ;
}
