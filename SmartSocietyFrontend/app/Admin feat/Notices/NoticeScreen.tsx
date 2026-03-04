import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const NoticeScreen = () => {
  return (
    <View className="h-full w-full bg-green-50 px-5 py-5">
      {/* Notice Section */}
      <View className="flex-row justify-between mb-4">
        {/* Create Notice */}
        <TouchableOpacity className="w-[48%] bg-yellow-100 rounded-3xl p-5 shadow-sm">
          <Ionicons name="megaphone-outline" size={32} color="#CA8A04" />
          <Text className="text-gray-700 mt-3 text-base">Create</Text>
          <Text className="text-lg font-bold text-gray-900">Notice</Text>
        </TouchableOpacity>

        {/* Notice List */}
        <TouchableOpacity className="w-[48%] bg-blue-100 rounded-3xl p-5 shadow-sm">
          <Ionicons name="list-outline" size={32} color="#2563EB" />
          <Text className="text-gray-700 mt-3 text-base">Notice</Text>
          <Text className="text-lg font-bold text-gray-900">List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoticeScreen;
