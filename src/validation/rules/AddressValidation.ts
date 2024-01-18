import { z } from "zod";

/**
 * Validation for Addresses
 *
 * @dev Function uses the HIP-15 (https://hips.hedera.com/hip/hip-15) regex string and returns
 * an address with no-checksum.
 *
 */
export default z
    .string()
    .regex(new RegExp("^(0|(?:[1-9]\\d*))\\.(0|(?:[1-9]\\d*))\\.(0|(?:[1-9]\\d*))(?:-([a-z]{5}))?$"))
    .transform(val => {
        if (val.includes('-')) {
            return val.split('-')[0];
        }

        return val;
    })