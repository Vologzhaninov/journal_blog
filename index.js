const viewMore = document.getElementById('view-more')

if (viewMore) {
    viewMore.addEventListener('click', () => {
    const blogs = document.getElementsByClassName('blog-article')
    for (const blog of blogs){
        if (blog.classList.contains('invisible')){
            blog.classList.remove('invisible')
        }
    }
})
}

document.getElementById('menu-btn').addEventListener('click', () => {
    const navBar = document.getElementById('nav-bar')
    const menuBtn = document.getElementById('menu-btn')
    const navUl = document.getElementById('nav-ul')
    if (navBar.classList.contains('nav-bar-mobile')) {
        navUl.classList.remove('nav-ul-mobile')
        navBar.classList.remove('nav-bar-mobile')
        menuBtn.classList.remove('menu-btn-mobile')
        menuBtn.classList.toggle('menu-btn-hover')
    } else {
        navUl.classList.add('nav-ul-mobile')
        navBar.classList.add('nav-bar-mobile')
        menuBtn.classList.add('menu-btn-mobile')
        menuBtn.classList.toggle('menu-btn-hover')
    }
})
