const {createApp} = Vue
createApp({
    data(){
        return{
            stat:"not there yet!",
            clickCount:0,
            result:0
          }
    },
    watch: {
        
          clickCount(clickCount) {
            clickCount == 1 && setTimeout(()=>{this.result=0;this.clickCount=0}, 5000)
                 
            this.result == 37 ? this.stat="Nice!"
            :this.result >> 37 ? this.stat="Too Much!"
            :  this.stat="not there yet!"
          } 
        },
    methods:{
        
        handleClick(num){
            this.clickCount++;
            this.result+=num; 
        },
        
    }
}).mount('#assignment');