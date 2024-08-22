import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';
import {counterEvent} from 'react-native/Libraries/Performance/Systrace';
import {useEffect} from 'react';

export const SettingScreen = () => {
  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);
  const reset = useCounterStore(state => state.reset);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${count}`,
    });
  }, [count]);

  return (
    <View style={styles.container}>
      <Text>Contador: {useCounterStore(state => state.count)}</Text>

      <Pressable style={styles.primaryButton} onPress={() => increment(1)}>
        <Text>Incrementar</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => decrement(1)}>
        <Text>Decrementar</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => reset()}>
        <Text>Resetear</Text>
      </Pressable>
    </View>
  );
};
