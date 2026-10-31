import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="mx-auto w-full max-w-[520px] flex-1 px-5 pb-6 pt-4">
        <View className="mb-[34px] h-[74px] flex-row items-center justify-center">
          <Image
            source={images.mascotLogo}
            className="mr-2 h-[58px] w-[58px]"
            resizeMode="contain"
          />
          <Text className="font-poppins-bold text-[34px] leading-[54px] tracking-[-1.5px] text-[#11172e]">
            A Language
          </Text>
        </View>

        <View className="mb-2">
          <Text className="font-poppins-semibold text-[36px] leading-[41px] tracking-[-1.1px] text-[#11172e]">
            Your <Text className="text-[#6c4ef5]">AI</Text> language
            {"\n"}teacher.
          </Text>
          <Text className="mt-4 font-poppins-regular text-[17px] leading-7 text-[#59647e]">
            Real conversations, personalized
            {"\n"}lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="relative mb-[22px] mt-2 min-h-[230px] flex-1 items-center justify-center">
          <View className="absolute left-0 top-7 z-10 rotate-[-8deg] rounded-[22px] bg-[#edf6ff] px-[17px] py-[9px]">
            <Text className="font-poppins-medium text-[20px] leading-[30px] text-[#11172e]">
              Hello!
            </Text>
          </View>
          <View className="absolute right-0 top-1 z-10 rotate-[8deg] rounded-[22px] bg-[#f5f3ff] px-[17px] py-[9px]">
            <Text className="font-poppins-medium text-[20px] leading-[30px] text-[#5134ed]">
              ¡Hola!
            </Text>
          </View>
          <View className="absolute right-[-2px] top-[116px] z-10 rotate-[9deg] rounded-[22px] bg-[#fff3ed] px-[17px] py-[9px]">
            <Text className="font-poppins-medium text-[20px] leading-[30px] text-[#f24b37]">
              你好!
            </Text>
          </View>
          <Image
            source={images.mascotWelcome}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>

        <Pressable
          accessibilityRole="button"
          className="h-[70px] flex-row items-center justify-between rounded-[21px] bg-[#5d45f5] px-[25px] active:opacity-80"
        >
          <Text className="ml-[22px] flex-1 text-center font-poppins-semibold text-[20px] text-white">
            Get Started
          </Text>
          <Text className="font-poppins-regular text-[36px] leading-10 text-white">›</Text>
        </Pressable>

        <Pressable
          accessibilityRole="link"
          onPress={() => router.push("/")}
          className="self-center px-4 py-[10px]"
        >
          <Text className="font-poppins-medium text-[14px] text-[#59647e]">
            Back to home
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
