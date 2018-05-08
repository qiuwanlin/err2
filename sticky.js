!function () {
    var view = document.querySelector('#topbar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindevents()
        },
        bindevents: function () {
            var view = this.view
            window.addEventListener('scroll', function (x) {
                if (window.scrollY > 0) {
                    view.classList.add('sticky')
                } else {
                    view.classList.remove('sticky')
                }
                findClosest()
            })
        }
    }
    controller.init(view)

}.call()