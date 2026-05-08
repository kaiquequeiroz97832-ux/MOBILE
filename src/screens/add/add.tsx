import { addGasto } from "@/store/store";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Add() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  return (
    <View style={style.container}>
      <TextInput
        placeholder="Nome do gasto"
        style={style.Input}
        placeholderTextColor="gray"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Valor do gasto"
        style={style.Input}
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Button
        title="Adicionar"
        onPress={() => {
          if (!valor || isNaN(Number(valor))) {
            alert("Por favor, insira um valor numérico válido.");
            return; 
          }

          addGasto({
            nome,
            valor: Number(valor),
          });

          router.back();
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Input: {
    width: "80%",
    height: 40,
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
});
