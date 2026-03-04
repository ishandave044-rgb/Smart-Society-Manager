import React from "react";
import { Text, View } from "react-native";

const UserMaintenanceCard = () => {
  return (
    <View className=" flex-1 bg-white rounded-2xl my-3 p-5 shadow-sm border border-gray-200">
      <Text className="text-xl font-bold text-gray-800 mb-5">
        Maintenance Montly
      </Text>

      {/* Top 2 Column Section */}
      <View className="flex-row justify-between">
        {/* Left Column */}
        <View className="w-[48%]">
          <View className="mb-4">
            <Text className="text-gray-500 text-sm">Title</Text>
            <Text className="text-gray-800 mt-1">
              Monthly Maintenance - Jan
            </Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-500 text-sm">Due Date</Text>
            <Text className="text-gray-800 mt-1">30 Jan 2025</Text>
          </View>
        </View>

        {/* Right Column */}
        <View className="w-[48%]">
          <View className="mb-4">
            <Text className="text-gray-500 text-sm">Amount (₹)</Text>
            <Text className="text-gray-800 mt-1 font-semibold">5000</Text>
          </View>
        </View>
      </View>

      {/* Description Full Width */}
      <View>
        <Text className="text-gray-500 text-sm">Description</Text>
        <Text className="text-gray-800 mt-1">Maintenance details...</Text>
      </View>
    </View>
  );
};

export default UserMaintenanceCard;
