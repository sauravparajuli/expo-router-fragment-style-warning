"# expo-router-fragment-style-warning" 

This is a minimal reproducible example demonstrating a warning in `expo-router@5.1.0`:


##  Setup

```bash
git clone https://github.com/sauravparajuli/expo-router-fragment-style-warning.git
cd expo-router-fragment-style-warning
npm install
npx expo start
```
Open in Expo Go (Android) via QR code


## **Observed Behavior**
Immediately on launch, the following warning appears:

Warning: Invalid prop `style` supplied to `React.Fragment`.

-No <></> or React.Fragment is used in any code  
-Happens even in a clean app with a single screen  
-Warning is visible in both Metro terminal and Android device logs  


## Tech Stack:
Expo SDK: 53.0.11  
expo-router: 5.1.0  
Platform: Android (Expo Go)  


## File Overview:
App.js — defines navigation with Stack  
app/index.jsx — single screen with <View> and <Text>  
No other navigation or fragment usage included  


## Notes:
Tried suppressing the warning with:
```
LogBox.ignoreLogs([
  'Warning: Invalid prop `style` supplied to `React.Fragment`'
]);
```
...but it still appears.


This repo was created using the official npx create-expo-app@latest template and modified only to integrate expo-router.



