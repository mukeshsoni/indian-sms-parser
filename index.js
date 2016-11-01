const iciciCreditCardRegex = /Tranx of INR ((\d{1,2}?,)*(\d{1,2}?,)*(\d{1,2}?,)*\d{0,3}?\.\d{2}) using Credit Card \dxxx\d{4} is made at .* on (\d{2}-[a-zA-Z]{3}-\d{2})\. Avbl Cr lmt:INR (\d{1,2}?,)*(\d{1,2}?,)*(\d{1,2}?,)*\d{0,3}?\.\d{2}, Total Cr lmt: INR (\d{1,2}?,)*(\d{1,2}?,)*(\d{1,2}?,)*\d{0,3}?\.\d{2}..*/

export function isIciciCreditCardSms(sms) {
    return iciciCreditCardRegex.test(sms)
}

export function parse(sms) {
    if(isIciciCreditCardSms(sms)) {
        const matches = sms.match(iciciCreditCardRegex)

        return {
            transactionAmount: parseFloat(matches[1].replace(/,/g, '')),
            date: new Date(matches[5]).getTime()
        }
    }
}

export default function parser(a) {
    return a
}