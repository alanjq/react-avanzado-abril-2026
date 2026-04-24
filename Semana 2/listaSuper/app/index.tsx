import { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Index() {
  const LISTA = [
    "Tomate", "Cebolla", "Pollo", "Café", "Galletas", "Pan", "Ajo", "Huevo", "Jugo", "Chocolates", "Detergente"
  ]

  const [listaItems, setListaItems] = useState(LISTA)

  const eliminarElemento = (index) => {
    let listaactualizada = listaItems.filter((valor,i)=> i != index)
    console.log(listaactualizada)
    setListaItems(listaactualizada)
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>Lista de súper</Text>
      <ScrollView style={styles.itemsContainer}>
        {listaItems.map((producto, index)=>
          <Text key={index} style={styles.item}>{producto}
            <Text onPress={()=>eliminarElemento(index)} style={styles.eliminar}> (X)</Text>
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight:'600'
  } ,
  itemsContainer: {
    marginTop: 10,
    paddingHorizontal: 24
  },
  item: {
    fontSize: 18,
    marginVertical: 4
  },
  eliminar: {
    fontSize: 12,
  }

})
