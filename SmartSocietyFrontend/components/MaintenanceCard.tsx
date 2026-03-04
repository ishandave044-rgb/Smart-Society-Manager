import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const MaintenanceCard = () => {
  return (
    <View className="bg-white rounded-3xl p-5 shadow-sm">
      {/* Maintenance Card */}

      {/* Title */}
      <Text className="text-lg font-bold text-green-900">
        Monthly Maintenance - January
      </Text>

      {/* Amount */}
      <Text className="text-3xl font-bold text-green-700 mt-2">₹5,000</Text>

      {/* Due Date */}
      <Text className="text-gray-500 mt-2">Due Date: 30 Jan 2025</Text>

      {/* Description */}
      <Text className="text-gray-700 mt-4">
        This maintenance includes lift service, security, cleaning and water
        charges.
      </Text>

      {/* Status */}
      <View className="mt-5 bg-yellow-100 px-3 py-2 rounded-xl self-start">
        <Text className="text-yellow-700 font-semibold">
          Status: Pending Approval
        </Text>
      </View>

      {/* Buttons */}
      <View className="flex-row justify-between mt-6">
        {/* Approve */}
        <TouchableOpacity className="w-[48%] bg-green-600 py-3 rounded-xl">
          <Text className="text-white text-center font-semibold">Approve</Text>
        </TouchableOpacity>

        {/* Reject */}
        <TouchableOpacity className="w-[48%] bg-green-200 py-3 rounded-xl">
          <Text className="text-green-800 text-center font-semibold">
            Reject
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MaintenanceCard;
