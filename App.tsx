// Packages Imports
import { StyleSheet, View } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

// Local Imports
import ColorPalette from "./utils/ColorPalette";
import PermissionsView from "./components/PermissionsView";
import Rectangle from "./components/Rectangle";
import useCameraViewer from "./hooks/useCameraViewer";
import useFaceDetector from "./hooks/useFaceDetector";

// default export
export default function App() {
  const { CameraType, ChangeCameraType, GetPermissions, HasPermission } = useCameraViewer();
  const { Faces, faceDetectorConfigs, onFacesDetected } = useFaceDetector();

  return (
    <View style={styles.container}>
      <PermissionsView HasPermission={HasPermission} GetPermission={GetPermissions} />

      {HasPermission === "AUTHORIZED" ? (
        <>
          <Camera
            style={styles.camera}
            type={CameraType}
            ratio="16:9"
            onFacesDetected={onFacesDetected}
            faceDetectorSettings={faceDetectorConfigs}
          />

          {Faces.map((face, index) => (
            <Rectangle key={index.toString()} face={face} />
          ))}

          <Ionicons
            name="camera-reverse"
            size={50}
            color={ColorPalette.white}
            style={styles.reverseIcon}
            onPress={ChangeCameraType}
          />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPalette.black,
  },
  camera: {
    flex: 1,
  },
  reverseIcon: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
});
