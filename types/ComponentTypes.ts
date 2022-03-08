// Packges Imports
import { StyleProp, ViewStyle } from "react-native";
import { PermissionsProps } from "./HooksTypes";

// interface for AppContainer
export interface AppContainerProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

// interface for Permission View
export interface PermissionViewProps { HasPermission?: PermissionsProps; GetPermission?: () => void }

// interface for Rectangle
export interface RectangleProps {
    face?: {
        bounds?: {
            origin?: {
                x?: number;
                y?: number;
            };
            size?: {
                height?: number;
                width?: number;
            };
        };
        faceID?: number;
        rollAngle?: number;
        yawAngle?: number;
    };
}
