import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PaymentScreen = () => {
  return (
    <View className="h-full w-full bg-green-50 px-5 py-5">
      <View className="flex-row justify-between mb-4">
        {/* Create Maintenance */}
        <TouchableOpacity
          onPress={() => router.push("./CreateMaintenanceForm")}
          className="w-[48%] bg-indigo-100 rounded-3xl p-5 shadow-sm"
        >
          <Ionicons name="document-text-outline" size={32} color="#6366F1" />
          <Text className="text-gray-700 mt-3 text-base">Create</Text>
          <Text className="text-lg font-bold text-gray-900">Maintenance</Text>
        </TouchableOpacity>

        {/* Penalty (Any Member) */}
        <TouchableOpacity
          onPress={() => router.push("./PenaltySpecificPersonForm")}
          className="w-[48%] bg-red-100 rounded-3xl p-5 shadow-sm"
        >
          <Ionicons name="alert-circle-outline" size={32} color="#DC2626" />
          <Text className="text-gray-700 mt-3 text-base">Penalty</Text>
          <Text className="text-lg font-bold text-gray-900">Any Member</Text>
        </TouchableOpacity>
      </View>

      {/* Row 2 */}
      <View className="flex-row justify-between">
        {/* Approve / Reject */}
        <TouchableOpacity
          onPress={() => router.push("./ApproveRejectMaintenance")}
          className="w-[48%] bg-orange-100 rounded-3xl p-5 shadow-sm"
        >
          <Ionicons name="checkmark-done-outline" size={32} color="#EA580C" />
          <Text className="text-lg font-bold text-gray-900 mt-3">
            Approve / Reject
          </Text>
        </TouchableOpacity>

        {/* Manual Payment Entry */}
        <TouchableOpacity
          onPress={() => router.push("./ManualPaymentEntry")}
          className="w-[48%] bg-blue-100 rounded-3xl p-5 shadow-sm"
        >
          <Ionicons name="create-outline" size={32} color="#2563EB" />
          <Text className="text-lg font-bold text-gray-900 mt-3">
            Manual Payment Entry
          </Text>
        </TouchableOpacity>
      </View>

      {/* Report menu  */}

      <View className="bg-white rounded-3xl p-5 shadow-md mt-6">
        {/* 🔹 First Row - Total Maintenance */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-end">
              <Text className="text-3xl font-bold text-green-700 mt-1">
                ₹48,500
              </Text>
              <Text className="text-gray-600 ml-2 mb-1">(Total Mem. 23)</Text>
            </View>
            <Ionicons name="wallet-outline" size={36} color="#16A34A" />
          </View>
        </View>

        {/* 🔹 Second Row */}
        <View className="flex-row justify-between">
          {/* Paid Box */}
          <TouchableOpacity
            onPress={() => router.push("./MemberPaidList")}
            className="w-[48%] bg-green-100 rounded-2xl p-4"
          >
            <Text className="text-green-700 text-sm font-medium">Paid</Text>

            <Text className="text-2xl font-bold text-green-800 mt-1">
              ₹30,000
            </Text>

            <Text className="text-gray-600 mt-1">15 Members</Text>
          </TouchableOpacity>

          {/* Pending Box */}
          <TouchableOpacity
            onPress={() => router.push("./MemberUnPaidList")}
            className="w-[48%] bg-red-100 rounded-2xl p-4"
          >
            <Text className="text-red-700 text-sm font-medium">Pending</Text>

            <Text className="text-2xl font-bold text-red-800 mt-1">
              ₹18,500
            </Text>

            <Text className="text-gray-600 mt-1">8 Members</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;
