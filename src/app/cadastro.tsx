import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { api } from "../services/api"

export default function Cadastro(){

    const [nome, setNome] = useState("")
    const [quantidade, setQuantidade] = useState("")

    async function salvar() {
        try {
            await api.post("/beers",{
                nome,
                quantidade: Number(quantidade)
            }) 
            alert("Bebida salva com sucesso")
            setNome("")
            setQuantidade("")
        } catch(error) {
            alert("Erro ao cadastrar")
            console.log(error)
        }
    }
    return(
        <View>

            <TextInput 
            placeholder="Nome da cerveja..."
            value={nome}
            onChangeText={setNome}
            />

            <TextInput 
            placeholder="Quantidade..."
            value={quantidade}
            onChangeText={setQuantidade}
            />

            <Button 
            title="Salvar"
            onPress={salvar}
            />
        </View>
    )
}