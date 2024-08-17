import { Container } from 'inversify';
import { ButtonProvider } from './components/Button/ButtonProvider';
import { ComponentProvider, SYMBOL_COMPONENT_PROVIDER } from '@libreforge/libreforge-framework';
import { ContainerProvider } from './components/Container/ContainerProvider';
import { ImageProvider } from './components/Image/ImageProvider';
import { InputProvider } from './components/Input';
import { TextProvider } from './components/Label/Text/TextProvider';
import { VariableTextProvider } from './components/Label/VariableText';
import { AutomaticActionProvider } from './components/Tools/PageActions/AutomaticAction';


export function bindProviders(container: Container) {

  /* Standard Components */
  container.bind<ComponentProvider>(SYMBOL_COMPONENT_PROVIDER).to(ButtonProvider);
  container.bind<ComponentProvider>(SYMBOL_COMPONENT_PROVIDER).to(ContainerProvider);
  container.bind<ComponentProvider>(SYMBOL_COMPONENT_PROVIDER).to(ImageProvider);
  container.bind<ComponentProvider>(SYMBOL_COMPONENT_PROVIDER).to(InputProvider);
  container.bind<ComponentProvider>(SYMBOL_COMPONENT_PROVIDER).to(TextProvider);
  container.bind<ComponentProvider>(SYMBOL_COMPONENT_PROVIDER).to(VariableTextProvider);
  container.bind<ComponentProvider>(SYMBOL_COMPONENT_PROVIDER).to(AutomaticActionProvider);

}
