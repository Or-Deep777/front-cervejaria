import { Tabs } from "expo-router";
export default function Layout(){
  return(
    <Tabs>
      <Tabs.Screen 
      name="index"
      options={{
        title:"Home"
      }}
      />

      <Tabs.Screen 
      name="cadastro"
      options={{
        title:"Cadastrar"
      }}
      />

      <Tabs.Screen 
      name="listar"
      options={{
        title:"Listar"
      }}
      />
    </Tabs>
  )
}