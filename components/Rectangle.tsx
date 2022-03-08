// Packages Imports
import { View, StyleSheet } from "react-native";

// Local Imports
import ColorPalette from "../utils/ColorPalette";
import { RectangleProps } from "../types/ComponentTypes";

// function component for Rectangle
function Rectangle(props: RectangleProps) {
  // Destructuring props
  const { face = {} } = props;

  const rectangleStyle = [
    styles.container,
    {
      width: face?.bounds?.size?.width,
      height: face?.bounds?.size?.height,
      top: face?.bounds?.origin?.y,
      left: face?.bounds?.origin?.x,
    },
  ];

  // render
  return <View style={rectangleStyle}></View>;
}

// exports
export default Rectangle;

// styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: ColorPalette.red,
    position: "absolute",
  },
});
