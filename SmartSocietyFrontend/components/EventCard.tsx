import { View, Text } from 'react-native'
import React from 'react'

const EventCard = () => {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-200">

      <Text className="text-lg font-semibold text-gray-800">
        Holi Celebration
      </Text>

      <View className="mt-3">
        <Text className="text-gray-500 text-sm">Date</Text>
        <Text className="text-gray-800 font-medium">25 March 2026</Text>
      </View>

      <View className="mt-2">
        <Text className="text-gray-500 text-sm">Time</Text>
        <Text className="text-gray-800 font-medium">10:00 AM</Text>
      </View>

      <View className="mt-2">
        <Text className="text-gray-500 text-sm">Location</Text>
        <Text className="text-gray-800 font-medium">Society Garden Area</Text>
      </View>

    </View>
  );
};

export default EventCard