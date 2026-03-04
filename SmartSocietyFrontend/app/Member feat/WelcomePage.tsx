import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const WelcomePage = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Top Header */}
      <View className="bg-green-600 pt-14 pb-8 px-5 rounded-b-3xl">
        <Text className="text-white text-xl font-semibold">
          Welcome, Member 👋
        </Text>
        <Text className="text-white text-2xl font-bold mt-2">Rahul Sharma</Text>
      </View>

      {/* Profile Card */}
      <View className="bg-white mx-4 -mt-8 rounded-2xl p-5 shadow">
        <View className="items-center">
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            className="w-24 h-24 rounded-full border-4 border-green-500"
          />
          <Text className="text-xl font-bold mt-3">Rahul Sharma</Text>
          <Text className="text-gray-500">Flat A-404</Text>
        </View>

        {/* Details Section */}
        <View className="mt-6 space-y-4">
          <View className="border-b border-gray-200 pb-3">
            <Text className="text-gray-500">Mobile Number</Text>
            <Text className="text-gray-800 font-semibold mt-1">
              +91 98765 43210
            </Text>
          </View>

          <View className="border-b border-gray-200 pb-3">
            <Text className="text-gray-500">Email Address</Text>
            <Text className="text-gray-800 font-semibold mt-1">
              rahul@example.com
            </Text>
          </View>

          <View className="border-b border-gray-200 pb-3">
            <Text className="text-gray-500">Wing</Text>
            <Text className="text-gray-800 font-semibold mt-1">A Wing</Text>
          </View>

          <View className="border-b border-gray-200 pb-3">
            <Text className="text-gray-500">Parking Slot</Text>
            <Text className="text-gray-800 font-semibold mt-1">P-12</Text>
          </View>

          <View>
            <Text className="text-gray-500">Member Since</Text>
            <Text className="text-gray-800 font-semibold mt-1">
              January 2023
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WelcomePage;
