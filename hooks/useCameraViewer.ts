// Packages Imports
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";

// Local Imports
import { CameraTypeProps, PermissionsProps } from "../types/HooksTypes";

// custom hook to manage camera operations
export default function useCameraViewer() {
    const [HasPermission, SetHasPermission] = useState<PermissionsProps>("LOADING");
    const [CameraType, SetCameraType] = useState<CameraTypeProps>("front");

    useEffect(() => {
        GetPermissions()
    }, [])

    // function to get permission
    const GetPermissions = async () => {
        try {
            const response = await Camera.requestCameraPermissionsAsync();

            if (response.canAskAgain === false) SetHasPermission("DENIED");
            else if (response.granted) SetHasPermission("AUTHORIZED");
            else SetHasPermission("UNAUTHORIZED");
        } catch (error) {
            SetHasPermission("UNAUTHORIZED");
        }
    };

    // change camera view
    const ChangeCameraType = () => {
        if (CameraType === "front") SetCameraType("back");

        else SetCameraType("front");
    };

    // return the response
    return { GetPermissions, HasPermission, CameraType, ChangeCameraType };
}