import { z } from "zod";

export default z
    .coerce
    .number()
    .int()
    .gt(0)
    .lte(Number.MAX_SAFE_INTEGER)