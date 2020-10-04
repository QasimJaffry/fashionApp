import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
const { width, height } = Dimensions.get("window");
import Slider, { HEIGHT_SLIDE, BORDER_RADIUS } from "./Slide";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash";
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import Dot from "./Dot";
import SubSlide from "./SubSlide";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: HEIGHT_SLIDE,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS - 25,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,

    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
});
const slides = [
  {
    label: "Relaxed",
    color: "#BFEAF5",
    footerTitle: "Find your Outfits",
    footerDescription:
      "Confused about your outfit? Fint the best outfit here!!!",
    photo: {
      uri: require("../../../assets/1.jpg"),
      width: 2766,
      height: 3551,
    },
  },
  {
    label: "Playful",
    color: "#BEECC4",
    footerTitle: "Wear it first, Enjoy it forever",
    footerDescription: "Explore hundreds of outfit ideas",
    photo: {
      uri: require("../../../assets/2.jpg"),
      width: 2766,
      height: 3551,
    },
  },
  {
    label: "Excentric",
    color: "#ccc9",
    footerTitle: "Your way, Your style",
    footerDescription: "Create your own unique style and look amazing",
    photo: {
      uri: require("../../../assets/3.jpg"),
      width: 2766,
      height: 3551,
    },
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    footerTitle: "Feel Good by Looking Good",
    footerDescription: "Explore the latest trends in fashion",
    photo: {
      uri: require("../../../assets/4.jpg"),
      width: 2766,
      height: 3551,
    },
  },
];

const Onboarding = (props) => {
  const scroll = useRef(null);
  // TODO: useScrollEvent perhaps?
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map((slide, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={slide.photo.uri}
                style={{
                  width: width - BORDER_RADIUS,
                  height:
                    ((width - BORDER_RADIUS) * slide.photo.height) /
                    slide.photo.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          horizontal
          ref={scroll}
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ label, photo }, index) => (
            <Slider
              key={index}
              right={!!(index % 2)}
              {...{ label, photo }}
              index={index}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              marginTop: 30,
              transform: [
                {
                  translateX: multiply(x, -1),
                },
              ],
            }}
          >
            {slides.map(({ footerTitle, footerDescription }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  key={index}
                  onPress={() => {
                    if (last) {
                      props.navigation.navigate("Welcome");
                    }
                    if (scroll.current) {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ footerTitle, footerDescription, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
