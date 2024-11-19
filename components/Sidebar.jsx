import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

const RightSideModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Button to open modal */}
      <TouchableOpacity onPress={toggleModal} style={styles.openButton}>
        <Text style={styles.openButtonText}>Open Modal</Text>
      </TouchableOpacity>

      {/* Right-side Modal */}
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        style={styles.modal}
        onBackdropPress={toggleModal}
      >
        <View style={styles.modalContent}>
          {/* Modal Content */}
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.userEmail}>poojasatfale@gmail.com</Text>
          <Text style={styles.auditTitle}>Audit Rating</Text>
          <Text style={styles.rating}>4/5 ⭐⭐⭐⭐</Text>
          <Text style={styles.certificationScore}>
            Certification Score: 93/100
          </Text>

          {/* Close Button */}
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  openButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
  },
  openButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modal: {
    margin: 0, // Ensure the modal covers the full screen
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  modalContent: {
    width: "80%", // Adjust width for a sidebar effect
    height: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "#555",
    marginVertical: 10,
  },
  auditTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
  },
  rating: {
    fontSize: 16,
    color: "#ffa500",
    marginVertical: 10,
  },
  certificationScore: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "600",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#FF3B30",
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default RightSideModal;
