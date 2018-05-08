!function () {
    var view = document.querySelector('section.weisha')
console.log(1)
    var model = {
        initAV: function () {

            var APP_ID = 'a2V3I524SKG86fgyw09QHXIf-gzGzoHsz';
            var APP_KEY = '7H3Igkkto2kxAbmwArUHMjxc';

            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function () {
            var query = new AV.Query('message');
            return query.find()
        },
        save: function (name, content) {
            var message = AV.Object.extend('message');
            var m = new message();
            return m.save({
                'name2': name,
                'content': content
            })
        }
    }

    var controller = {
        view: null,
        messagelist: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.messagelist = view.querySelector('#messagelist')
            this.form = view.querySelector('form')
            this.model.initAV()
            this.loadmessages()
            this.bindevents()
        },
        loadmessages: function () {
            this.model.fetch().then(
                (m) => {
                    let array = m.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name2}: ${item.content}`
                        this.messagelist.appendChild(li)
                    })
                })
        },
        bindevents: function () {
            this.form.addEventListener('submit', function (e) {
                e.preventDefault()
                this.savemessage()
            }.bind(this))
        },
        savemessage: function () {
            let myform = this.form
            let content = myform.querySelector('input[name=content]').value
            let name = myform.querySelector('input[name=name]').value
            this.model.save(name, content)
                .then(function (object) {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name2}:${object.attributes.content} `
                    messagelist.appendChild(li)
                })
        }
    }


    controller.init(view, model)
   
}.call()
