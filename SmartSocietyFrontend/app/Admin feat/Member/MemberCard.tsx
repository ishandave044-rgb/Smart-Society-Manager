import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function MemberCard({
  member = { id: "1", avatar: "", name: "", flat: "", phone: "" },
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-l-4 border-green-500"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center">
        {/* Avatar */}
        <Image
          source={{ uri: member?.avatar }}
          className="w-14 h-14 rounded-full mr-3"
        />

        {/* Info */}
        <View className="flex-1">
          <Text className="text-base font-semibold text-gray-900">
            {member?.name}
          </Text>

          <Text className="text-gray-500 text-sm">Flat {member?.flat}</Text>

          <Text className="text-gray-400 text-xs">{member?.phone}</Text>
        </View>

        {/* Actions */}
        <View className="flex-row gap-2 space-x-2 ml-2">
          <TouchableOpacity
            onPress={() => {
              router.replace({
                pathname: "./MemberAddForm",
                params: { id: member.id },
              });
            }}
            className="p-2 bg-yellow-200 rounded-full"
            activeOpacity={0.7}
          >
            <Ionicons name="pencil" size={18} color="#A16207" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Delete', member?.name)}
            className="p-2 bg-red-200 rounded-full"
            activeOpacity={0.7}
          >
            <Ionicons name="trash" size={18} color="#B91C1C" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
