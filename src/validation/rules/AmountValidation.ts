import { z } from 'zod'

export default z
    .coerce
    .number()
    .int()
    .gte(1)
    .lt(Number.MAX_SAFE_INTEGER)