import parser, { parse } from '../index.js'

const sms1 = "Tranx of INR 4,999.00 using Credit Card 4xxx1121 is made at AMAZON SELLER on 10-NOV-15. Avbl Cr lmt:INR 10,123.21, Total Cr lmt: INR 50,200.00. To register for our festive offer, please give a missed call on 07878730000. Please ignore if already registered. For details, visit www.icicibank.com"

const expectedParsedOutput1 = {
    bankName: "ICICI",
    transactionType: "debit",
    accountNumber: "1020121210211212",
    accountType: "credit",
    cardType: "VISA",
    transactionCurrency: "rupees",
    transactionAmount: 4999,
    seller: "AMAZON",
    date: 1021001012, // Unix timestamp of the date
}

test('parse ICICI bank sms', () => {
    const parsedSms = parse(sms1)

    expect(parsedSms.transactionAmount).toBe(4999)
})