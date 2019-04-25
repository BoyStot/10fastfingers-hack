$row1.html('Start'); // Clear out current spans.
row1_string = ''; // clear string so the spans dont get added again with same numbers
word_string = $('#wordlist').text(); // grab the word list

word_string = word_string+word_string; // 2
word_string = word_string+word_string; // 4
word_string = word_string+word_string; // 8
word_string = word_string+word_string; // 16
word_string = word_string+word_string; // multiply word list out 32 times

$("#wordlist").text(word_string); // reset wordlist element to new word_string for stats calculation by server.
words = word_string.split("|");
				
fill_line_switcher(); // re-poulate words div.

p = $('#row1 span[wordnr="'+word_pointer+'"]').position();

var input = $('#inputfield')[0]
var ev = $.Event('keyup')
ev.which = 32
setInterval(function() {
    if ($('.highlight')[0]) {
        input.focus()
        input.value = $('.highlight').text()
        $(input).trigger(ev)
    }
}, 1)
