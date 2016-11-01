import parser, { 
    parse,
    isIciciCreditCardSms, 
} from '../index.js'

const smses = {
    icici: [
        "Tranx of INR 4,999.00 using Credit Card 4xxx1121 is made at AMAZON SELLER on 10-NOV-15. Avbl Cr lmt:INR 10,123.21, Total Cr lmt: INR 50,200.00. To register for our festive offer, please give a missed call on 07878730000. Please ignore if already registered. For details, visit www.icicibank.com",
        "Tranx of INR 999.00 using Credit Card 4xxx1121 is made at AMAZON SELLER on 10-NOV-15. Avbl Cr lmt:INR 10,123.21, Total Cr lmt: INR 50,200.00. To register for our festive offer, please give a missed call on 07878730000. Please ignore if already registered. For details, visit www.icicibank.com",
        "Tranx of INR 54,12,999.00 using Credit Card 4xxx1121 is made at AMAZON SELLER on 10-NOV-15. Avbl Cr lmt:INR 10,123.21, Total Cr lmt: INR 50,200.00. To register for our festive offer, please give a missed call on 07878730000. Please ignore if already registered. For details, visit www.icicibank.com",
    ]
}


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

test('detect ICICI credit card sms', () => {
    expect(isIciciCreditCardSms(smses.icici[0])).toBe(true)
    expect(isIciciCreditCardSms(smses.icici[1])).toBe(true)
    expect(isIciciCreditCardSms(smses.icici[2])).toBe(true)
    expect(isIciciCreditCardSms('random string INR 100')).toBe(false)
})

test('parse the expense amount from ICICI credit card sms', () => {
    const parsedSms = parse(smses.icici[0])

    expect(parsedSms.transactionAmount).toBe(4999)
    expect(parsedSms.date).toBe(1447093800000)
})