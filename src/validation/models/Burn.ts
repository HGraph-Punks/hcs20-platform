import BaseMessage from "./BaseMessage";
import AmountValidation from "../rules/AmountValidation";
import AddressValidation from "../rules/AddressValidation";

export default BaseMessage.extend({
    amt: AmountValidation,
    from: AddressValidation
});