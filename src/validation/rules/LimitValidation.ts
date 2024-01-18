import { z } from "zod";

export default z
    .coerce
    .number()
    .int()
    .gte(0)
    .lt(Number.MAX_SAFE_INTEGER)
    .optional()
    .default(0)