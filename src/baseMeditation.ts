/** @format */

import { State } from "src/types";
import i18n from "~i18n";

export const MeditationOnTheMandala: State.BasePractice = {
	id: "32c996f7-13e6-4604-966d-b96a8bf0e7c3",
	image: require("assets/BaseMeditationImage/Mandala.png"),
	description: i18n.t("a7be1d0d-f236-42d8-bd41-833e611f7c8d"),
	name: i18n.t("32c996f7-13e6-4604-966d-b96a8bf0e7c3"),
	instruction: {
		id: "3964f8f0-058c-47d0-b886-63926d02cd4e",
		body: [
			{ text: "Выбери одну из предложенных мандал\n" },
			{ text: "Мандала по возможности располагается на уровне глаз и на расстоянии вытянутой руки.\n" },
			{
				text: "Сядь в комфортное положение. Лучше если твоя спина будет прямая, но если физиологически это трудно и приносит дискомфорт то откинься, пусть у спины будет опора. Во время медитации тебя не должны отвлекать дискомфортные ощущения.\n",
			},
			{
				text: "Закрой глаза и сделай от 9 до 21 мягких, плавных глубоких циклов вдоха-выдоха. Между вдохом и выдохом не делай пауз. С каждым выдохом расслабляй тело глубже и глубже.\n",
			},
			{
				text: "Открой глаза сфокусируй взгляд в центре мандалы, старайся смотреть фиксировано в центр мандалы и не двигать глазными яблоками. Периодически наблюдай за телом, оно должно быть расслабленным.\n",
			},
			{
				text: "Начни рассматривать мандалу с внешней части и постепенно передвигайся к центру.\n",
			},
			{
				text: "Не отвлекайся на мысли, чувства, телесные ощущения, мечтания, воспоминания и желания. Если отвлекся (это непременно будет в начале с периодичностью и это нормально), просто возвращай внимание к мандале.\n",
			},
			{
				text: "После того как завершил практику закрой глаза и 2-3 минуты наблюдай мандалу образно на сетчатке глаза.\n",
			},
			{
				text: "Начни с малого времени и двигайся постепенно увеличивая время. Время практики от 5 минут (минимально) до 1 часа 30 минут\n",
			},
		],
		description:
			"Мандала медитация эффективный инструмент для успокоения психики, очищения ума от беспорядка и хаоса. Это непревзойденный инструмент для тех , кто с трудом усиживается на месте и имеет проблемы со сосредоточением своего внимания.",
		title: "Мандала медитация",
	},
};

export const MeditationOnTheNose: State.BasePractice = {
	id: "9ce4657e-2d0a-405a-b02f-408dd76cc8f7",
	image: require("assets/BaseMeditationImage/Nose.png"),
	description: i18n.t("a9634c1e-7db9-4cdf-8ff0-75154aa40bdb"),
	name: i18n.t("6dff586b-050e-4476-9b9f-8fd5c1114afa"),
	instruction: {
		id: "730f392a-5b7e-4f6b-9e65-0023321f7aec",
		body: [
			{ text: "Найди тихое, удобное место где тебя не будут отвлекать\n" },
			{
				text: "Сядь в комфортное положение. Лучше если твоя спина будет прямая, но если физиологически это трудно и приносит дискомфорт то откинься, пусть у спины будет опора. Во время медитации тебя не должны отвлекать дискомфортные ощущения.\n\nЗакрой глаза и сделай от 9 до 21 мягких, плавных глубоких циклов вдоха-выдоха. Между вдохом и выдохом не делай пауз. С каждым выдохом расслабляй тело глубже и глубже.\n",
			},
			{
				text: "Установи таймер и закрой глаза. Вдох и выдох делаются через нос. Дыши естественно, пусть процесс дыхания происходит естественно.\n",
			},
			{
				text: "Направь фокус внимания на кончики ноздрей, ощущай поток и прикосновения воздуха от вдыхаемого и выдыхаемого воздуха. Глаза на протяжении всей практики закрыты.\n",
			},
			{
				text: "Во время всего процесса удерживай внимание на кончиках ноздрей. Осознавай ощущения от дыхания. Не отвлекайся на мысли, чувства, телесные ощущения, мечтания, воспоминания и желания.\n",
			},
			{
				text: "Если отвлекся (это непременно будет в начале с периодичностью и это нормально), просто возвращай внимание к ноздрям.\n",
			},
			{
				text: "Начни с малого времени и двигайся постепенно увеличивая время. Время практики от 5 минут (минимально) до 1 часа 30 минут\n",
			},
		],
		description:
			"Медитация на кончик носа позволит развить навык концентрации и эффективного распределения энергии внимания. Это позволит быстро и качественно организовывать жизненные процессы и наводить порядок в своем уме.",
		title: "Медитация на кончик носа «Анапанасати-йога»",
	},
};

export const PlayerMeditationDot: State.BasePractice = {
	id: "4b134d62-3507-4d35-9168-289fd7c0172b",
	image: require("assets/BaseMeditationImage/dot.png"),
	description: i18n.t("084bfa58-3ff7-4775-9831-fadc97f4c38e"),
	name: i18n.t("ace79835-8758-4611-9dea-bcec03a77aed"),
	instruction: {
		id: "b946f4e6-fe31-48db-8fe1-e3febdb9b268",
		body: [
			{
				text: "Ты можешь выполнять эту технику на точку нарисованную на бумаге или на одну из предложенных виртуальных.\n",
			},
			{
				text: "Точка по возможности располагается на уровне глаз и на расстоянии вытянутой руки.\n",
			},
			{
				text: "Сядь в комфортное положение. Лучше если твоя спина будет прямая, но если физиологически это трудно и приносит дискомфорт то откинься, пусть у спины будет опора. Во время медитации тебя не должны отвлекать дискомфортные ощущения.\n",
			},
			{
				text: "Закрой глаза и сделай от 9 до 21 мягких, плавных глубоких циклов вдоха-выдоха. Между вдохом и выдохом не делай пауз. С каждым выдохом расслабляй тело глубже и глубже.\n",
			},
			{
				text: "Открой глаза сфокусируй взгляд на точке, старайся смотреть фиксировано в центр точки и не двигать глазными яблоками. Периодически наблюдай за телом, оно должно быть расслабленным.\n",
			},
			{
				text: "Не обращай внимание на оптические «глюки»\n",
			},
			{
				text: "Не отвлекайся на мысли, чувства, телесные ощущения, мечтания, воспоминания и желания. Если отвлекся (это непременно будет в начале с периодичностью и это нормально), просто возвращай внимание к точке.\n",
			},
			{
				text: "После того как завершил практику закрой глаза и 2-3 минуты наблюдай точку образно на сетчатке глаза.\n",
			},
			{
				text: "Начни с малого времени и двигайся постепенно увеличивая время. Время практики от 5 минут (минимально) до 1 часа 30 минут.\n",
			},
		],
		description:
			"Современный способ жизни (активный серфинг в интернете, социальные сети, телевизор, большой объем входящей информации и т.д) приводит к тому, что внимание человека становится поверхностным и ветренным. Медитация на точку является крайне эффективной техникой для устранения рассеянного внимания.",
		title: "Медитация на точку «Касину»",
	},
};

export const MeditationOnTheCandle: State.BasePractice = {
	id: "e6e39f7b-d2c7-4e57-8f97-773838695f7e",
	image: require("~assets/candale.png"),
	description:
		"Это непревзойденный инструмент для тех , кто с трудом усиживается на месте и имеет проблемы со сосредоточением своего внимания.",
	name: "Медитация на пламя свечи «Тратака»",
	instruction: {
		id: "24731499-bf34-41bd-b592-512e70b2fb2b",
		body: [
			{ text: "Tы можешь выполнять эту технику на реальную свечу или на одну из предложенных виртуальных\n" },
			{ text: "Свеча или телефон по возможности располагается на уровне глаз и на расстоянии вытянутой руки.\n" },
			{
				text: "Сядь в комфортное положение. Лучше если твоя спина будет прямая, но если физиологически это трудно и приносит дискомфорт то откинься, пусть у спины будет опора. Во время медитации тебя не должны отвлекать дискомфортные ощущения\n",
			},
			{
				text: "Закрой глаза и сделай от 9 до 21 мягких, плавных глубоких циклов вдоха-выдоха. Между вдохом и выдохом не делай пауз. С каждым выдохом расслабляй тело глубже и глубже.\n",
			},
			{
				text: "Открой глаза сфокусируй взгляд на пламени, старайся смотреть фиксировано и не двигать глазными яблоками. Периодически наблюдай за телом, оно должно быть расслабленным.\n",
			},
			{
				text: "Не отвлекайся на мысли, чувства, телесные ощущения, мечтания, воспоминания и желания. Если отвлекся (это непременно будет в начале с периодичностью и это нормально), просто возвращай внимание к пламени.\n",
			},
			{
				text: "После того как завершил практику закрой глаза и 2-3 минуты наблюдай пламя образно на сетчатке глаза.\n",
			},
			{
				text: "Начни с малого времени и двигайся постепенно увеличивая время. Время практики от 5 минут (минимально) до 1 часа 30 минут.\n",
			},
		],
		description:
			"Тратака – это способ взять под контроль свое внимание и снизить уровень неконтролируемого мысленного шума. С помощью этой техники ты снимешь усталось с глаз и предотвратишь ухудшения зрения. Способствует принятию оптимальных решений.",
		title: "Медитация на пламя свечи «Тратака»",
	},
};
