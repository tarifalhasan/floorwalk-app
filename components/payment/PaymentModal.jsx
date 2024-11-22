import Button from "@/components/Button";
import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PaymentHelpModal = React.forwardRef(({ onChange }, ref) => {
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
          <Image
            style={{
              width: hp(6.5),
              height: hp(6.5),
            }}
            source={require("@/assets/icons/stairs_2.png")}
          />
          <Text style={styles.helpTitle}>Payment Terms</Text>
          <Text style={styles.helpDescription}>
            Payment will be transferred into your bank account within{" "}
            <Text style={{ fontWeight: "700" }}>
              45 days from the month end of your report submission{" "}
            </Text>
            since all the reports are checked usually by the client on the month
            end.
          </Text>
          <Text style={styles.additionalInfo}>
            Once the payment is done from FloorWalk, it might take 24-48 hours
            to transfer the amount into your bank account depending on the
            working day and bank holidays. For any payment-related queries,
            please write us at{" "}
            <Text style={{ color: theme.colors.primary }}>
              accounts@floorwalk.in
            </Text>{" "}
            or you can click{" "}
            <Text style={{ fontWeight: "700" }}>Having Trouble?</Text>
          </Text>

          {/* Contact Button */}
          <Button
            style={{
              marginTop: hp(2),
            }}
            title={"Contact Now"}
          />
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
    fontSize: hp(2),
    fontWeight: "700",
    color: theme.colors.primary_100,
  },
  helpDescription: {
    fontSize: hp(1.8),
    fontWeight: "400",
    color: theme.colors.neutral_600,
  },
  additionalInfo: {
    fontSize: hp(1.8),
    fontWeight: "400",
    color: theme.colors.primary_100,
  },
});

export default PaymentHelpModal;
