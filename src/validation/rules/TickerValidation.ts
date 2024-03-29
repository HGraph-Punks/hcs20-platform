import { z } from "zod";

export default z
    .string()
    .min(1)
    .max(100)
    .toLowerCase()
    .trim()