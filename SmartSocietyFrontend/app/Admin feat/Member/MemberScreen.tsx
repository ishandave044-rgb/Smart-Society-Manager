import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import MemberCard from "./MemberCard";

export default function MembersListScreen() {
  const members = [
    {
      id: "1",
      name: "Rahul Sharma",
      flat: "A-404",
      phone: "+91 98765 43210",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "2",
      name: "Priya Mehta",
      flat: "B-203",
      phone: "+91 91234 56789",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "3",
      name: "Amit Verma",
      flat: "C-102",
      phone: "+91 99887 66554",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <View className="flex-1 h-full bg-green-50 px-4 py-5">
      {/* Header */}
      <View className="mb-4 bg-green-200 rounded-lg shadow-sm">
        <View className="flex-row justify-between items-center px-4 py-3">
          <Text className="text-2xl font-bold text-gray-900">Members</Text>
          <TouchableOpacity
            onPress={() => router.push("./MemberAddForm")}
            className="px-[8px] py-2 bg-green-600 rounded-full"
            activeOpacity={0.7}
          >
            <Ionicons name="person-add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Members List */}
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MemberCard
            member={item}
            onPress={() => {
              router.replace({
                pathname: "./MemberProfile",
                params: { id: item.id },
              });
            }}
          />
        )}
      />
    </View>
  );
}
