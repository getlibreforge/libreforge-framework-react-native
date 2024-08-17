import React, { ComponentClass, FunctionComponent, ReactElement, forwardRef, memo, useContext } from 'react';
import { IComponents, IPages } from '@libreforge/libreforge-framework-shared';
import { InversifyContainerProviderContext, cleanupCustomComponentProps, usePropsOverrideByComponentRef } from '@libreforge/libreforge-framework';
import ChildComponentRenderer from '@libreforge/libreforge-framework/dist/components/ChildComponentRenderer';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { LocalImageManager, SYMBOL_LOCAL_IMAGE_MANAGER } from '../../service';

type ContainerComponentProps = {
  componentId: string;
  overridenComponentPageState: any;
  collectionRefIdx: number | undefined;
  children: string[];
  pageComponents: IComponents;
  pages: IPages;
  designMode: boolean;
  designModeInteractivityDisabled: boolean,
  wrapperComponent?: ReactElement; wrapperContainer?: ReactElement;
}

const getStyles = (props: any) => StyleSheet.create({
  containerRow: {
    flex: props.flex || 1,
    alignItems: props.alignItems || 'flex-start',
    justifyContent: props.justifyContent || 'flex-start',
    gap: props.gaps || 24,
    ...cleanupCustomComponentProps(props, { key: 'key', 'fontSize': 'fontSize' })
  },
  image: {
    flex: 1,
    justifyContent: props.justifyContent || 'flex-start',
    width: '100%'
  }
});

const ContainerComponent = forwardRef((props: ContainerComponentProps, ref) => {
  const { componentId, overridenComponentPageState, collectionRefIdx, children, pageComponents, pages, designMode, designModeInteractivityDisabled, wrapperComponent, wrapperContainer } = props;

  const container = useContext(InversifyContainerProviderContext);
  const localImageManager = container.get<LocalImageManager>(SYMBOL_LOCAL_IMAGE_MANAGER);

  const overridenProps: any = usePropsOverrideByComponentRef(props.componentId, props, props.designMode);
  const styles = getStyles(overridenProps);

  const component = pageComponents[componentId];
  const backgroundImage = overridenProps['backgroundImage'];

  // const formErrorProps = { ...useFormControlError(type, children, pageComponents, designMode, props), pos: 'relative', ref };
  // const sharedErrorProps = useFormControlSharedError(type, children, pageComponents, designMode, formErrorProps);
  // const cleanedProps = cleanupCustomComponentProps(overridenProps);  

  const childContent = children.map((key: string) => {
    return (
      <ChildComponentRenderer key={key} componentName={key} overridenComponentPageState={overridenComponentPageState}
        designMode={designMode} designModeInteractivityDisabled={designModeInteractivityDisabled}
        pageComponents={pageComponents} collectionRefIdx={collectionRefIdx} 
        pages={pages} wrapperComponent={wrapperComponent} wrapperContainer={wrapperContainer} />        
    )
  });

  return (
    <View style={styles.containerRow}>
      {!!backgroundImage && (
        <ImageBackground source={ localImageManager.getImageSource(backgroundImage) } resizeMode="cover" style={styles.image}>
          { childContent }
        </ImageBackground>
      )}
      {!backgroundImage && (
          childContent
      )}
    </View>    
  )
});

export default memo(ContainerComponent);
