import {NavigationContainer} from '@react-navigation/native';
import {BottonTabsNavigator} from './presentation/navigators/BottonTabsNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottonTabsNavigator />
    </NavigationContainer>
  );
};
