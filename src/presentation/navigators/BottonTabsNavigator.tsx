import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, SettingScreen} from '../screens';
import {useCounterStore} from '../store/counter-store';

const Tab = createBottomTabNavigator();

export const BottonTabsNavigator = () => {
  const count = useCounterStore(state => state.count);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Settings "
        component={SettingScreen}
        options={{
          tabBarBadge: count,
        }}
      />
    </Tab.Navigator>
  );
};
