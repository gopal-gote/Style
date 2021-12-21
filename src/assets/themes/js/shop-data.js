function openCartModal() {
    $("#cartModal").show();
    $("body").css("overflow", "hidden");
    $("#cartBody").css("overflow", "auto");
}

function openSortModal() {
    $("#sortModal").show();
}

function closeCartModal() {
    $("#cartModal").hide();
    $("body").css("overflow", "auto");
    $("#cartBody").css("overflow", "hidden");
}

$(document).click(function(e) {
    if ($(e.target).is('#cartModal')) {
        $('#cartModal').fadeOut(500);
        $("body").css("overflow", "auto");
    }
    if ($(e.target).is('#sortModal')) {
        $('#sortModal').fadeOut(500);
        $("body").css("overflow", "auto");
    }
});

function closeSortModal() {
    $("#sortModal").hide();
}



function sidebar_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function sidebar_close() {
    document.getElementById("mySidebar").style.display = "none";
}

$("[data-toggle=popover]").popover({
    html: true,
    content: function() {
        return $('#popover-content').html();
    }
});

$('.minus').click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function() {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});