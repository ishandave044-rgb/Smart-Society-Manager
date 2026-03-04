import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MemberDashboard() {
  return (
    <ScrollView className="bg-[#f5f5f5] w-full h-full">
      {/* container        */}
      <View className="px-5 py-5">
        {/* start  */}
        {/* member  */}
        <View className="rounded-2xl shadow-sm border bg-gray-100 border-gray-100 px-5 py-5 mt-4">
          <Header Name="Member" />
        </View>

        <View className="py-5 flex-1 flex-col gap-4">
          {/* Home  */}
          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center">
                <View className="bg-green-100 p-2 rounded-xl mr-2">
                  <Ionicons name="home" size={18} color="#16A34A" />
                </View>
                <Text className="text-base font-semibold text-gray-800">
                  Home
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-blue-600 font-medium">View All</Text>
              </TouchableOpacity>
            </View>
            <View className="h-[1px] bg-gray-100 mb-3" />
            {/* Content */}
            <TouchableOpacity
              onPress={() => router.push("/Member feat/WelcomePage")}
              className="flex-row items-center"
            >
              <View className="bg-green-100 w-10 h-10 rounded-full items-center justify-center mr-3">
                <Ionicons name="person" size={18} color="#16A34A" />
              </View>
              <View className="flex-1">
                <View className="flex-row items-end">
                  <Text className="text-lg font-bold text-gray-900 mr-1">
                    Welcome
                  </Text>
                  <Text className="text-gray-500">Member</Text>
                </View>

                <Text className="text-gray-400 text-sm">
                  Have a nice day 🙂
                </Text>
              </View>
              <View className="bg-green-100 p-2 rounded-xl">
                <Ionicons name="speedometer" size={22} color="#16A34A" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Event  */}
          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center">
                <View className="bg-blue-100 p-2 rounded-xl mr-2">
                  <Ionicons name="calendar" size={18} color="#2563EB" />
                </View>
                <Text className="text-base font-semibold text-gray-800">
                  Events
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-blue-600 font-medium">View All</Text>
              </TouchableOpacity>
            </View>
            <View className="h-[1px] bg-gray-100 mb-3" />
            {/* Content */}
            <TouchableOpacity
              onPress={() => router.push("/Member feat/EventsSection")}
              className="flex-row items-center"
            >
              <View className="bg-blue-100 w-10 h-10 rounded-full items-center justify-center mr-3">
                <Ionicons name="time" size={18} color="#2563EB" />
              </View>
              <View className="flex-1">
                <View className="flex-row items-end">
                  <Text className="text-lg font-bold text-gray-900 mr-1">
                    3
                  </Text>
                  <Text className="text-gray-500">Upcoming Events</Text>
                </View>
                <Text className="text-gray-400 text-sm">1 Today</Text>
              </View>
              <View className="bg-blue-100 p-2 rounded-xl">
                <Ionicons name="calendar-outline" size={22} color="#2563EB" />
              </View>
            </TouchableOpacity>
          </View>

          {/* payment  */}
          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center">
                <View className="bg-blue-100 p-2 rounded-xl mr-2">
                  <Ionicons name="wallet" size={18} color="#2563EB" />
                </View>
                <Text className="text-base font-semibold text-gray-800">
                  Payments
                </Text>
              </View>

              <TouchableOpacity>
                <Text className="text-blue-600 font-medium">View All</Text>
              </TouchableOpacity>
            </View>

            <View className="h-[1px] bg-gray-100 mb-3" />

            {/* Content */}
            <TouchableOpacity
            onPress={() => router.push("/Member feat/PaymentsSection")}
             className="flex-row items-center">
              <View className="bg-blue-100 w-10 h-10 rounded-full items-center justify-center mr-3">
                <Ionicons name="cash" size={18} color="#2563EB" />
              </View>

              <View className="flex-1">
                <View className="flex-row items-end">
                  <Text className="text-lg font-bold text-gray-900 mr-1">
                    ₹48,500
                  </Text>
                  <Text className="text-gray-500">Pending Dues</Text>
                </View>

                <Text className="text-gray-400 text-sm">
                  ₹2,500 Received Today
                </Text>
              </View>

              <View className="bg-green-100 p-2 rounded-xl">
                <Ionicons name="card" size={22} color="#16A34A" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Complaints */}

          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center">
                <View className="bg-red-100 p-2 rounded-xl mr-2">
                  <Ionicons
                    name="chatbubble-ellipses"
                    size={18}
                    color="#DC2626"
                  />
                </View>
                <Text className="text-base font-semibold text-gray-800">
                  Complaints
                </Text>
              </View>

              <TouchableOpacity>
                <Text className="text-blue-600 font-medium">View All</Text>
              </TouchableOpacity>
            </View>

            <View className="h-[1px] bg-gray-100 mb-3" />

            {/* Content */}
            <TouchableOpacity
            onPress={() => router.push("/Member feat/MemberComplaintForm")}
             className="flex-row items-center">
              <View className="bg-red-100 w-10 h-10 rounded-full items-center justify-center mr-3">
                <Ionicons name="person" size={18} color="#DC2626" />
              </View>

              <View className="flex-1">
                <View className="flex-row items-end">
                  <Text className="text-lg font-bold text-gray-900 mr-1">
                    5
                  </Text>
                  <Text className="text-gray-500">Open Complaints</Text>
                </View>

                <Text className="text-gray-400 text-sm">2 New Today</Text>
              </View>

              <View className="bg-orange-100 p-2 rounded-xl">
                <Ionicons name="document-text" size={22} color="#EA580C" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Notices */}

          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center">
                <View className="bg-orange-100 p-2 rounded-xl mr-2">
                  <Ionicons name="megaphone" size={18} color="#EA580C" />
                </View>
                <Text className="text-base font-semibold text-gray-800">
                  Notices
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-blue-600 font-medium">View All</Text>
              </TouchableOpacity>
            </View>

            <View className="h-[1px] bg-gray-100 mb-3" />

            {/* Content */}
            <TouchableOpacity 
            onPress={() => router.push('/Member feat/MemberNoticesPage')}
            className="flex-row items-center">
              <View className="bg-orange-100 w-10 h-10 rounded-full items-center justify-center mr-3">
                <Ionicons name="notifications" size={18} color="#EA580C" />
              </View>

              <View className="flex-1">
                <View className="flex-row items-end">
                  <Text className="text-lg font-bold text-gray-900 mr-1">
                    8
                  </Text>
                  <Text className="text-gray-500">Active Notices</Text>
                </View>

                <Text className="text-gray-400 text-sm">1 New Notice</Text>
              </View>

              <View className="bg-red-100 p-2 rounded-xl">
                <Ionicons name="mail" size={22} color="#DC2626" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* end */}
      </View>
    </ScrollView>
  );
}
