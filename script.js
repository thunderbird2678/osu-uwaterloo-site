function animateCSS(element, animationName, inf) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)
    }

    if (!inf) {
        node.addEventListener('animationend', handleAnimationEnd)
    }

    if (inf) {
        node.classList.add('infinite');
    }
}

function unanimateCSS(element, animationName) {
    const node = document.querySelector(element)
    node.classList.remove('animated', animationName)
    node.classList.remove('infinite')
}

Vue.component('osubutton', {
    data: function() {
        return {
            isClicked: false,
            isNotAnim: false,
            style: {
                height: '75vh',
                verticalAlign: 'middle',
                cursor: 'default',
            }
        }
    },
    methods: {
        mouseOver: function() {
            this.isNotAnim = true;
            var self = this;
            setTimeout(function() {
                self.isNotAnim = false;
            }, 200);
            // animateCSS('#logo', 'pulse', true);
            console.log(this.style);
            this.style.height = '85vh';
            this.style.cursor = 'pointer';

        },
        mouseLeave: function() {
            this.isNotAnim = true;
            var self = this;
            setTimeout(function() {
                self.isNotAnim = false;
            }, 200);
            console.log(this.style);
            this.style.height = !this.isClicked ? '75vh' : '85vh';
        },
        click: function() {
            if (this.isClicked != true) {
                setTimeout(() => {
                    console.log("clearing menu!");
                    this.isClicked = false;
                    this.style.height = '75vh';
                    this.$emit("osubtnclear");
                }, 10000)
            } else {

            }
            console.log("osubutton click");
            this.isClicked = true;
            this.style.height = '85vh';
            this.$emit("osubtnclicked");
        }
    },
    template: '<img v-bind:style="style" v-bind:class="{noAnim: isNotAnim}" id="logo" class="animated pulse infinite" @mouseover="mouseOver" @mouseleave="mouseLeave" @click="click" src="resources/logo.png"></img>'
})

Vue.component('osuoption', {
    props: ['title', 'icon', 'subheader', 'id'],
    data: function() {
        return {
            style: {
                display: "none"
            }
        }
    },
    methods: {
        toggleOption: function() {
            this.style.display = (this.style.display === "flex") ? "none" : "flex";
            console.log("Toggled option!");
        },
        mouseOver: function() {
            // console.log("osuoption mouseover");
        },
        mouseLeave: function() {
            // console.log("osuoption mouseleave");
        }
    },
    template: '<div v-bind:style="style" class="option" @mouseover="mouseOver" @mouseleave="mouseLeave"><span>{{title}}</span></div>'
})

new Vue({
    el: "#osuButtonContainer",
    data: {
        options: [
            { id: 1, title: "Discord Server", subheader: "Come hang out and chat with us!" },
            { id: 2, title: "About our Members", subheader: "Who exactly are all the players at osu!UW?" },
            { id: 3, title: "Events", subheader: "What we'll be up to for the next little while" },
            { id: 4, title: "Contact Us", subheader: "We'll do our best to get back to you!" }
        ]
    },
    methods: {
        showOptions() {
            for (i = 0; i < Object.keys(this.$refs.optionsMenu).length; i++) {
                this.$refs.optionsMenu[i].toggleOption();
            }
        },
        clearOptions() {
            for (i = 0; i < Object.keys(this.$refs.optionsMenu).length; i++) {
                this.$refs.optionsMenu[i].toggleOption();
            }
        },
    }
})