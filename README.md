# 10fastfingers-hack
Copy-paste this in your browser console to get maximal words per minute  -> https://10fastfingers.com/typing-test/english

```javascript
$row1.html('Start');
row1_string = '';
word_string = $('#wordlist').text();
word_string = word_string+word_string;
word_string = word_string+word_string;
word_string = word_string+word_string;
word_string = word_string+word_string;
word_string = word_string+word_string;
$("#wordlist").text(word_string);
words = word_string.split("|");
fill_line_switcher(); 
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
```
