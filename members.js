Vue.component('member', {
    props: ['role', 'avatar', 'username', 'name', 'blurb', 'discord', 'email', 'osu'],
    data: function() {
        return {}
    },
    methods: {},
    template: `
    <div v-bind:class="{open: isOpen, hover: isHovered}" class="option" @mouseover="mouseOver" @mouseleave="mouseLeave"><a class="optionImage" v-bind:href="url"><img class="optionImage" v-bind:src="filename" /></a></div>
    `
})