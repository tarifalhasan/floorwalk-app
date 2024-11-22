import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import Svg, { Circle, Mask, Path } from "react-native-svg";

const HomeHelpBottomModal = React.forwardRef(({ onChange }, ref) => {
  // Render Backdrop
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={ref}
      onChange={onChange}
      enableDismissOnClose
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View style={{ gap: hp(1.6) }}>
          {/* Help Header */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Image
              style={{
                width: hp(3.5),
                height: hp(3.5),
              }}
              source={require("@/assets/icons/privacy_tip.png")}
            />
            <Text style={styles.headerTitle}>Help</Text>
          </View>

          {/* Help Content */}
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={scale(50)}
            height={scale(50)}
            fill="none"
          >
            <Circle cx={25} cy={25} r={25} fill="#D7F1FF" />
            <Mask
              id="a"
              width={39}
              height={34}
              x={11}
              y={16}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "alpha",
              }}
            >
              <Path fill="#D9D9D9" d="M50 16.667H11.765V50H50z" />
            </Mask>
            <Path
              fill="#007DC1"
              d="M46.815 43.611v-2.857h-7.2v-8.571h-7.2V23.61h-9.6v2.857h7.2v8.572h7.2v8.571h9.6Z"
            />
          </Svg>
          <Text style={styles.helpTitle}>About Audit Assignment Process</Text>
          <Text style={styles.helpDescription}>
            The audits are assigned basis on right auditor profile match and
            time of audit application. It is an automated process and happens
            via system. Only applications applied from the portal are considered
            for assignment.
          </Text>

          <View style={styles.additionalInfo}>
            <Text
              style={{
                fontSize: scale(13),
                color: theme.colors.primary_100,
                fontWeight: "400",
              }}
            >
              Before visiting the center, call on the Centralized number of the
              SHOTT (18004199055). If the call gets unanswered within 3 attempts
              (After an interval of 2 hours) then, you can stop calling. If a
              call back is received please answer it and attach it as proof in
              the report.
            </Text>
          </View>
          <Pressable>
            <Text>Having Trouble?</Text>
          </Pressable>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: hp(2.5),
    paddingBottom: hp(2),
    paddingTop: hp(1),
  },
  headerTitle: {
    fontSize: hp(2),
    fontWeight: "700",
    color: theme.colors.primary_100,
  },
  helpTitle: {
    fontSize: scale(18),
    fontWeight: "700",
    color: theme.colors.primary_100,
  },
  helpDescription: {
    fontSize: scale(12),
    fontWeight: "400",
    color: theme.colors.neutral_600,
  },
  additionalInfo: {
    backgroundColor: "rgba(215, 241, 255, 0.25)",
    padding: scale(10),
    borderRadius: 10,
    gap: 8,
  },
});

export default HomeHelpBottomModal;
