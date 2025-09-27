document.getElementById('view-more').addEventListener('click', () => {
    const blogs = document.getElementsByClassName('blog-article')
    for (const blog of blogs){
        if (blog.classList.contains('invisible')){
            blog.classList.remove('invisible')
        }
    }
})