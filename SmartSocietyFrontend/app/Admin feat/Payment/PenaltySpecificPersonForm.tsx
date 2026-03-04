import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";

interface PenaltyFormData {
  memberName: string;
  amount: string;
  reason: string;
  date: string;
}

export default function PenaltySpecificPersonForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PenaltyFormData>();

  const onSubmit = (data: PenaltyFormData) => {
    console.log("Penalty Created:", data);
  };

  return (
    <View className="flex-1 bg-gray-50 p-5">
      <Text className="text-2xl font-bold mb-6 text-gray-900">
        Add Penalty (Specific Member)
      </Text>

      {/* Member Name */}
      <Text className="text-gray-700 mb-1">Member Name</Text>
      <Controller
        control={control}
        name="memberName"
        rules={{ required: "Member name is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Enter Member Name"
            value={value}
            onChangeText={onChange}
            className="bg-white p-4 rounded-xl border border-gray-200"
          />
        )}
      />
      {errors.memberName && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.memberName.message}
        </Text>
      )}

      {/* Amount */}
      <Text className="text-gray-700 mt-4 mb-1">Penalty Amount (₹)</Text>
      <Controller
        control={control}
        name="amount"
        rules={{ required: "Amount is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="500"
            keyboardType="numeric"
            value={value}
            onChangeText={onChange}
            className="bg-white p-4 rounded-xl border border-gray-200"
          />
        )}
      />
      {errors.amount && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.amount.message}
        </Text>
      )}

      {/* Reason */}
      <Text className="text-gray-700 mt-4 mb-1">Reason</Text>
      <Controller
        control={control}
        name="reason"
        rules={{ required: "Reason is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Late payment / Rule violation"
            value={value}
            onChangeText={onChange}
            className="bg-white p-4 rounded-xl border border-gray-200"
          />
        )}
      />
      {errors.reason && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.reason.message}
        </Text>
      )}

      {/* Date */}
      <Text className="text-gray-700 mt-4 mb-1">Date</Text>
      <Controller
        control={control}
        name="date"
        rules={{ required: "Date is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="12 Jan 2025"
            value={value}
            onChangeText={onChange}
            className="bg-white p-4 rounded-xl border border-gray-200"
          />
        )}
      />
      {errors.date && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.date.message}
        </Text>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-red-600 mt-6 p-4 rounded-xl"
      >
        <Text className="text-white text-center font-semibold">
          Add Penalty
        </Text>
      </TouchableOpacity>
    </View>
  );
}