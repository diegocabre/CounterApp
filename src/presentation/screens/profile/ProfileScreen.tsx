import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {name} </Text>
      <Text style={styles.title}>Email: {email} </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Gabriel Cabre'})}>
        <Text>Cambiar Nombre</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'gabriel@cabre'})}>
        <Text>Cambiar Email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Diego Cabre', 'diegocabre@gmail')}>
        <Text>Cambiar a Diego</Text>
      </Pressable>
    </View>
  );
};
