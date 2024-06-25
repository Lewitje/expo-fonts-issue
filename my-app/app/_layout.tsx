import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { View, Text } from 'react-native'

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Satoshi900: require("@/assets/fonts/Satoshi900.ttf"),
    Satoshi700: require("@/assets/fonts/Satoshi700.ttf"),
    Satoshi500: require("@/assets/fonts/Satoshi500.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Text style={{ fontFamily: 'Satoshi900', fontWeight: 900, fontSize: 30 }}>
        HEADING 900
      </Text>
      <Text style={{ fontFamily: 'Satoshi700', fontWeight: 700, fontSize: 30}}>
        Heading 700
      </Text>
      <Text style={{ fontFamily: 'Satoshi500', fontWeight: 500, fontSize: 30}}>
        BODY
      </Text>
      <Text style={{ fontFamily: 'Satoshi900', fontSize: 30 }}>
        HEADING 900
      </Text>
      <Text style={{ fontFamily: 'Satoshi700', fontSize: 30}}>
        Hading 700
      </Text>
      <Text style={{ fontFamily: 'Satoshi500', fontSize: 30}}>
        BODY
      </Text>
    </View>
  );
}
