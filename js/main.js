let mobileBtns = document.querySelectorAll('[data-mobile]');

mobileBtns.forEach(function(mobile) {
    mobile.addEventListener('click', function() {
        let target = this.getAttribute('data-mobile');
        
        if(target === 'close') {
            document.querySelector('.overlay').classList.remove('active');
            document.querySelector('.mobile-nav').classList.remove('active');
        } else {
            document.querySelector('.overlay').classList.add('active');
            document.querySelector('.mobile-nav').classList.add('active'); 
        }
    });
});