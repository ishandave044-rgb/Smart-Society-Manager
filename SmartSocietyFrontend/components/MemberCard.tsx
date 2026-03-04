import React from "react";
import { Image, Text, View } from "react-native";

const MemberCard = () => {
  return (
    <View className="bg-[#d9d9d9] border border-green-500 rounded-2xl my-[10px] p-4 flex-row items-center shadow-sm">
      {/* Profile Image */}
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        className="w-16 h-16 rounded-full"
      />

      {/* User Info */}
      <View className="ml-4 flex-1">
        <Text className="text-lg font-semibold text-gray-800">
          Rahul Sharma
        </Text>
        <Text className="text-gray-600 mt-1">Flat A-404</Text>
        <Text className="text-gray-500 mt-1">+91 98765 43210</Text>
      </View>
    </View>
  );
};

export default MemberCard;
