import { CmeAnalysis } from "./cmeAnalysis";
import { Instrument } from "./instrument";
import { LinkedEvent } from "./linkedEvent";

export class Cme {
    activityID: string;
    catalog: string;
    startTime: string;
    instruments: Instrument[];
    sourceLocation: string;
    activeRegionNum: number | null;
    note: string;
    submissionTime: string;
    versionId: number;
    link: string;
    cmeAnalyses: CmeAnalysis[];
    linkedEvents: LinkedEvent[] | null;

    constructor(
        activityID: string,
        catalog: string,
        startTime: string,
        instruments: Instrument[],
        sourceLocation: string,
        activeRegionNum: number | null,
        note: string,
        submissionTime: string,
        versionId: number,
        link: string,
        cmeAnalyses: CmeAnalysis[],
        linkedEvents: LinkedEvent[] | null
    ) {
        this.activityID = activityID;
        this.catalog = catalog;
        this.startTime = startTime;
        this.instruments = instruments;
        this.sourceLocation = sourceLocation;
        this.activeRegionNum = activeRegionNum;
        this.note = note;
        this.submissionTime = submissionTime;
        this.versionId = versionId;
        this.link = link;
        this.cmeAnalyses = cmeAnalyses;
        this.linkedEvents = linkedEvents;
    }
}
