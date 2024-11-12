import { useLocalSearchParams } from "expo-router"
    import { Button, Text, View } from "react-native"

export default function Details() {
const { id } = useLocalSearchParams()
return (
    <View style={{ flex:1 , justifyContent: "center" , alignItems:"center"}}>
    <Text>Details - {id  ? id : "Sem id"} </Text>
    <View>
        <Text>Nome</Text>
        <Text>Data de pagamento</Text>
        <Text>Num Recibo</Text>
        <Text>Valor Pago</Text>
        <Text>Observação</Text>
    </View>
    <View>
        <Text>Não há imagem cadastrada</Text>
    </View>
    <View>
        <Button title="Editar" onPress={() => {}} />
        <Button title="Definir Imagem" onPress={() => {}} />
        <Button title="Remover Imagem" onPress={() => {}} />
        <Button title="Voltar" onPress={() => {}} />
    </View>
    </View>
);
}