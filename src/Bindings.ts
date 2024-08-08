import { Container } from 'inversify';
import { ButtonProvider } from './components/Button/ButtonProvider';
import { ComponentProvider, SYMBOL_COMPONENT_PROVIDER } from '@libreforge/libreforge-framework';
import { TextProvider } from './components/Label/Text';


export function bindProviders(container: Container) {

  /* Standard Components */
  container.bind<ComponentProvider>(SYMBOL_COMPONENT_PROVIDER).to(ButtonProvider);
  // container.bind<ComponentProvider>(SYMBOL_COMPONENT_PROVIDER).to(TextProvider);
}
