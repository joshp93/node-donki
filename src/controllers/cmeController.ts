import CmeService from "../services/cmeService";
import { Request, Response } from "express";

const cmeService = new CmeService();

export const getCMEs = async (req: Request, res: Response) => {
    cmeService.getCMEs(req, res);
};