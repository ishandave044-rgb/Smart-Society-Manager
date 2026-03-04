import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

const MemberAddForm = () => {
  const { id } = useLocalSearchParams();

  //   find data by using id

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <ScrollView className="flex-1 h-full bg-green-50 px-6 py-14">
      {/* // remove by default back btn  */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <TouchableOpacity
        className="mb-5 flex-row items-center w-[100px]"
        activeOpacity={0.7}
        onPress={() => router.replace("./MemberScreen")}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text className="ml-2 text-lg">Back</Text>
      </TouchableOpacity>

      <Text className="text-2xl font-bold text-green-800 mb-8 text-center">
        Add Member
      </Text>

      {/* fullName  */}

      <Controller
        control={control}
        name="fullName"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Full Name"
          />
        )}
      />

      {errors.fullName && (
        <Text className="text-red-500">
          {typeof errors.fullName.message === "string"
            ? errors.fullName.message
            : ""}
        </Text>
      )}

      {/* Username  */}

      <Controller
        control={control}
        name="username"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Username"
          />
        )}
      />

      {errors.username && (
        <Text className="text-red-500">
          {typeof errors.username.message === "string"
            ? errors.username.message
            : ""}
        </Text>
      )}

      {/* {email} */}

      <Controller
        control={control}
        name="email"
        rules={{
          required: "required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "please provide valid email",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Email"
          />
        )}
      />

      {errors.email && (
        <Text className="text-red-500">
          {typeof errors.email.message === "string" ? errors.email.message : ""}
        </Text>
      )}

      {/* Phone Number */}

      <Controller
        control={control}
        name="phone"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Phone Number"
          />
        )}
      />

      {errors.phone && (
        <Text className="text-red-500">
          {typeof errors.phone.message === "string" ? errors.phone.message : ""}
        </Text>
      )}

      {/* {password} */}

      <Controller
        control={control}
        name="password"
        rules={{
          required: "required",
          minLength: {
            value: 6,
            message: "minimum 6 char",
          },
          maxLength: {
            value: 10,
            message: "maxmium 10 char",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] mt-[2] bg-[#fff] pl-2"
            onBlur={onBlur}
            secureTextEntry
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Password"
          />
        )}
      />

      {errors.password && (
        <Text className="text-red-500">
          {typeof errors.password.message === "string"
            ? errors.password.message
            : ""}
        </Text>
      )}

      {/* bio  */}

      <Controller
        control={control}
        name="bio"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Bio"
          />
        )}
      />

      {errors.bio && (
        <Text className="text-red-500">
          {typeof errors.bio.message === "string" ? errors.bio.message : ""}
        </Text>
      )}

      {/* submit Button  */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-[#4CAF50] p-[10] rounded items-center mt-4 w-full"
      >
        <Text className="text-[#fff] text-lg font-bold">Add Member</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MemberAddForm;
