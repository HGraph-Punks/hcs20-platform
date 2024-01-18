import { z } from "zod";

export default z
    .string()
    .max(100)
    .optional()