<template>
    <h1>Hello ,This is a Home Page</h1>
</template>
<script>
import setAuthHeader from '../utils/setAuthHeader';
import axios from 'axios';
export default{
    name:'Home',
    methods:{
        loadData()
        {
            localStorage.getItem("user-info", res.data.data.token);
            setAuthHeader(!res.data.data.token);
            {
            this.$router.push({name:'Login'});
        }
        }
    },
    mounted()
    {
       
        this.loadData();     
        
        
    }
}
</script>