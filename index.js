const changePage = (hidePage, showPage) => {
    hidePage.classList.add('fade');
    setTimeout(() => {
        hidePage.style.display = 'none';
        showPage.style.display = 'inherit';
        showPage.classList.add('unfade');
    }, 2000)
}

const changeContent = (hideContent, showContent) => {
    hideContent.classList.add('fade');
    setTimeout(() => {
        hideContent.style.display = 'none';
        showContent.style.display = 'inherit';
        showContent.classList.add('unfade');
    }, 2000)
}

const changeBGto4_1 = () => {
    setTimeout(() => {
        document.getElementById('body').style.backgroundImage = "url('./images/text/bab_4/4_1.jpg')"
    }, 2000)
}

const changeBGto4_2 = () => {
    setTimeout(() => {
        document.getElementById('body').style.backgroundImage = "url('./images/text/bab_4/4_2.jpg')"
    }, 2000)
}

const changeBGto5 = () => {
    setTimeout(() => {
        document.getElementById('body').style.backgroundImage = "url('./images/5.png')"
    }, 2000)
}

