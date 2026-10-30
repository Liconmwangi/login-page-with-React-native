import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function screenRootLayouts(){
  return(
    <>
       <Stack screenOptions={{headerShown:false}} >
       <Stack.Screen name="index"/>
       </Stack>
        <StatusBar style="inverted"/>
    </>
  );
}