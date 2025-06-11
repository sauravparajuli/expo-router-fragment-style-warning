import { Stack } from 'expo-router';

export default function App() {
  return <Stack screenOptions={{ contentStyle: undefined }} />;
}


import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'Warning: Invalid prop `style` supplied to `React.Fragment`'
]);
