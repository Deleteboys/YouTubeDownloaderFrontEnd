<template>
  <v-container class="fill-height" fluid>
    <v-row class="d-flex align-center justify-center">
      <v-col style="min-width: 400px; max-width: 1000px; width: 50%">
        <v-card>
          <v-card-title class="text-center" style="padding: 3% 0 2% 0; font-size:2em">Downlaod Video</v-card-title>
          <v-divider/>

          <v-card-item style="margin-top: 20px">
            <v-row>
              <v-col cols="12" md="3" sm="4">
                <v-img
                  :src="thumbnail"
                  width="auto"></v-img>
              </v-col>
              <v-col cols="12" md="9" sm="7">
                <v-card-text style="font-size: 20px">Title: {{ title }}</v-card-text>
                <v-select label="Select Quality" :items="selectItems"></v-select>
              </v-col>
            </v-row>
          </v-card-item>
          <v-divider/>
          <v-card-actions class="justify-end" style="padding: 0 3% 0 3%">
            <v-btn color="primary">Download
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialogLoad" max-width="500px" persistent>
    <v-card>
      <v-card-title class="text-center" style="font-size: 2em">Please wait</v-card-title>
      <v-card-item class="d-flex justify-center">
        <v-progress-circular indeterminate :size="128"></v-progress-circular>
      </v-card-item>
      <v-spacer style="margin-top: 20px"/>
    </v-card>
  </v-dialog>
</template>

<!--<script setup>-->
<!--import {onMounted} from "vue";-->
<!--import {useRoute} from "vue-router";-->

<!--onMounted(() => {-->
<!--  console.log(useRoute().params.video)-->
<!--})-->
<!--</script>-->

<script>

import axios from "axios";

export default {
  name: "DownloadPage",
  data() {
    return {
      dialogLoad: true,
      thumbnail: "",
      title: "",
      mp3: [],
      mp4: [],
      selectItems: []
    }
  },
  async mounted() {
    const videoUrl = atob(decodeURIComponent(this.$route.params.video))
    const body = {'video': videoUrl}
    await axios.post("http://localhost:5000/videoInfo",body).then(response => {
      this.thumbnail = response.data.thumbnail
      this.title = response.data.title
      this.mp4 = response.data.mp4
      this.mp3 = response.data.mp3
      this.selectItems = [...this.mp4,...this.mp3]
      console.log(this.selectItems)
      this.dialogLoad = false
    }).catch(error => {
      alert("Something went wrong")
    })
  }
}
</script>

<style scoped>

</style>
