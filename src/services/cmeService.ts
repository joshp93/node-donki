import { Request, Response } from "express";
import DonkiRequestService from "./donkiRequestService";
import { Cme } from "../models/classes/cme/cmeResponse";

class CmeService {

    private donkiRequestService: DonkiRequestService;

    constructor() {
        this.donkiRequestService = new DonkiRequestService();
    }

    public async getCMEs(req: Request, res: Response) {
        const dates = this.parseGetCMEParams(req);
        const startDateString = dates.startDate.toISOString();
        const endDateString = dates.endDate.toISOString();
        this.donkiRequestService.getRequest("CME", new URLSearchParams({
            startDate: startDateString,
            endDate: endDateString
        }))
            .then(response => {
                const cmeResponse = JSON.parse(response as string) as Cme[];
                res.json(cmeResponse);
            })
            .catch(error => res.status(500).json(error));
    }

    private parseGetCMEParams(req: Request) {
        const query = req.query;
        let startDate: Date;
        let endDate: Date;
        if (!query.startDate) {
            startDate = new Date();
            startDate.setHours(startDate.getHours() - 1)
        } else {
            startDate = new Date(query.startDate as string);
        }
        if (!query.endDate) {
            endDate = new Date();
        } else {
            endDate = new Date(query.endDate as string);
        }

        return { startDate, endDate };
    }
}

export default CmeService;