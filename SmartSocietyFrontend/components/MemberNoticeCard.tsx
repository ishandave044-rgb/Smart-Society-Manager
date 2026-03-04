import React from "react";
import { Text, View } from "react-native";

const MemberNoticeCard = () => {
  return (
    <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-200">
      <Text className="text-lg font-semibold text-gray-800">
        Water Supply Maintenance
      </Text>

      <Text className="text-gray-500 text-sm mt-2">15 March 2026</Text>

      <Text className="text-gray-700 mt-3">
        Water supply will be unavailable from 10:00 AM to 2:00 PM due to
        maintenance work. Kindly store sufficient water.
      </Text>
    </View>
  );
};

export default MemberNoticeCard;
