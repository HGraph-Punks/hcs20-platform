import BaseMessage from "./BaseMessage";
import MetadataValidation from "../rules/MetadataValidation";
import LimitValidation from "../rules/LimitValidation";
import MaximumValidation from "../rules/MaximumValidation";
import NameValidation from "../rules/NameValidation";

export default BaseMessage.extend({
    name: NameValidation,
    max: MaximumValidation,
    lim: LimitValidation,
    metadata: MetadataValidation
}).refine(schema => {
    if(schema.lim > 0) {
        return schema.lim <= schema.max
    }

    return true
});