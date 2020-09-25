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
            avatar: "https://i.imgur.com/kxcuMi3.png",
            username: "THUNDERCOKC2678",
            blurb: "Third year computer engineering student, alt map enthusiast, twitch streamer, and washed tourney gamer who's constantly going for higher acc and lower UR. #1 BUTAOTOME fan.",
            discord: "thunderbird#2678",
            email: "k74huang@uwaterloo.ca",
            osu: "https://osu.ppy.sh/u/3388082"
        }, {
            role: "Vice President",
            avatar: "https://a.ppy.sh/3662205?1582825442.png",
            username: "Player0",
            blurb: "Dedicated CS student that puts his studies to good use, creating tools to play beatmaps at negative approach rates. Specializes in playing Spunout and Easy, as it forms the phrase \"SO EZ\".",
            discord: "PlayerZero#5446",
            osu: "https://osu.ppy.sh/users/3662205"
        }, {
            role: "Treasurer",
            avatar: "https://a.ppy.sh/3805080?1587632691.jpeg",
            username: "Devil_Oid",
            blurb: "Honours Math student who enjoys playing with NF on the most, taking on maps way out of his skill range \"just cause\". Will occasionally make a random pp play.",
            discord: "Devil_Oid#0843",
            osu: "https://osu.ppy.sh/users/3805080"
        }, {
            role: "Tournament Host",
            avatar: "https://a.ppy.sh/8171404?1599769618.png",
            username: "LumenLogic",
            blurb: "Math/CPA Student with plenty of osu! community experience: One of the hosts of the osu! Collegiate League and an admin of the Canadian 5 digit community. Insists that Reaction time (High AR)  is genetics.",
            discord: "LumenLogic#5533",
            osu: "https://osu.ppy.sh/users/8171404"
        }, {
            role: "Contest Host",
            avatar: "https://a.ppy.sh/12577911?1594938060.jpeg",
            username: "Zer0-G",
            blurb: "Student Pilot, flight sim enthusiast, and the owner of the largest Kudosu reserve in the entire club. Mentored by Lasse, known in the mapping scene, and will probably be a BN soon.",
            discord: "Zer0-G#7501",
            osu: "https://osu.ppy.sh/users/12577911"
        }],
        members: []
    },
    methods: {
        goBack() {
            window.history.back();
        }
    }
})