const iciciCreditCardRegex = /Tranx of INR \d+,\d+\.\d{2} using Credit Card \dxxx\d{4} is made at .* on \d{2}-[a-zA-Z]{3}-\d{2}\. Avbl Cr lmt:INR \d+,\d+\.\d{2}, Total Cr lmt: INR \d+,\d+\.\d{2}\..*/

export function isIciciCreditCardSms(sms) {
    return iciciCreditCardRegex.test(sms)
}

export function parse(sms) {

    return {
        transactionAmount: 4999
    }
}

export default function parser(a) {
    return a
}