import { Enlil } from "./enlil";

export class CmeAnalysis {
    isMostAccurate: boolean;
    time21_5: string;
    latitude: number;
    longitude: number | null;
    halfAngle: number;
    speed: number;
    type: string;
    featureCode: string;
    imageType: string;
    measurementTechnique: string;
    note: string;
    levelOfData: number;
    tilt: number | null;
    minorHalfWidth: number | null;
    speedMeasuredAtHeight: number | null;
    submissionTime: string;
    link: string;
    enlilList: Enlil[] | null;

    constructor(
        isMostAccurate: boolean,
        time21_5: string,
        latitude: number,
        longitude: number | null,
        halfAngle: number,
        speed: number,
        type: string,
        featureCode: string,
        imageType: string,
        measurementTechnique: string,
        note: string,
        levelOfData: number,
        tilt: number | null,
        minorHalfWidth: number | null,
        speedMeasuredAtHeight: number | null,
        submissionTime: string,
        link: string,
        enlilList: Enlil[] | null
    ) {
        this.isMostAccurate = isMostAccurate;
        this.time21_5 = time21_5;
        this.latitude = latitude;
        this.longitude = longitude;
        this.halfAngle = halfAngle;
        this.speed = speed;
        this.type = type;
        this.featureCode = featureCode;
        this.imageType = imageType;
        this.measurementTechnique = measurementTechnique;
        this.note = note;
        this.levelOfData = levelOfData;
        this.tilt = tilt;
        this.minorHalfWidth = minorHalfWidth;
        this.speedMeasuredAtHeight = speedMeasuredAtHeight;
        this.submissionTime = submissionTime;
        this.link = link;
        this.enlilList = enlilList;
    }
}