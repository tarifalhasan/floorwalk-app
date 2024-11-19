import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PaymentReport() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const [selectedItems, setSelectedItems] = useState({
    "Option 1": false,
    "Option 2": false,
    "Option 3": false,
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.label}>Field One</Text>
            <TextInput
              style={styles.input}
              value={formData.field1}
              onChangeText={(text) =>
                setFormData({ ...formData, field1: text })
              }
              placeholder="Enter field one"
            />
            <Text style={styles.label}>Field Two</Text>
            <TextInput
              style={styles.input}
              value={formData.field2}
              onChangeText={(text) =>
                setFormData({ ...formData, field2: text })
              }
              placeholder="Enter field two"
            />
          </View>
        );
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.label}>Field Three</Text>
            <TextInput
              style={styles.input}
              value={formData.field3}
              onChangeText={(text) =>
                setFormData({ ...formData, field3: text })
              }
              placeholder="Enter field three"
              multiline
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionTitle}>Review Details</Text>
            <View style={styles.reviewItem}>
              <Text style={styles.reviewLabel}>Field One:</Text>
              <Text style={styles.reviewValue}>{formData.field1}</Text>
            </View>
            <View style={styles.reviewItem}>
              <Text style={styles.reviewLabel}>Field Two:</Text>
              <Text style={styles.reviewValue}>{formData.field2}</Text>
            </View>
            <View style={styles.reviewItem}>
              <Text style={styles.reviewLabel}>Field Three:</Text>
              <Text style={styles.reviewValue}>{formData.field3}</Text>
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionTitle}>Select Options</Text>
            {Object.keys(selectedItems).map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.checkboxContainer}
                onPress={() =>
                  setSelectedItems({
                    ...selectedItems,
                    [item]: !selectedItems[item],
                  })
                }
              >
                <View
                  style={[
                    styles.checkbox,
                    selectedItems[item] && styles.checkboxChecked,
                  ]}
                >
                  {selectedItems[item] && <Check size={16} color="#fff" />}
                </View>
                <Text style={styles.checkboxLabel}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>View Opportunity</Text>
      </View>
      <ScrollView style={styles.scrollView}>{renderStep()}</ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={currentStep === 3 ? handleSubmit : handleNext}
        >
          <Text style={styles.buttonText}>
            {currentStep === 3 ? "Submit" : "Next"}
          </Text>
          {currentStep !== 3 && <ChevronRight size={20} color="#fff" />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
  },
  stepContainer: {
    padding: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e1e1e1",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e1e1e1",
  },
  button: {
    backgroundColor: "#0066cc",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  reviewItem: {
    marginBottom: 16,
  },
  reviewLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  reviewValue: {
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#0066cc",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#0066cc",
  },
  checkboxLabel: {
    fontSize: 16,
  },
});
