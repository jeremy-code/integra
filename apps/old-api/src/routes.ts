import { Router } from "express";
import { representativeController, officialController } from "@/controllers";

const api = Router().use(representativeController).use(officialController);

export default Router().use("/api", api);
