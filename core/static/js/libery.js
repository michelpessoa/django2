function showImg(x) {
    console.log(x);
    $('#modal' + x).modal({
        show:true,
        backdrop: false
    })
}