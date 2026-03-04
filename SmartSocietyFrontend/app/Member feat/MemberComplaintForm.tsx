import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const MemberComplaintForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">
        Create Complaint
      </Text>

      <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
        {/* Hardcoded Member Info */}
        <View className="mb-4">
          <Text className="text-gray-500 text-sm">Member Name</Text>
          <Text className="text-gray-800 mt-1 font-medium">Rahul Sharma</Text>
        </View>

        <View className="mb-4">
          <Text className="text-gray-500 text-sm">Flat Number</Text>
          <Text className="text-gray-800 mt-1 font-medium">A-404</Text>
        </View>

        {/* Complaint Title */}
        <Text className="text-gray-600 mb-1">Complaint Title</Text>
        <Controller
          control={control}
          name="title"
          rules={{ required: "Title is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Enter complaint title"
              value={value}
              onChangeText={onChange}
              className="border border-gray-300 rounded-xl p-3 mb-2"
            />
          )}
        />
        {errors.title && (
          <Text className="text-red-500 mb-3">{errors.title.message}</Text>
        )}

        {/* Description */}
        <Text className="text-gray-600 mb-1">Description</Text>
        <Controller
          control={control}
          name="description"
          rules={{ required: "Description is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Enter complaint details"
              value={value}
              onChangeText={onChange}
              multiline
              numberOfLines={4}
              className="border border-gray-300 rounded-xl p-3 mb-2 h-28 text-top"
            />
          )}
        />
        {errors.description && (
          <Text className="text-red-500 mb-3">
            {errors.description.message}
          </Text>
        )}

        {/* Submit Button */}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-green-600 rounded-xl p-4 mt-4"
        >
          <Text className="text-white text-center font-semibold">
            Submit Complaint
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MemberComplaintForm;
