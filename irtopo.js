window.onscroll = scroll;

function scroll() {
    const backTop = document.getElementById('irtopo');
    if (window.pageYOffset < 50) {
        // alert("menor que 50")

        backTop.style.display = 'none';
        backTop.style.animation = 'animation 2s';
    } else {
        backTop.style.display = 'block';
    }
    // alert("evento scroll detectado! " + window.pageXOffset + " " + window.pageYOffset);
    // nota: você pode usar window.innerWidth e window.innerHeight para obter a largura e altura da área de visão.
}