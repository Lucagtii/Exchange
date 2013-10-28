//http://rate-exchange.appspot.com/currency?from=USD&to=EUR

var from = 'EUR';
var to = 'USD'

function update() {

    //$.getJSON("http://rate-exchange.appspot.com/currency?from=USD&to=EUR&callback=?",
    //    function (data) {
    //        alert(data.from);
    //    });

    from = $('#from').val();
    to   = $('#to').val();
    $.ajax({
        type: "POST",
        url: 'http://rate-exchange.appspot.com/currency?from='+ from + '&to=' + to + '&callback=?',
        dataType: "json",
        success: function (response, textS, xhr) {
            //alert(response.rate);
            $('#change').fadeIn( 10000, function() {
            }).html(response.from + '/' + response.to + ': ' + response.rate + '  = ' + change(response.rate));

        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}

function change(rate) {

    return $('#fromCurrVal').val() * rate;
}