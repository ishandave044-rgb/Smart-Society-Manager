import React from "react";
import { View, Text, ScrollView } from "react-native";
import UserMaintenanceCard from "@/components/UserMaintenanceCard";

const PaymentSection = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">

      {/* 🔝 Total Due - Green Theme */}
      <View className="bg-green-600 rounded-2xl p-6 mb-4 shadow-sm">
        <Text className="text-white text-sm">
          Total Maintenance Amount
        </Text>
        <Text className="text-white text-3xl font-bold mt-2">
          ₹12,500
        </Text>
      </View>

      {/* 📊 Paid & Pending Row */}
      <View className="flex-row justify-between mb-6">

        {/* Left - Paid */}
        <View className="bg-white w-[48%] rounded-2xl p-4 shadow-sm border border-green-200">
          <Text className="text-gray-500 text-sm">
            Paid
          </Text>
          <Text className="text-green-600 text-xl font-bold mt-2">
            ₹5,000
          </Text>
        </View>

        {/* Right - Pending */}
        <View className="bg-white w-[48%] rounded-2xl p-4 shadow-sm border border-red-200">
          <Text className="text-gray-500 text-sm">
            Pending
          </Text>
          <Text className="text-red-600 text-xl font-bold mt-2">
            ₹7,500
          </Text>
        </View>

      </View>

      {/* payement card */}

    <UserMaintenanceCard/>
    <UserMaintenanceCard/>

    </ScrollView>
  );
};
export default PaymentSection;