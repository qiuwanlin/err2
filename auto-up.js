let special = document.querySelectorAll('[data-x]')
  for (let i = 0; i < special.length; i++) {
    special[i].classList.add('offset')
  }
  setTimeout(function () {
    findClosest()
  }, 1000);
  window.addEventListener('scroll', function (qqq) {
    findClosest()})
 

  function findClosest() {
    let special = document.querySelectorAll('[data-x]')
    let min = 0
    for (let i = 1; i < special.length; i++) {
      if (Math.abs(special[i].offsetTop - window.scrollY) < Math.abs(special[min].offsetTop - window.scrollY)) { min = i }
    }
    special[min].classList.remove('offset')

    let id = special[min].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let family = li.parentNode.children
    for (let i = 0; i < family.length; i++) {
      family[i].classList.remove('light')
    }
    li.classList.add('light')
  }




  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active')
    }
  }
