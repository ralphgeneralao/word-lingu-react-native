import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="typography__body-large text-text-secondary text-center">
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Text className="typography__h1 text-text-primary">Hello, World!</Text>
    </View>
  );
}
