import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthTokenProvider } from '../contexts/AuthTokenContext';
// import { DBProvider } from '../contexts/db/DBContext';

export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthTokenProvider>
          {/* <DBProvider> */}
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ animation: 'fade', headerShown: false }} />
            <Stack.Screen name="(dashboard)" options={{ animation: 'fade', headerShown: false }} />
          </Stack>
          {/* </DBProvider> */}
        </AuthTokenProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
