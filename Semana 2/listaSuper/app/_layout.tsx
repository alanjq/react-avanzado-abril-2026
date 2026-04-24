import { Stack } from "expo-router";

export default function RootLayout() {
  // screenOptions nos permite eliminar el título
  return <Stack screenOptions={{ headerShown: false }} />;
}
