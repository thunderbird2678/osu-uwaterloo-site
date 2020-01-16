Vue.component('osubutton', {
    props: ['src'],
    data: function() {
        return {
            isClicked: false,
            isNotAnim: false,
        }
    },
    methods: {
        click: function() {
            this.isClicked = true;
            this.$emit("osubtnclicked");
        }
    },
    template: `
    <div id="logo-container" style="position: relative">
        <img v-bind:class="{noAnim: isNotAnim}" id="logo" @click="click" v-bind:src="src"></img>
    </div>
    `
})

Vue.component('clubmembers', {
    props: ['role', 'avatar', 'username', 'name', 'blurb', 'discord', 'email', 'osu'],
    data: function() {
        return {}
    },
    methods: {},
    template: `
    <div class="card" style="width: 22vw;">
        <div id="role" class="card-header">
            <h5>{{role}}</h5>
        </div>
        <div id="avatarWrapper">
            <img id="avatar" v-bind:src="avatar" class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{username}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{name}}</h6>
            <p class="card-text">{{blurb}}</p>
            <div class="card-footer text-muted">
                <a v-bind:href="osu" class="card-link">
                    <img class="osuIcon" src="resources/osuIcon.png"></img>
                </a>
                <a href="https://discord.gg/umqqtjR" class="card-link">
                    <i class="fab fa-discord"></i>
                    <span class="discordtooltip"> {{discord}} </span>
                </a>
                <a v-bind:href="'mailto:' + email" class="card-link" v-bind:class="{noEmail: email === undefined}">
                    <i class="fas fa-envelope"></i>
                    <span class="emailtooltip"> {{email}} </span>
                </a>
            </div>
        </div>
    </div>    
    `
})

new Vue({
    el: "#main",
    data: {
        src: "resources/logoNoText.png",
        execs: [{
            role: "President",
            avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/781bd995-bb5b-4293-817a-babbd50c468f-profile_image-300x300.png",
            username: "-thunderbird",
            name: "Kai Huang",
            blurb: "Third year computer engineering student and the dedicated NM1 onetrick. Anything below 99% accuracy or above 100 UR is considered disgraceful.",
            discord: "thunderbird#2678",
            email: "k74huang@uwaterloo.ca",
            osu: "https://osu.ppy.sh/u/3388082"
        }, {
            role: "Secretary",
            avatar: "https://cdn.discordapp.com/avatars/328726121015148546/c94e730f38a83e02be9e65146a4878ac.png?size=1024",
            username: "Zer0-G",
            name: "Julian Tang",
            blurb: "Aviation student, A.K.A. the airman you must defeat. Aspiring mapper and BN, with one of the largest Kudosu reserves in the entire club.",
            discord: "Zer0-G#7501",
            osu: "https://osu.ppy.sh/u/12577911"
        }, {
            role: "Treasurer",
            avatar: "https://i.imgur.com/72oa0w4.png",
            username: "Meow Mix",
            name: "Thomas Aryawan",
            blurb: "A veteran of tournaments, both as a participant and as a staff member. Extremely versatile skillset, being able to perform well on a variety of maps.",
            discord: "Meow Mix#4235",
            osu: "https://osu.ppy.sh/u/3021634"
        }, {
            role: "Tournament Host",
            avatar: "https://i.imgur.com/kKgLtfA.png",
            username: "Player0",
            name: "Jerry Zhu",
            blurb: "Dedicated CS student that puts his studies to good use, creating tools to play beatmaps at negative approach rates. Specializes in playing Spunout and Easy, as it forms the phrase \"SO EZ\".",
            discord: "PlayerZero#5446",
            osu: "https://osu.ppy.sh/u/3662205"
        }, {
            role: "Contest Host",
            avatar: "https://i.imgur.com/Re4d5We.png",
            username: "Feiri",
            name: "Yifei Xu",
            blurb: "Second year ECE student obsessed with tech. Tech as in osu! tech mapping, something he explores both as an incredible player and as a mapper under Livia's tutorship.",
            discord: "Feiri#3126",
            osu: "https://osu.ppy.sh/u/3214844"
        }],
        members: []
    },
    methods: {
        goBack() {
            window.history.back();
        }
    }
})