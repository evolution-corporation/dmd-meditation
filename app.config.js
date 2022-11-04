import { version } from './package.json'

function createAppConfig(){
  const IS_DEV = process.env.APP_VARIANT === 'development';

  const appConfig = {
    expo: {
      jsEngine: "hermes",
      name: `DMD Meditation${IS_DEV ? ' dev' : ''}`,
      slug: "dmd_meditation",
      version: version,
      orientation: "portrait",
      githubUrl: "https://github.com/evolution-corporation/dmd-meditation",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#FFFFFF"
      },
      updates: {
        fallbackToCacheTimeout: 0,
        url: "https://u.expo.dev/65b7d342-ce66-4baa-9507-071987162a44"
      },
      assetBundlePatterns: ["**/*"],
      ios: {
        supportsTablet: true
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#FFFFFF"
        },
        icon: "./assets/icon.png",
        package: `com.ecorp.dmd_meditation${IS_DEV ? '_dev' : ''}`,
        googleServicesFile: `./google-services.json`,
        permissions: ["android.permission.RECORD_AUDIO"],
        
      },
      notification: {
			  icon: "./assets/SystemUI/notificationIcon.png"
		  },
      plugins: [
        "expo-dev-client",
        "expo-splash-screen",
        "expo-image-picker",
        "expo-av",
        "expo-updates",
        "@react-native-firebase/app",
        "expo-notifications",
        "@react-native-google-signin/google-signin"
      ],
      extra: {
        eas: {
          projectId: "65b7d342-ce66-4baa-9507-071987162a44"
        },
        isDebug: IS_DEV
      },
      runtimeVersion: {
        policy: "sdkVersion"
      },
    }
  }


  return appConfig
}
export default createAppConfig()
