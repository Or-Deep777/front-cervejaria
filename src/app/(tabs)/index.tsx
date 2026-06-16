import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sistema de controle de bebidas</Text>
      <Text style={styles.text}>Bem vindo ao aplicativo de cervejaria</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding:20 },
  text: { fontSize: 20, fontWeight: 'bold' },
  logo: {width:200, height:200, resizeMode:"contain"}
});