<template>
    <v-container>
        {{title}}
        <v-btn @click="ClickBtn">
            クリック
        </v-btn>
    </v-container>
</template>

<script>
export default {
    name:"Vuex",
    data(){
        return{
        }
    },
    computed:{
        title:function (){
            return this.$store.getters.title
        }
    },
    methods:{
        ClickBtn:function(){
            this.$store.dispatch("SetTitle", "Training")
        }
    }
}
</script>