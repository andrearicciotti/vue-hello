const  { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "Vue JS",
            mainParagraph: "Vue JS e' un framework di javascript opensource utilizzato principalmente per le single-page App.",
            image: "img/vue.png",
            imageEffect: ""
        }

    },
    methods: {
        onClick: function() {
            (this.imageEffect === "onClick") ? this.imageEffect = "" : this.imageEffect = "onClick";
        }
    }
})

app.mount('#app');