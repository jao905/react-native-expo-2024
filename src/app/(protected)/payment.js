import { router } from "expo-router";
import { useState, useRef, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { z } from "zod";

const paymentSchema = z.object({
valor_pago: z.number().gt(0),  
user_id: z.number().int().positive(),
user_cadastro: z.number().int().positive(),
data_pagamento: z.date(),
observacao: z.string()
})

import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native";

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
  const valueRef = useRef();

  const handleCalendar = (event, selectedDate) => {
    setData(selectedDate);
    setViewCalendar(false);
  };

  useEffect(() => {
    valueRef?.current?.focus();
  }, []);

  const handleChangeValor = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        setValor("0,00");
        return;
      }
      let valorPtBr = Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
      }).format(valorConvertido);
      setValor(valorPtBr);
    } catch (error) {
      setValor("0,00");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Inserir Pagamentos</Text>
        <View style={styles.inputView}>
          <Ionicons name="wallet-outline" size={24} color="black" />
          <TextInput
            placeholder="Valor"
            keyboardType="numeric"
            style={styles.inputValor}
            value={valor}
            onChangeText={(newValue) => handleChangeValor(newValue)}
            ref={valueRef}
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
          <TouchableOpacity style={[styles.button, styles.saveButton]}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.continueButton]}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FAFAFA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#212121",
  },
  inputView: {
    borderColor: "black",
    borderWidth: 1,
    width: "90%", //AUMENTAR A LARGURA
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  contentButtons: {
    padding: 10,
    gap: 30,
    justifyContent: "space-around",
    flexDirection: "row",
    width: "80%",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "gray",
  },
  continueButton: {
    backgroundColor: "gray",
  },
  cancelButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
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
