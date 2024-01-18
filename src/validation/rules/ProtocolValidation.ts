import { z } from "zod";

export default z.string()
    .toLowerCase()
    .refine((val) => {
        return ['hcs-20'].includes(val);
    })