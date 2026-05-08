import { getLista } from "@/store/store";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

interface Gasto {
  nome: string;
  valor: number;
}

export default function Home() {
  const router = useRouter();
  const [lista, setLista] = useState<Gasto[]>(getLista());
  const total = lista.reduce((acc, item) => acc + item.valor, 0);
  useFocusEffect(
    useCallback(() => {
      setLista(getLista());
    }, []),
  );

  return (
    <View>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text>{item.nome}</Text>
            <Text>Valor: R$ {item.valor.toFixed(2)}</Text>
            <Button title="Excluir" onPress={() => {
              const novaLista = lista.filter((g) => g.nome !== item.nome);
              setLista(novaLista);
            }}  />
          </View>
        )}
      />

      <Button title="+" onPress={() => router.push("/add")} />
      <Text>Total: R$ {total.toFixed(2)}</Text>
    </View>
  );
}
