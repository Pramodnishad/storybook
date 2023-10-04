import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions
} from "react-native";
import { Colors, SIZES } from "../../../../../constants/Index";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../../Login/Button/Button";

const Width = Dimensions.get("window").width;
export interface TextCardProps {
  heading: string;
  text: string;
}

const TextBox = ({ heading, text }: TextCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [combinedText, setCombinedText] = useState(heading + "\n" + text);

  const saveChanges = () => {
    // You can handle saving logic here
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingBar}>{heading}</Text>
        <TouchableOpacity onPress={() => setIsEditing(true)}>
          <AntDesign name="edit" size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{text}</Text>

      {/* Edit Modal */}
      <Modal animationType="slide" transparent={true} visible={isEditing}>
        <View style={styles.modalCenteredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeading}>{heading}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsEditing(false)}
              >
                <AntDesign name="close" size={24} color={Colors.black} />
              </TouchableOpacity>
            </View>
            <TextInput
              value={combinedText}
              onChangeText={setCombinedText}
              style={styles.modalTextInput}
              placeholder="Edit Heading & Text"
              multiline={true}
              numberOfLines={5}
            />
<View style={{marginTop:15}}>
<CustomButton 
              type="primary"
              label="Save Changes"
              size="large"
              onPress={saveChanges}
              
            />
</View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 319,
    backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 8,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  headingBar: {
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    fontSize: SIZES.large,
    color: Colors.lightGreen,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 30,
  },
  textInput: {
    fontSize: SIZES.large,
    color: Colors.lightGreen,

  },
  modalHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    flex: 1,
    color:Colors.tertiary
  
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }],
  },

  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    
  },
  modalView: {
    width:Width,
    height:330,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#00000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextInput: {
    width: "90%",
    padding: 20,
    marginBottom: 15,
    backgroundColor: Colors.gradientGray  ,
    borderRadius: 8,
    marginTop:15,

  },
});

export default TextBox;
