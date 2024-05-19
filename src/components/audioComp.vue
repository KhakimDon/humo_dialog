<template>
  <div style="max-width: 100%">
    <Vue3WaveAudioPlayer :wave_width="200" :wave_height="40"
      :wave_options='{ "samples": 40, "type": "steps", "width": 190, "height": 40 }' :src="this.source" />
  </div>
</template>
<script>
import Vue3WaveAudioPlayer from 'vue3-wave-audio-player'

export default {
  name: 'App',
  components: {
    Vue3WaveAudioPlayer
  },
  props:{
    source: String
  },
}
</script>

<style>
.player div:nth-child(3){
  width: 200px;
  margin: 0 !important;
  display: flex;
  justify-content: space-between !important;
}
.player div:nth-child(4){
  display: flex;
  /* margin: 0 !important;  */
}
#play{
  padding: 0 !important;
}
#play svg{
  fill: black !important;
}
#seek-slider{
  fill: black !important;
  /* filter: invert(1) contrast(100px) !important; */
}
#slider svg {
  fill: black !important;
  filter: invert(1);
}
#current-time, #duration{
  color: black !important;
}
</style>