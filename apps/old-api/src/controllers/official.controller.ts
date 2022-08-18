import { Router } from "express";
import { body, validationResult } from "express-validator";
import { parseFullName } from "parse-full-name";
/** I am aware of how unfortunate it is to be using an external library for this; unfortunately, there seems to be no easy way
 * to convert an address to a specific person and receive a usable ID for that person, so I will be using names.
 */

import { AppError } from "@/utils";
import { logger } from "@/utils";
import { prisma } from "database";

const router = Router();

router.post(
  "/official",
  body("name").not().isEmpty().trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new AppError(
        "Official is not valid",
        404,
        "Offical in body not valid"
      );
    }
    const name = parseFullName(req.body.name);
    let official;

    official = await prisma.senators.findFirst({
      where: {
        first_name: name.first,
        last_name: name.last,
      },
    });

    if (!official) {
      official = await prisma.house.findFirst({
        where: {
          first_name: name.first,
          last_name: name.last,
        },
      });
    }

    if (!official) {
      throw new AppError("Official not found", 404, "Official not found");
    }
    return res.status(200).json(official);
  }
);

export default router;
