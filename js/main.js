// Drop menu
const showDropMenu = () => {
    const barIcon = document.querySelector('.links');
    const dropMenu = document.querySelector('.links ul');

    // toggle dropMenu when click
    barIcon.onclick = () => {
        dropMenu.classList.toggle('display');
    };

    // hide dropMenu when click outside it
    window.addEventListener('mouseup' , (event) => {
        if (event.target != dropMenu)  dropMenu.classList.remove('display');
    })
    
    // hide dropmenu when mouse leave
    // dropMenu.addEventListener('mouseleave', () => {
    //     dropMenu.classList.remove('display');
    // } )
}

showDropMenu();

// features articles on hover
const featuresHover = () => {
    const articles = document.querySelectorAll('.features .container article');

    articles.forEach(article => {
        article.onmouseover = () => {
            article.classList.add('hover-effect')
        }
        article.addEventListener('mouseleave', () => {
            article.classList.remove('hover-effect');
        }
        )
    })
};

featuresHover();