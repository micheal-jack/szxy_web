// ��ҳjs================================================================

// ���Ͻ��û���¼��������ѡ��
$('.user').click(function(e) {
    var _this = $(this);
    if ($('.dropbox').is(':hidden')) {
        $(".dropbox").show();
        _this.addClass("user2");
    } else {
        $('.dropbox').hide();
        _this.removeClass("user2");
    }
    $(document).one('click', function() {
        $('.dropbox').hide();
        _this.removeClass("user2");
    });
    e.stopPropagation();
});
$('.dropbox').on('click', function(e) {
    e.stopPropagation();
});