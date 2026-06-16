import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Button, FlatList, Text, View } from "react-native";

interface Cerveja {
    id: string | number
    nome: string
    quantidade: string
}

export default function Listar(){
    const [cervejas,setCervejas] = useState<Cerveja[]>([])

    async function carregar() {
        const response = await api.get("/beers")
        setCervejas(response.data) 
    }
    useEffect(()=>{
        carregar()
    },[])

    async function excluir(id) {
        try {
            await api.delete(`/beers/${id}`)
            carregar()
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <FlatList 
        data={cervejas}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item})=>(
            <View>
                <Text>
                    {item.nome}
                </Text>

                <Text>
                    {item.quantidade}
                </Text>

                
                <Button 
                title="Excluir"
                onPress={()=>excluir(item.id)}
                />
            </View>
        )}
        
        />
    )
}