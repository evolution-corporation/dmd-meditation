/** @format */

import type { ExpoConfig } from "expo/config";
import { version } from "./package.json";

function generateConfig(): ExpoConfig {
	const appName = process.env.APP_VARIANT === "dev" ? "DMD Dev" : "dmd meditation";
	const appUrl =
		process.env.APP_VARIANT === "dev" ? "com.evodigital.dmdmeditation+dev" : "com.evodigital.dmdmeditation";
	const apiURL =
		process.env.APP_VARIANT === "prod"
			? "api.evodigital.one"
			: process.env.APP_VARIANT === "beta"
			? "beta.api.evodigital.one"
			: "dev.api.evodigital.one";

	const toDay = new Date();
	const date = {
		date: toDay.getDate() < 10 ? "0" + toDay.getDate() : toDay.getDate(),
		month: toDay.getMonth() < 10 ? "0" + toDay.getMonth() : toDay.getMonth(),
		year: toDay.getFullYear(),
		hour: toDay.getHours() < 10 ? "0" + toDay.getHours() : toDay.getHours(),
	};
	let versionCode = Number(`${date.year}${date.month}${date.date}${date.hour}`);

	const plugins: (string | [] | [string] | [string, any])[] = [
		"expo-dev-client",
		"expo-splash-screen",
		"expo-image-picker",
		"expo-av",
		"expo-updates",
		"@react-native-firebase/app",
		[
			"expo-notifications",
			{
				sounds: ["./assets/triggerSounds/bells.wav"],
			},
		],
		"@react-native-google-signin/google-signin",
		[
			"expo-build-properties",
			{
				ios: {
					useFrameworks: "static",
				},
			},
		],
	]
	// if (process.env.APP_VARIANT === "dev") plugins.push("expo-community-flipper")
	return {
		jsEngine: "hermes",
		name: appName,
		owner: "evo_digital",
		slug: "dmd-meditation",
		privacy: process.env.APP_VARIANT === "dev" ? "hidden" : "public",
		description: "Авторские медитации и дыхательные практики от профессора психологии Козлова В.В.",
		version,
		orientation: "portrait",
		githubUrl: "https://github.com/evolution-corporation/dmd-meditation",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#FFFFFF",
		},
		// updates: {
		// 	fallbackToCacheTimeout: 0,
		// 	url: "https://u.expo.dev/fc1fa36b-31d7-4db1-b912-d882e6de7a27",
		// },
		assetBundlePatterns: ["**/*"],
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#FFFFFF",
			},
			icon: "./assets/icon.png",
			package: appUrl.replace("+", "_"),
			googleServicesFile: "./google-services.json",
			permissions: ["android.permission.RECORD_AUDIO"],
			versionCode,
		},
		ios: {
			googleServicesFile: "./GoogleService-Info.plist",
			bundleIdentifier: appUrl.replace("+", "-"),
			buildNumber: versionCode.toString(),
			infoPlist: {
				UIBackgroundModes: ["audio"],
			},
			usesAppleSignIn: true,
		},
		plugins,
		extra: {
			eas: {
				projectId: "360fff0b-5a9b-41de-9bb3-016641a64554",
			},
			isDebug: process.env.APP_VARIANT !== "dev",
			apiURL,
			GoogleWebClientId: process.env.GOOGLE_WEB_CLIENT_ID,
		},
		runtimeVersion: {
			policy: "sdkVersion",
		},
	};
}

export default generateConfig();
