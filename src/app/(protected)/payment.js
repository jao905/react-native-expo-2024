import { router } from "expo-router";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([
    {
      id: 1,
      nome: "Violante Trengrove",
    },
    {
      id: 2,
      nome: "Helen Broun",
    },
    {
      id: 3,
      nome: "Olly Redpath",
    },
    {
      id: 4,
      nome: "Christos Joul",
    },
    {
      id: 5,
      nome: "Kimble Passion",
    },
    {
      id: 6,
      nome: "Anne-corinne Justham",
    },
    {
      id: 7,
      nome: "Trudy Drewet",
    },
    {
      id: 8,
      nome: "Cathleen Whitesel",
    },
    {
      id: 9,
      nome: "Lora Baumann",
    },
    {
      id: 10,
      nome: "Olivette Ambrogini",
    },
    {
      id: 11,
      nome: "Olympe Radborn",
    },
    {
      id: 12,
      nome: "Chrissie Hammor",
    },
    {
      id: 13,
      nome: "Durward Cattle",
    },
    {
      id: 14,
      nome: "Dimitry McConnell",
    },
    {
      id: 15,
      nome: "Lindie Fitzackerley",
    },
    {
      id: 16,
      nome: "Jules Treleaven",
    },
    {
      id: 17,
      nome: "Faustine Hembrow",
    },
    {
      id: 18,
      nome: "Ernest Scrimgeour",
    },
    {
      id: 19,
      nome: "Nicola Bohler",
    },
    {
      id: 20,
      nome: "Emmy Hryskiewicz",
    },
    {
      id: 21,
      nome: "Carlotta Feaks",
    },
    {
      id: 22,
      nome: "Fifine Whitmore",
    },
    {
      id: 23,
      nome: "Aylmer Drysdell",
    },
    {
      id: 24,
      nome: "Theressa Gaukrodge",
    },
    {
      id: 25,
      nome: "Maggee Hake",
    },
    {
      id: 26,
      nome: "Doroteya Reany",
    },
    {
      id: 27,
      nome: "Janifer Eloi",
    },
    {
      id: 28,
      nome: "Hilarius Dummer",
    },
    {
      id: 29,
      nome: "Cammie Dibdin",
    },
    {
      id: 30,
      nome: "Jarret Stratton",
    },
    {
      id: 31,
      nome: "Deeann McSperron",
    },
    {
      id: 32,
      nome: "Ronnie Ervin",
    },
    {
      id: 33,
      nome: "Duffy Farish",
    },
    {
      id: 34,
      nome: "Alysia Yuryshev",
    },
    {
      id: 35,
      nome: "Haleigh Markushkin",
    },
  ]);
  const [íd, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");

  const handleCalendar = (event, selectedDate) => {
    setData(selectedDate);
    setViewCalendar(false);
  };

  return (
    <View style={styles.content}>
      <Text>Inserir Pagamentos</Text>
      <View style={styles.inputView}>
        <Ionicons name="wallet-outline" size={24} color="black" />
        <TextInput
          placeholder="Valor"
          keyboardType="numeric"
          style={styles.inputValor}
          value={valor}
          onChangeText={setValor}
        />
      </View>
      <View style={styles.inputView}>
        <Picker
          selectedValue={íd}
          onValueChange={(itemValue, index) => {
            setId(itemValue);
          }}
          style={{ width: "100%" }}
        >
          {sugestoes.map((item) => {
            return (
              <Picker.Item key={item.id} label={item.nome} value={item.id} />
            );
          })}
        </Picker>

      </View>
      <View style={styles.inputView}>
        <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
          {data.toLocaleDateString().split("T")[0]}
        </Text>
        {viewCalendar && (
          <DateTimePicker
            value={data}
            onChange={handleCalendar}
            mode="date"
            testID="dateTimePicker"
          />
        )}
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="observações"
          style={styles.inputObservacao}
          value={observacao}
          onChangeText={setObservacao}
          multiline={true}
        />
      </View>
      <View style={styles.contentButtons}>
        <Button title="Salvar" />
        <Button title="Continuar" />
        <Button title="Cancelar" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  inputView: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%", //AUMENTAR A LARGURA
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  contentButtons: {
    padding: 10,
    gap: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: "50%",
  },
  inputValor: {
    flex: 1,
    textAlign: "right",
    padding: 8,
  },
  inputData: {
    width: "100%",
    textAlign: "center",
    fontFamily: "regular",
    fontSize: 18,
    padding: 10,
  },
  inputObservacao: {
    fontFamily: "regular",
    fontSize: 18,
    flex: 1,
    lineHeight: 20,
  },
});
