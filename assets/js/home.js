// アラートの削除。デフォルトのリンク動作のみを行う
document.querySelectorAll('.egg').forEach(function(egg) {
    egg.addEventListener('click', function() {
        // アラートは削除し、ページ遷移のみを実行
    });
});
