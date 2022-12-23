/** @format */

import React from "react";
import { View, Text, ActivityIndicator, Pressable } from "react-native";

import { TimeLine, PlayerControl } from "src/components/dump";

import i18n from "~i18n";
import gStyle from "~styles";

import MeditationTimeInBox from "src/components/dump/meditation-time-in-box";
import BlackCircle from "src/components/dump/black-circle";
import DefaultText from "src/components/Text/default-text";

import PlayIcon from "assets/icons/PlayWhite.svg";
import ViewFullSpace, { Direction as DirectionFullSpace } from "src/components/layouts/view-full-space";
import ViewPaddingList, { Direction as DirectionPaddingList } from "src/components/containers/view-padding-list";
import ViewFullWidth, {
	Direction as DirectionFullWidth,
	PositionElements,
} from "src/components/layouts/view-full-width";
import BackgroundSoundButton from "src/components/dump/background-sound-button";

export enum Status {
	Loading,
	Play,
	Pause,
	Change,
	Init,
	Wait,
}

export interface PlayerViewProperty {
	currentMilliseconds: number;
	lengthMilliseconds: number;
	isSupportBackgroundSound?: boolean;
	onChangeCurrentMilliseconds: (millisecond: number) => Promise<void>;
	onChangeStatus: (status: Status.Play | Status.Pause) => Promise<void>;
	status: Status;
	id?: string;
	description?: string;
	rewindMillisecond?: number;
	onChangeStart: () => Promise<void>;
	onChangeEnd: () => Promise<void>;
}

const PlayerView: React.FC<PlayerViewProperty> = property => {
	const {
		currentMilliseconds,
		lengthMilliseconds,
		onChangeCurrentMilliseconds,
		status,
		onChangeEnd,
		isSupportBackgroundSound,
		onChangeStart,
		onChangeStatus,
		description,
		rewindMillisecond = 15_000,
	} = property;
	const reference = React.useRef<React.ElementRef<typeof TimeLine>>(null);

	React.useEffect(() => {
		reference.current?.setValue(currentMilliseconds / lengthMilliseconds);
	}, [currentMilliseconds]);

	if (status === Status.Init || status === Status.Loading) {
		return (
			<ViewFullSpace
				style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", alignItems: "center" }}
				direction={DirectionFullSpace.TopBottom}
			>
				<ViewPaddingList paddings={[0, 18]} direction={DirectionPaddingList.Vertical}>
					{status === Status.Loading ? (
						<BlackCircle size={100}>
							<ActivityIndicator color={"#FFF"} />
						</BlackCircle>
					) : (
						<Pressable onPress={() => onChangeStatus(Status.Play)}>
							<BlackCircle size={100}>
								<PlayIcon />
							</BlackCircle>
						</Pressable>
					)}
					{description === undefined ? <></> : <DefaultText>{description}</DefaultText>}
					<MeditationTimeInBox milliseconds={lengthMilliseconds} />
				</ViewPaddingList>
			</ViewFullSpace>
		);
	}
	if (status === Status.Wait) {
		const seconds = Math.floor(currentMilliseconds / 1000);
		const time = `${currentMilliseconds < 600_000 ? "0" : ""}${Math.floor(currentMilliseconds / 60_000)}:${
			seconds % 60 < 10 ? "0" : ""
		}${seconds % 60}`;
		return (
			<ViewFullSpace
				style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", alignItems: "center" }}
				direction={DirectionFullSpace.TopBottom}
			>
				<BlackCircle size={196}>
					<Text style={{ color: "#FFF", fontSize: 48, ...gStyle.font("400") }}>{time}</Text>
				</BlackCircle>
			</ViewFullSpace>
		);
	}

	const patternVisibleTime = lengthMilliseconds > 3600 * 1000 ? "%-H:%M:%S" : "%M:%S";
	return (
		<ViewFullSpace direction={DirectionFullSpace.TopBottom}>
			<View />
			<PlayerControl
				isPlay={status === Status.Play || status === Status.Change}
				pause={() => onChangeStatus(Status.Pause)}
				play={() => onChangeStatus(Status.Play)}
				stepBack={async () => {
					await onChangeCurrentMilliseconds(
						currentMilliseconds > rewindMillisecond ? currentMilliseconds - rewindMillisecond : 0
					);
					await onChangeEnd();
				}}
				stepForward={async () => {
					await onChangeCurrentMilliseconds(
						currentMilliseconds + rewindMillisecond < lengthMilliseconds
							? currentMilliseconds + rewindMillisecond
							: lengthMilliseconds
					);
					await onChangeEnd();
				}}
				rewindMillisecond={rewindMillisecond}
			/>
			<ViewFullWidth direction={DirectionFullWidth.TopBottom} style={{ height: 122 }}>
				<TimeLine
					ref={reference}
					onChange={async percent => {
						onChangeCurrentMilliseconds(lengthMilliseconds * percent);
					}}
					onStartChange={() => onChangeStart()}
					onEndChange={() => onChangeEnd()}
				/>
				<ViewFullWidth direction={DirectionFullWidth.LeftRight} mainPositionElements={PositionElements.StartEnd}>
					<DefaultText color={"#FFFFFF"} key={"current"}>
						{i18n.strftime(new Date(currentMilliseconds - 5 * 3600 * 1000), patternVisibleTime)}
					</DefaultText>
					<DefaultText color={"#FFFFFF"} key={"all"}>
						{i18n.strftime(new Date(lengthMilliseconds - 5 * 3600 * 1000), patternVisibleTime)}
					</DefaultText>
				</ViewFullWidth>
				{isSupportBackgroundSound ? <BackgroundSoundButton /> : <></>}
			</ViewFullWidth>
		</ViewFullSpace>
	);
};

export default PlayerView;
