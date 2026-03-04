import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const ComplaintCard = ({ complaint , }:(any)) => {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
      {/* Top Row */}
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-gray-900">
          {complaint.flat} - {complaint.name}
        </Text>

        {/* Static Pending Badge */}
        <View className="bg-yellow-100 px-3 py-1 rounded-full">
          <Text className="text-xs font-semibold text-yellow-700">
            {complaint.status}
          </Text>
        </View>
      </View>

      {/* Issue */}
      <Text className="text-gray-700 mt-2">{complaint.issue}</Text>

      {/* Date */}
      <View className="flex-row items-center mt-2">
        <Ionicons name="calendar-outline" size={14} color="#6B7280" />
        <Text className="text-gray-500 text-xs ml-1">{complaint.date}</Text>
      </View>
    </View>
  );
};

export default ComplaintCard;
