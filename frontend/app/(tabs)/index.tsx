import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Link } from 'expo-router';

export default function MainMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Game</Text>

      <Link href="/play" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/settings" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/splitwise" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Connect with Splitwise</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
