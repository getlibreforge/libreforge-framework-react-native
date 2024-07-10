import { forwardRef } from 'react';
import { IComponents, IPages } from '@libreforge/libreforge-framework-shared';
import { cleanupCustomComponentProps, useActionHandlers, usePropsOverrideByComponentRef } from '@libreforge/libreforge-framework';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

const ButtonComponent = forwardRef((props: { componentId: string, pages: IPages, designMode: boolean, 
    pageComponents: IComponents, componentPage: string, collectionRefIdx: number | undefined }, ref) => {

  let targetProps: any = props;

  const actionGroup = props.pageComponents[props.componentId].actionGroup;
  targetProps = useActionHandlers(targetProps, actionGroup, undefined, undefined);  
  targetProps = usePropsOverrideByComponentRef(props.componentId, targetProps, props.designMode);

  // if (targetProps.leftIcon) {
  //   if (Object.keys(iconsList).includes(targetProps.leftIcon)) {
  //     const Icon = iconsList[targetProps.leftIcon as keyof typeof iconsList];
  //     targetProps.leftIcon = <Icon path="" />;
  //   } else {
  //     targetProps.leftIcon = undefined;
  //   }
  // }

  // if (targetProps.rightIcon) {
  //   if (Object.keys(iconsList).includes(targetProps.rightIcon)) {
  //     const Icon = iconsList[targetProps.rightIcon as keyof typeof iconsList];
  //     targetProps.rightIcon = <Icon path="" />;
  //   } else {
  //     targetProps.rightIcon = undefined;
  //   }
  // }

  // const elementProps = cleanupCustomComponentProps(targetProps)
  // return <Button ref={ref} {...elementProps} />;

  return (
    <TouchableOpacity style={styles.button} onPress={() => targetProps.onClick(undefined)}>
      <Text style={styles.text}>Test Button</Text>
    </TouchableOpacity>
  );      
});

export default ButtonComponent;
