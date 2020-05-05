import React from 'react';
import { Fabric, Customizer, loadTheme, initializeIcons } from '@fluentui/react';
import Body from './components/Body/Body';

loadTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#2f333c',
    neutralLighter: '#353a44',
    neutralLight: '#414651',
    neutralQuaternaryAlt: '#484d59',
    neutralQuaternary: '#4e545f',
    neutralTertiaryAlt: '#686e7a',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#282c34',
  }
});

initializeIcons()

function App() {
  return (
    <Customizer>
      <Fabric>
        <Body />
      </Fabric>
    </Customizer>
  );
}

export default App;
