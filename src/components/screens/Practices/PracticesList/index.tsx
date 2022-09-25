import React, { useMemo, useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  ScrollView,
  ImageSourcePropType,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { DoubleColorView } from "~components/containers";
import Tools from "~core";
import { useCountMeditation } from "./hooks";
import type { PracticesCompositeScreenProps } from "~routes/index";
import { TypeMeditation } from "~modules/meditation/types";
import { useShowIntro } from "~routes/hook";
// import { useCountMeditation } from "./hooks";

const PracticesList: PracticesCompositeScreenProps = ({ navigation }) => {
  useShowIntro(
    "@IsFirstShownPractices",
    () => navigation.navigate("IntroPractices"),
    [navigation.isFocused()]
  );

  const [getPaddingTopFunc, setGetPaddingTopFunc] = useState<{
    f: (width: number) => number;
  } | null>(null);
  const [widthTitle, setWidthTitle] = useState<number | null>(null);

  const topPaddingContent = useMemo(() => {
    if (!getPaddingTopFunc || !widthTitle) return null;
    return getPaddingTopFunc.f(widthTitle);
  }, [getPaddingTopFunc, widthTitle]);

  const refFlatlist = useRef<FlatList>(null);

  return (
    <DoubleColorView
      onFunctionGetPaddingTop={(getPaddingTop) => {
        setGetPaddingTopFunc({ f: getPaddingTop });
      }}
      hideElementVioletPart
    >
      <ScrollView
        contentContainerStyle={[
          topPaddingContent
            ? { paddingTop: topPaddingContent, paddingBottom: 20 }
            : null,
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={[styles.title, styles.contentVerticalMargin]}
          onLayout={({ nativeEvent: { layout } }) => {
            if (!widthTitle) setWidthTitle(layout.width);
          }}
        >
          {Tools.i18n.t("db8e7216-be7c-4ecc-8ddd-0cf9ff83f419")}
        </Text>
        <FlatList
          ref={refFlatlist}
          onLayout={() => {
            refFlatlist.current?.scrollToIndex({
              index: 0,
              viewOffset: -40,
              animated: false,
            });
          }}
          data={CategoryMeditation}
          initialScrollIndex={0}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Animated.View style={{ width: 92, height: 140 }}>
                <Image source={item.image} style={styles.imageSmall} />
                <Text style={styles.textNameSmall} adjustsFontSizeToFit>
                  {Tools.i18n.t(item.name)}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `${item.id}_small`}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          inverted={true}
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsHorizontalScrollIndicator={false}
        />
        {CategoryMeditation.map((item, index) => {
          const count = useCountMeditation(item.id);
          const opacity = useSharedValue(1);

          const animatedStyleText = useAnimatedStyle(() => ({
            transform: [
              { translateY: interpolate(opacity.value, [0.3, 1], [0, 35]) },
              { scaleY: interpolate(opacity.value, [0.3, 1], [1.5, 1]) },
            ],
          }));
          const offSetY = useRef<number | null>(null);
          if (count === 0) return null;
          return (
            <Pressable
              key={`${item.id}_normall`}
              onPress={() => {
                navigation.navigate("SelectPractices", {
                  typeMeditation: item.id,
                });
              }}
              onPressIn={() => {
                opacity.value = withTiming(0.3);
              }}
              onPressOut={() => {
                opacity.value = withTiming(1);
              }}
              onLayout={({ nativeEvent: { layout } }) => {
                if (offSetY.current === null) {
                  offSetY.current = layout.y;
                }
              }}
            >
              <Animated.View
                style={[
                  styles.backgroundNormal,
                  index !== CategoryMeditation.length - 1
                    ? { marginBottom: 20 }
                    : null,
                  styles.contentVerticalMargin,
                ]}
              >
                <ImageBackground
                  source={item.image}
                  style={styles.imageNormal}
                  resizeMode={"contain"}
                  imageStyle={{ marginBottom: 78 }}
                >
                  <Animated.View
                    style={[styles.backgroundTextNormal, animatedStyleText]}
                  >
                    <Text style={styles.textNameNormal}>
                      {Tools.i18n.t(item.name)}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.textDescription}>
                        {Tools.i18n.t(item.description)}
                      </Text>
                      <View style={{ alignItems: "center" }}>
                        <Feather
                          name={"headphones"}
                          size={25}
                          color={"#FFFFFF"}
                        />
                        <Text style={styles.countMeditation}>
                          {Tools.i18n.t(
                            "9790bd12-4b66-419f-a3e0-705134494734",
                            {
                              count,
                            }
                          )}
                        </Text>
                      </View>
                    </View>
                  </Animated.View>
                </ImageBackground>
              </Animated.View>
            </Pressable>
          );
        })}
      </ScrollView>
    </DoubleColorView>
  );
};

const styles = StyleSheet.create({
  imageSmall: {
    width: 92,
    height: 92,
    borderRadius: 10,
  },
  contentVerticalMargin: {
    marginHorizontal: 20,
  },
  title: {
    color: "rgba(112, 45, 135, 1)",
    fontSize: 24,
    ...Tools.gStyle.font("600"),
    alignSelf: "flex-start",
  },
  textNameSmall: {
    color: "rgba(112, 45, 135, 1)",
    fontSize: 13,
    textAlign: "center",
    ...Tools.gStyle.font("400"),
    width: "100%",
  },
  backgroundNormal: {
    borderRadius: 20,
    overflow: "hidden",
    height: ((Dimensions.get("screen").width - 40) * 290) / 335 + 30,
    backgroundColor: "#9765A8",
  },
  imageNormal: {
    width: Dimensions.get("screen").width - 40,
    height: ((Dimensions.get("screen").width - 40) * 290) / 335,
    justifyContent: "flex-end",
  },
  textNameNormal: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    ...Tools.gStyle.font("600"),
    marginBottom: 5,
    backgroundColor: "#9765A8",
  },
  backgroundTextNormal: {
    backgroundColor: "#9765A8",
    borderRadius: 20,
    minHeight: 119,
    paddingHorizontal: 20,
    paddingTop: 19,
    zIndex: 1,
  },
  textDescription: {
    fontSize: 14,
    lineHeight: 18,
    width: "70%",
    color: "#FFFFFF",
    ...Tools.gStyle.font("400"),
  },
  countMeditation: {
    fontSize: 12,
    color: "#FFFFFF",
    ...Tools.gStyle.font("400"),
  },
});

const CategoryMeditation: {
  name: string;
  image: ImageSourcePropType;
  description: string;
  id: TypeMeditation;
}[] = [
  {
    name: "71277706-2f5d-4ce8-bf26-d680176d3fb8",
    image: require("./assets/meditation1.png"),
    description: "ec0c8421-03d1-4755-956d-66a84d81d74a",
    id: "relaxation",
  },
  {
    name: "8566b563-b307-4943-ab52-d51c7e806a4c",
    image: require("./assets/meditation2.png"),
    description: "bb340c18-2a8b-4b7b-8250-80a865dca9b4",
    id: "directionalVisualizations",
  },
  {
    name: "c15d823e-8dd8-4eb7-b9f5-87c9845ac397",
    image: require("./assets/meditation3.png"),
    description: "c54bff96-21eb-4f10-8ad6-090e06f2eef9",
    id: "breathingPractices",
  },
  {
    name: "0d63a21e-eecc-45cc-9085-86b97c88d713",
    image: require("./assets/meditation4.png"),
    description: "ef09ec88-afda-4fef-b68b-02b433919e50",
    id: "basic",
  },
];

export default PracticesList;
