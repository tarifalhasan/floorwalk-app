import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const PaymentBottomSheet = () => {
  const bottomSheetRef = useRef(null);
  const handleClosePress = () => bottomSheetRef.current.close();
  const handleOpenPress = () => bottomSheetRef.current.open();

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View>
      <BottomSheet ref={bottomSheetRef}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default PaymentBottomSheet;

const styles = StyleSheet.create({});
