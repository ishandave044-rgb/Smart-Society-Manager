import DashboardCards from "@/components/DashboardCard";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import { useRouter } from "expo-router";

export default function AdminDashboard() {
  const router = useRouter();
  return (
    <ScrollView className="bg-[#f5f5f5] w-full h-full">
      {/* container */}
      <View className="px-5 py-5">
        {/* Admin  */}
        <View className="rounded-2xl shadow-sm border bg-gray-100 border-gray-100 px-5 py-5 mt-4">
          <Header Name="Admin" />
        </View>

        {/* Dashboard  */}
        <View className="px-5 py-5 rounded-2xl mt-4 shadow-sm bg-white">
          <DashboardCards />
        </View>

        {/* Members  */}
        <View className="py-5 flex-1 flex-col gap-4">
          <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            {/* Header Row */}
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center">
                <View className="bg-green-100 p-2 rounded-xl mr-2">
                  <Ionicons name="people" size={18} color="#16A34A" />
                </View>
                <Text className="text-base font-semibold text-gray-800">
                  Members
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-blue-600 font-medium">View All</Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View className="h-[1px] bg-gray-100 mb-3" />

            {/* Content Row */}
            <TouchableOpacity
              onPress={() => router.push('/Admin feat/Member/MemberScreen')}
             className="flex-row items-center">
              {/* Avatar */}
              <View className="bg-green-100 w-10 h-10 rounded-full items-center justify-center mr-3">
                <Ionicons name="person" size={18} color="#16A34A" />
              </View>

              {/* Stats */}
              <View className="flex-1">
                <View className="flex-row items-end">
                  <Text className="text-lg font-bold text-gray-900 mr-1">
                    250
                  </Text>
                  <Text className="text-gray-500">Total</Text>
                </View>

                <Text className="text-gray-400 text-sm">12 New Today</Text>
              </View>

              {/* Right Icon */}
              <View className="bg-blue-100 p-2 rounded-xl">
                <Ionicons name="card" size={22} color="#2563EB" />
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
            className="flex-row items-center"
            onPress={() => router.push('/Admin feat/Payment/PaymentScreen')}
            >
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
            className="flex-row items-center"
            onPress={() => router.push('/Admin feat/Complaints/ComplaintsScreen')}
            >
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
             className="flex-row items-center" 
             onPress={() => router.push('/Admin feat/Notices/NoticeScreen')}
            >
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
        {/* end  */}
      </View>
    </ScrollView>
  );
}
