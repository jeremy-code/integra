import { Router } from "express";
import { query, validationResult } from "express-validator";

import { AppError } from "@/utils";
import { getRepresentatives } from "@/services/representatives.controller";

const router = Router();

// Given an address, return an array of the represenatives for that address as a response
router.get(
  "/representatives",
  query("address").not().isEmpty().trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw new AppError("Address not valid", 404, "Address in body not valid");
    const data = await getRepresentatives(req.query?.address);
    return res.status(200).json(data);
  }
);

export default router;
