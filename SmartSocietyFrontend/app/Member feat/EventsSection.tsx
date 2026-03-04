import EventCard from "@/components/EventCard";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const EventsSection = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold text-gray-800">Upcoming Events</Text>
        <Text className="text-blue-600 font-medium">View All</Text>
      </View>

      {/* Event Card 1 */}
      <EventCard />
      <EventCard />
      <EventCard />
    </ScrollView>
  );
};

export default EventsSection;
