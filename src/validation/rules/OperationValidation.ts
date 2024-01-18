import { z } from "zod";

export default z.string()
    .toLowerCase()
    .refine((val) => {
        return [
            'deploy',
            'mint',
            'burn',
            'transfer'
        ].includes(val);
    })