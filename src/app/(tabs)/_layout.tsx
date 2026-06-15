import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          // Aqui você poderá adicionar ícones depois
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
        }}
      />
    </Tabs>
  );
}