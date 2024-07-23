export class Impact {
    isGlancingBlow: boolean;
    location: string;
    arrivalTime: string;

    constructor(isGlancingBlow: boolean, location: string, arrivalTime: string) {
        this.isGlancingBlow = isGlancingBlow;
        this.location = location;
        this.arrivalTime = arrivalTime;
    }
}