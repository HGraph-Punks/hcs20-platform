import message from "./BaseMessage";
import AmountValidation from "../rules/AmountValidation";
import AddressValidation from "../rules/AddressValidation";

export default message.extend({
    amt: AmountValidation,
    to: AddressValidation,
    from: AddressValidation,
})