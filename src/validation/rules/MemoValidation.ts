import { z } from "zod";

export default z
    .string()
    .max(600)
    .optional()