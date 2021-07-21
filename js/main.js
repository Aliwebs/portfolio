window.onload = () => {
  const transition_el = document.querySelector('.transition')
  const nav = document.querySelector('nav')
  const anchors = nav.querySelectorAll('a')

  setTimeout(() => {
    transition_el.classList.remove('is-active')
  }, 500)

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i]

    anchor.addEventListener('click', e => {
      e.preventDefault()
      let target = e.target.href

      transition_el.classList.add('is-active')

      setTimeout(() => {
        window.location.href = target
      }, 500)
    })
  }
}


// let currentPage = 'home'
// const availablePages = elements.pages.map(page => page.id)
// console.log(availablePages)
// elements.pages.forEach(page => {
//   page.classList.add('hide')
//   page.classList.remove('show')
// })
// document.getElementById(currentPage).classList.remove('hide')
// document.getElementById(currentPage).classList.add('show')

// elements.navbar.addEventListener('click', e => {
//   if (e.target.nodeName === 'A') {
//     document.getElementById(currentPage).classList.remove('show')
//     document.getElementById(currentPage).classList.add('hide')
//     currentPage = e.target.innerText.toLowerCase()
//   }
//   document.getElementById(currentPage).classList.remove('hide')
//   document.getElementById(currentPage).classList.add('show')
// })