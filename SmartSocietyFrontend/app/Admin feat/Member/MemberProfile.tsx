import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MemberProfile() {
  const { id } = useLocalSearchParams();

  console.log(id);

  // find member by id

  const detailed = {
    id: "M1023",
    name: "Anand Rathore",
    flat: "B-204",
    phone: "+91 98765 43210",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    email: "anand.rathore@example.com",
    joined: "2022-08-15",
    role: "Resident",
    address: "Flat B-204, Shanti Residency, Jodhpur, Rajasthan",
    occupation: "Software Engineer",
    emergencyContact: "+91 90000 11111",
    familyMembers: 4,
    vehicleNumber: "RJ19AB4321",
    bloodGroup: "O+",
    isOwner: true,
  };

  return (
    <View className="flex-1 h-full bg-green-50 px-4 pt-14 ">
      {/* // remove by default back btn  */}
      <Stack.Screen
      options={{
        headerShown: false,
      }}
      />
      <TouchableOpacity
        className="mb-5 flex-row items-center w-[100px]"
        activeOpacity={0.7}
        onPress={() => router.replace("./MemberScreen")}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text className="ml-2 text-lg">Back</Text>
      </TouchableOpacity>

      <View className="items-center mb-6">
        <Image
          source={{ uri: detailed.avatar }}
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-xl font-bold mt-2">{detailed.name}</Text>
      </View>

      <View className="space-y-2">
        <Text className="text-gray-700">Email: {detailed.email}</Text>
        <Text className="text-gray-700">Flat: {detailed.flat}</Text>
        <Text className="text-gray-700">Phone: {detailed.phone}</Text>
        <Text className="text-gray-700">Role: {detailed.role}</Text>
        <Text className="text-gray-700">Joined: {detailed.joined}</Text>
        <Text className="text-gray-700">Address: {detailed.address}</Text>
        <Text className="text-gray-700">Occupation: {detailed.occupation}</Text>
        <Text className="text-gray-700">
          Emergency Contact: {detailed.emergencyContact}
        </Text>
      </View>
    </View>
  );
}
