Vue.component('osubutton', {
    data: function() {
        return {
            isClicked: false,
            style: {
                height: '60vh',
                verticalAlign: 'middle'
            }
        }
    },
    methods: {
        mouseOver: function() {
            this.style.height = '80vh';
            this.style.cursor = 'pointer';
            // console.log("osubutton mouseover");
        },
        mouseLeave: function() {
            this.style.height = !this.isClicked ? '60vh' : '80vh';
            // console.log("osubutton mouseleave");
        },
        click: function() {
            console.log("osubutton click");
            this.isClicked = true;
            this.style.height = '80vh';
            this.$emit("osubtnclicked");
            setTimeout(() => {
                console.log("clearing menu!");
                this.isClicked = false;
                this.style.height = '60vh';
                this.$emit("osubtnclear");
            }, 10000)
        }
    },
    template: '<img v-bind:style="style" id="logo" @mouseover="mouseOver" @mouseleave="mouseLeave" @click="click" src="resources/logo.png"></img>'
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

// var osuButton = new Vue({
//     el: "#logo",
//     data: {
//         style: {
//             display: 'block',
//             height: '60vh',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//             marginTop: '10vh'
//         }
//     },
//     methods: {
//         mouseOver: function() {
//             this.style.height = '100vh';
//             console.log("ehh?");
//         },
//         mouseLeave: function() {
//             this.style.height = '60vh';
//             console.log("ehh!");
//         }
//     }
// })