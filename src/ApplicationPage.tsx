import { IPages } from "@libreforge/libreforge-framework-shared";
import { ReactElement, useContext, useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InversifyContainerProviderContext, NavigationCurrentPageProviderContext, getSharedState } from "@libreforge/libreforge-framework";
import ChildComponentRenderer from "@libreforge/libreforge-framework/dist/components/ChildComponentRenderer";

const PAGE_NAME_NOT_FOUND = "not_found";

type ApplicationPageProps = {
  pageName: string;
  pages: IPages;
  wrapperComponent?: ReactElement;
  wrapperContainer?: ReactElement;
}

const ApplicationPage = (props: ApplicationPageProps) => {

  const { currentRoute } = useContext(NavigationCurrentPageProviderContext);
  console.warn(`Current page/route is ${currentRoute}`);

  const dispatch = useDispatch();
  // const { pageName } = useParams()
  // const targetPageName = !!overridePageName ? overridePageName: (pageName || PAGE_NAME_NOT_FOUND);
  // const targetPageName = !!props.overridePageName ? props.overridePageName: "home";

  const pageComponents = props.pages[props.pageName];
  const rootChildren = !!pageComponents ? pageComponents.root.children: []

  if (props.pageName === currentRoute) {
    return rootChildren.map((name: string) => (
      <ChildComponentRenderer key={name} overridenComponentPageState={undefined} collectionRefIdx={undefined}
        designMode={false} designModeInteractivityDisabled={false}
        componentName={name} pageComponents={pageComponents} pages={props.pages}
        wrapperComponent={props.wrapperComponent} wrapperContainer={props.wrapperContainer}
      />
    ));
  } else {
    return <></>
  }
};

export default ApplicationPage;
