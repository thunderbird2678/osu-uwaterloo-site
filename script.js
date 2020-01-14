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

            }
        }
    },
    methods: {
        mouseOver: function() {
            // this.isNotAnim = true;
            // var self = this;
            // setTimeout(function() {
            //     self.isNotAnim = false;
            // }, 500);
            // // animateCSS('#logo', 'pulse', true);
            // console.log(this.style);


        },
        mouseLeave: function() {
            // this.isNotAnim = true;
            // var self = this;
            // setTimeout(function() {
            //     self.isNotAnim = false;
            // }, 500);
            // console.log(this.style);
        },
        click: function() {
            // if (this.isClicked != true) {
            //     setTimeout(() => {
            //         console.log("clearing menu!");
            //         this.isClicked = false;
            //         this.style.height = '75vh';
            //         this.$emit("osubtnclear");
            //     }, 10000)
            // }
            console.log("osubutton click");
            this.isClicked = true;
            // this.style.height = '85vh';
            this.$emit("osubtnclicked");
        }
    },
    template: `
    <div id="logo-container" style="position: relative">
        <img v-bind:style="style" v-bind:class="{noAnim: isNotAnim}" id="logo" @mouseover="mouseOver" @mouseleave="mouseLeave" @click="click" src="resources/logo.png"></img>
    </div>
    `
})

Vue.component('osuoption', {
    props: ['filename', 'url'],
    data: function() {
        return {
            isOpen: false,
            isHovered: false
        }
    },
    methods: {
        toggleOption: function() {
            this.isOpen = !this.isOpen;
            console.log("Toggled option!");
        },
        mouseOver: function() {
            this.isHovered = true;
        },
        mouseLeave: function() {
            this.isHovered = false;
        }
    },
    // template: '<div v-bind:style="style" class="option" @mouseover="mouseOver" @mouseleave="mouseLeave"><span>{{title}}</span></div>'
    // template: '<div v-bind:class="{open: isOpen, hover: isHovered}" class="option" @mouseover="mouseOver" @mouseleave="mouseLeave"><img class="optionImage" v-bind:src="filename"/></div>'
    template: '<div v-bind:class="{open: isOpen, hover: isHovered}" class="option" @mouseover="mouseOver" @mouseleave="mouseLeave"><a class="optionImage" v-bind:href="url"><img class="optionImage" v-bind:src="filename"/></a></div> '
})

new Vue({
    el: "#osuButtonContainer",
    data: {
        options: [
            { filename: "resources/discordButton.png", url: "https://discord.gg/umqqtjR" },
            { filename: "resources/membersButton.png", url: "members.html" },
            { filename: "resources/eventsButton.png" },
            { filename: "resources/contactButton.png" }
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