// Packages Imports
import React from "react";
import { View, StyleSheet, Text, ActivityIndicator, Linking, Button, Platform } from "react-native";

// Local Imports
import AppContainer from "./AppContainer";
import ColorPalette from "../utils/ColorPalette";
import { PermissionViewProps } from "../types/ComponentTypes";

// function component for PermissionsView
function PermissionsView(props: PermissionViewProps) {
  // Destructuring props
  const { HasPermission, GetPermission } = props;

  if (Platform.OS === "web") {
    return (
      <AppContainer style={styles.container}>
        <Text style={styles.text}>Face Detector has not yet been implemented for Web Platform</Text>
      </AppContainer>
    );
  }

  if (HasPermission === "LOADING") {
    return (
      <AppContainer style={styles.container}>
        <Text style={styles.text}>Getting User Permission</Text>
        <ActivityIndicator size={"large"} color={ColorPalette.white} />
      </AppContainer>
    );
  }

  if (HasPermission === "DENIED") {
    return (
      <AppContainer style={styles.container}>
        <Text style={styles.text}>
          You have denied permissions. Go to settings to allow Camera permission
        </Text>
        <Button title="Give Permissions" onPress={() => Linking.openSettings()} />
      </AppContainer>
    );
  }

  if (HasPermission === "UNAUTHORIZED") {
    return (
      <AppContainer style={styles.container}>
        <Text style={styles.text}>No access to camera</Text>

        <Button title="Give Permissions" onPress={GetPermission ? GetPermission : () => {}} />
      </AppContainer>
    );
  }

  // render
  return <View></View>;
}

// exports
export default PermissionsView;

// styles
const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", padding: 15 },
  text: { color: ColorPalette.white, fontSize: 20, textAlign: "center" },
});
