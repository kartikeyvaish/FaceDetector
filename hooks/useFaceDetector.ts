// Packages Imports
import { useState } from "react";
import { Face } from "expo-camera/build/Camera.types";
import * as FaceDetector from "expo-face-detector";

// face Detector Default Configs
const faceDetectorConfigs = {
    mode: FaceDetector.FaceDetectorMode.fast,
    detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
    runClassifications: FaceDetector.FaceDetectorClassifications.none,
    minDetectionInterval: 100,
    tracking: true,
}

// custom hook to manage face detector operations
export default function useFaceDetector() {
    // Local States
    const [Faces, SetFaces] = useState<Face[]>([]);

    // function to perform face detection
    const onFacesDetected = ({ faces }: Face[] | any) => SetFaces(faces);

    // return
    return { onFacesDetected, faceDetectorConfigs, Faces }
}