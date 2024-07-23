import { Impact } from "./impact";

export class Enlil {
    modelCompletionTime: string;
    au: number;
    estimatedShockArrivalTime: string | null;
    estimatedDuration: string | null;
    rmin_re: number | null;
    kp_18: number | null;
    kp_90: number | null;
    kp_135: number | null;
    kp_180: number | null;
    isEarthGB: boolean;
    link: string;
    impactList: Impact[] | null;
    cmeIDs: string[];

    constructor(
        modelCompletionTime: string,
        au: number,
        estimatedShockArrivalTime: string | null,
        estimatedDuration: string | null,
        rmin_re: number | null,
        kp_18: number | null,
        kp_90: number | null,
        kp_135: number | null,
        kp_180: number | null,
        isEarthGB: boolean,
        link: string,
        impactList: Impact[] | null,
        cmeIDs: string[]
    ) {
        this.modelCompletionTime = modelCompletionTime;
        this.au = au;
        this.estimatedShockArrivalTime = estimatedShockArrivalTime;
        this.estimatedDuration = estimatedDuration;
        this.rmin_re = rmin_re;
        this.kp_18 = kp_18;
        this.kp_90 = kp_90;
        this.kp_135 = kp_135;
        this.kp_180 = kp_180;
        this.isEarthGB = isEarthGB;
        this.link = link;
        this.impactList = impactList;
        this.cmeIDs = cmeIDs;
    }
}