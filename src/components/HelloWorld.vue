<template>
  <div id="app">
        <vue-aliplayer-v2 
            @ready="handleReady" 
            ref="VueAliplayerV2" 
            id="player-1194076936807171180" 
            :options="options" />
        <button @click="play()">播放</button>
        <button @click="pause()">暂停</button>
        <button @click="replay()">重播</button>
        <button @click="getCurrentTime()">播放时刻</button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      options: {  //配置项  
          source:'rtmp://live-play.ksdy8.cn/onlive/bonlive?auth_key=1583498928-0-0-99851a06b8c993080acdee061708936f',
          // useFlashPrism: true, // 指定flash播放器
      },
    
      id:{  //播放器的ID 唯一标识符 不传就是默认的 但是有多个的时候不一定是唯一的
          required: false,
          type: [String],
          default: `player-${Date.parse(new Date())}`
      },
  
      cssLink:{   //css版本源
          required: false,
          type: [String],
          default: `https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css`
      },
      scriptSrc:{ //js版本源
          required: false,
          type: [String],
          default: `https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js`
      }
    }
  },
    methods:{
 
        /**
         * 在这里需要注意的是  this.$refs 可能会返回是数组,或者对象,这个在用的时候需要注意一下.且因为是异步渲染dom,所以最好是在 this.$nextTick(()=>{ //todo }); 里面调用     
         * 事件可以参考文档 https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1085.36fc6fc57WKZ5P#h2-u64ADu653Eu5668u4E8Bu4EF63
         */
        play(){
            this.$refs.VueAliplayerV2.play()
        },
 
        pause(){
            this.$refs.VueAliplayerV2.pause();
        },
 
        replay(){
            this.$refs.VueAliplayerV2.replay();
        },
 
        getCurrentTime(){
            this.$refs.VueAliplayerV2.getCurrentTime();
        },
        
        /**
         * 播放器事件回调 
         */
        handleReady(e){
            console.log(`ready`,e);
        }
    },
    
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.player-btns{
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.player-btns span {
    margin: 0 auto;
    display: inline-block;
    padding: 5px 10px;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #eee;
    background: #e1e1e1;
    border-radius: 10px;
    text-align: center;
    margin: 20px auto;
    cursor: pointer;
}
</style> 