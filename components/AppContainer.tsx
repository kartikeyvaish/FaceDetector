// Packages Imports
import { View, StyleSheet } from "react-native";

// Local Imports
import { AppContainerProps } from "../types/ComponentTypes";
import ColorPalette from "../utils/ColorPalette";

// function component for AppContainer
function AppContainer(props: AppContainerProps) {
  // Destructuring props
  const { children, style } = props;

  // render
  return <View style={[styles.container, style]}>{children}</View>;
}

// exports
export default AppContainer;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPalette.black,
  },
});
