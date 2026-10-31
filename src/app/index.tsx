import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-[#f7f7f7] px-6">
      <Text className="typography__h1 text-text-primary mb-8 text-center">
        Welcome to A Language
      </Text>
      <Pressable
        onPress={() => router.push("/onboarding" as any)}
        className="rounded-2xl bg-[#5d5cf5] px-6 py-4"
      >
        <Text className="typography__body-large text-white font-bold">Open onboarding</Text>
      </Pressable>
    </View>
  );
}
