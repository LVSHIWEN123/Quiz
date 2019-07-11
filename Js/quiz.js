$(document).ready(function () {
    var count = 30;
    var right = 0;
    var wrong = 0;
    var unanswered;
    $('input[type="checkbox"]').on('change', function () {
        $(this).siblings('input[type="checkbox"]').prop('checked', false);
    });
    $('button').click(function () {
        location.reload();
    })
    var timer = setInterval(() => {
        count--;
        $('span').eq(1).text(count);
        if (count == 0) {
            if ($('#q_1').children().eq(0).prop('checked')) {
                right++;
            } else if ($('#q_1').children().eq(1).prop('checked') || $('#q_1').children().eq(2)
                .prop(
                    'checked')) {
                wrong++;
            }

            if ($('#q_2').children().eq(0).prop('checked')) {
                right++;
            } else if ($('#q_2').children().eq(1).prop('checked') || $('#q_2').children().eq(2)
                .prop(
                    'checked')) {
                wrong++;
            }

            if ($('#q_3').children().eq(1).prop('checked')) {
                right++;
            } else if ($('#q_3').children().eq(0).prop('checked') || $('#q_3').children().eq(2)
                .prop(
                    'checked')) {
                wrong++;
            }

            if ($('#q_4').children().eq(0).prop('checked')) {
                right++;
            } else if ($('#q_4').children().eq(1).prop('checked') || $('#q_4').children().eq(2)
                .prop(
                    'checked')) {
                wrong++;
            }
            unanswered = 4 - right - wrong;
            $('#right').text(right);
            $('#wrong').text(wrong);
            $('#unanswered').text(unanswered);
            clearInterval(timer);
            alert("Game Over");
        }
    }, 1000);

})