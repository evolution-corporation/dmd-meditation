import { ColorValue } from "react-native";
import Colors from "config/colors.json";

export default () => {
	let colorStylesAtArray: [string, object][] = [];
	for (const option of [
		["text", "color"],
		["background", "backgroundColor"],
	]) {
		const [nameElement, nameField] = option;
		if (String.prototype.toPascalCase === undefined) {
			throw new Error("Строка должна содержать метод toPascalCase");
		}
		colorStylesAtArray = [
			...colorStylesAtArray,
			...Object.entries(Colors).map<[string, object]>(([name, color]: [string, ColorValue]) => [
				nameElement + name.toPascalCase(),
				Object.fromEntries([[nameField, color]]),
			]),
		];
	}
	return Object.fromEntries(colorStylesAtArray);
};
