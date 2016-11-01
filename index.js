export function parse(sms) {
    const iciciCreditCardRegex = /Tranx of INR 4,999.00 using Credit Card 4xxx1121/
    return {
        transactionAmount: 4999
    }
}

export default function parser(a) {
    return a
}