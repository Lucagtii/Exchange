﻿//http://rate-exchange.appspot.com/currency?from=USD&to=EUR

var from = 'EUR';
var to = 'USD';

//var currencies = ['AED', 'AFN'];

function loadCurrencyCombo() {
    $.each(currencies, function () {
        $("#sourceCurrency").append('<option value="' + this + '">' + this + '</option>');
        $("#destCurrency").append('<option value="' + this + '">' + this + '</option>');
    });
}

function update() {

    //$.getJSON("http://rate-exchange.appspot.com/currency?from=USD&to=EUR&callback=?",
    //    function (data) {
    //        alert(data.from);
    //    });

    

    from = $('#sourceCurrency').val();
    to = $('#destCurrency').val();
    $.mobile.loading('show', {
        text: 'Exchange: ' + from + '/' + to,
        textVisible: true,
        theme: 'a',
        html: ""
    });
    $.ajax({
        type: "POST",
        url: 'http://rate-exchange.appspot.com/currency?from='+ from + '&to=' + to + '&callback=?',
        dataType: "json",
        success: function (response, textS, xhr) {
            //alert(response.rate);
            if (response.err == '' || response.err == undefined) {
                $('#change').fadeIn(100, function () {
                }).html(response.from + '/' + response.to + ': ' + response.rate + '  = ' + change(response.rate));
            }
            else {
                $('#change').fadeIn(100, function () {
                }).html(response.err);
            }
            $.mobile.loading('hide');
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
            $.mobile.loading('hide');
        }
    });
}

function change(rate) {
    var resultRate = $('#fromCurrVal').val() * rate
    var result = Math.round(resultRate * 100) / 100
    return result
}


//'ALL',
//'AMD',
//'ANG',
//'AOA',
//'ARS',
//'AUD',
//'AWG',
//'AZN',
//'BAM',
//'BBD',
//'BDT',
//'BGN',
//'BHD',
//'BIF',
//'BMD',
//'BND',
//'BOB',
//'BOV',
//'BRL',
//'BSD',
//'BTN',
//'BWP',
//'BYR',
//'BZD',
//'CAD',
//'CDF',
//'CHE',
//'CHF',
//'CHW',
//'CLF',
//'CLP',
//'CNY',
//'COP',
//'COU',
//'CRC',
//'CUP',
//'CVE',
//'CYP',
//'CZK',
//'DJF',
//'DKK',
//'DOP',
//'DZD',
//'EEK',
//'EGP',
//'ERN',
//'ETB',
//'EUR',
//'FJD',
//'FKP',
//'GBP',
//'GEL',
//'GHS',
//'GIP',
//'GMD',
//'GNF',
//'GTQ',
//'GYD',
//'HKD',
//'HNL',
//'HRK',
//'HTG',
//'HUF',
//'IDR',
//'ILS',
//'INR',
//'IQD',
//'IRR',
//'ISK',
//'JMD',
//'JOD',
//'JPY',
//'KES',
//'KGS',
//'KHR',
//'KMF',
//'KPW',
//'KRW',
//'KWD',
//'KYD',
//'KZT',
//'LAK',
//'LBP',
//'LKR',
//'LRD',
//'LSL',
//'LTL',
//'LVL',
//'LYD',
//'MAD',
//'MDL',
//'MGA',
//'MKD',
//'MMK',
//'MNT',
//'MOP',
//'MRO',
//'MTL',
//'MUR',
//'MVR',
//'MWK',
//'MXN',
//'MXV',
//'MYR',
//'MZN',
//'NAD',
//'NGN',
//'NIO',
//'NOK',
//'NPR',
//'NZD',
//'OMR',
//'PAB',
//'PEN',
//'PGK',
//'PHP',
//'PKR',
//'PLN',
//'PYG',
//'QAR',
//'RON',
//'RSD',
//'RUB',
//'RWF',
//'SAR',
//'SBD',
//'SCR',
//'SDG',
//'SEK',
//'SGD',
//'SHP',
//'SKK',
//'SLL',
//'SOS',
//'SRD',
//'STD',
//'SYP',
//'SZL',
//'THB',
//'TJS',
//'TMM',
//'TND',
//'TOP',
//'TRY',
//'TTD',
//'TWD',
//'TZS',
//'UAH',
//'UGX',
//'USD',
//'USN',
//'USS',
//'UYU',
//'UZS',
//'VEB',
//'VND',
//'VUV',
//'WST',
//'XAF',
//'XAG',
//'XAU',
//'XBA',
//'XBB',
//'XBC',
//'XBD',
//'XCD',
//'XDR',
//'XFO',
//'XFU',
//'XOF',
//'XPD',
//'XPF',
//'XPT',
//'XTS',
//'XXX',
//'YER',
//'ZAR',
//'ZMK',
//'ZWD'];