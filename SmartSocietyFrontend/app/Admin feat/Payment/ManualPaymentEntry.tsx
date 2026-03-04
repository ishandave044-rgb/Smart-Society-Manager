import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function ManualPaymentEntry() {
  return (
    <ScrollView className="flex-1 bg-green-50 p-5">

      {/* Header */}
      <Text className="text-2xl font-bold text-green-800 mb-6">
        Manual Payment Entry
      </Text>

      <View className="bg-white rounded-3xl p-5 shadow-sm">

        {/* Member Name */}
        <Text className="text-gray-700 mb-1">Member Name</Text>
        <TextInput
          placeholder="Enter Member Name"
          className="bg-gray-50 p-4 rounded-xl border border-gray-200"
        />

        {/* Flat Number */}
        <Text className="text-gray-700 mt-4 mb-1">Flat Number</Text>
        <TextInput
          placeholder="B-204"
          className="bg-gray-50 p-4 rounded-xl border border-gray-200"
        />

        {/* Amount Paid */}
        <Text className="text-gray-700 mt-4 mb-1">Amount Paid (₹)</Text>
        <TextInput
          placeholder="5000"
          keyboardType="numeric"
          className="bg-gray-50 p-4 rounded-xl border border-gray-200"
        />

        {/* Payment Date */}
        <Text className="text-gray-700 mt-4 mb-1">Payment Date</Text>
        <TextInput
          placeholder="12 Jan 2025"
          className="bg-gray-50 p-4 rounded-xl border border-gray-200"
        />

        {/* Payment Mode */}
        <Text className="text-gray-700 mt-4 mb-1">Payment Mode</Text>
        <TextInput
          placeholder="Cash / UPI / Bank Transfer"
          className="bg-gray-50 p-4 rounded-xl border border-gray-200"
        />

        {/* Notes */}
        <Text className="text-gray-700 mt-4 mb-1">Notes (Optional)</Text>
        <TextInput
          placeholder="Additional details..."
          multiline
          numberOfLines={4}
          className="bg-gray-50 p-4 rounded-xl border border-gray-200"
        />

        {/* Submit Button */}
        <TouchableOpacity className="bg-green-600 mt-6 p-4 rounded-xl">
          <Text className="text-white text-center font-semibold">
            Save Payment
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}