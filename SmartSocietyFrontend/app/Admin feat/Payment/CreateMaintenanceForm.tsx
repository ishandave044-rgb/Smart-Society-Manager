import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";

interface MaintenanceFormData {
  title: string;
  amount: string;
  dueDate: string;
  description: string;
}

export default function CreateMaintenanceForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MaintenanceFormData>();

  const onSubmit = (data: MaintenanceFormData) => {
    console.log("Maintenance Created:", data);
  };

  return (
    <View className="flex-1 bg-gray-50 p-5">
      <Text className="text-2xl font-bold mb-6 text-gray-900">
        Create Maintenance
      </Text>

      {/* Title */}
      <Text className="text-gray-700 mb-1">Title</Text>
      <Controller
        control={control}
        name="title"
        rules={{ required: "Title is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Monthly Maintenance - Jan"
            value={value}
            onChangeText={onChange}
            className="bg-white p-4 rounded-xl border border-gray-200"
          />
        )}
      />
      {errors.title && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.title.message}
        </Text>
      )}

      {/* Amount */}
      <Text className="text-gray-700 mt-4 mb-1">Amount (₹)</Text>
      <Controller
        control={control}
        name="amount"
        rules={{ required: "Amount is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="5000"
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

      {/* Due Date */}
      <Text className="text-gray-700 mt-4 mb-1">Due Date</Text>
      <Controller
        control={control}
        name="dueDate"
        rules={{ required: "Due date is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="30 Jan 2025"
            value={value}
            onChangeText={onChange}
            className="bg-white p-4 rounded-xl border border-gray-200"
          />
        )}
      />
      {errors.dueDate && (
        <Text className="text-red-500 text-sm mt-1">
          {errors.dueDate.message}
        </Text>
      )}

      {/* Description */}
      <Text className="text-gray-700 mt-4 mb-1">Description</Text>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Maintenance details..."
            multiline
            numberOfLines={4}
            value={value}
            onChangeText={onChange}
            className="bg-white p-4 rounded-xl border border-gray-200"
          />
        )}
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-indigo-600 mt-6 p-4 rounded-xl"
      >
        <Text className="text-white text-center font-semibold">
          Create Maintenance
        </Text>
      </TouchableOpacity>
    </View>
  );
}