$(function () {
    console.log('asdsad')

    $('.price_button').on('click',function () {
        console.log('CLICK!!!')
        $(this).parent().parent().toggleClass('active')
    })
})