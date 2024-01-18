import { z } from 'zod';

import ProtocolValidation from "../rules/ProtocolValidation";
import OperationValidation from "../rules/OperationValidation";
import TickerValidation from "../rules/TickerValidation";
import MemoValidation from "../rules/MemoValidation";

export default z.object({
    p: ProtocolValidation,
    op: OperationValidation,
    tick: TickerValidation,
    m: MemoValidation
});