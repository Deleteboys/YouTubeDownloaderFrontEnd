<template>
  <v-container class="fill-height" fluid>
    <v-row class="d-flex align-center justify-center">
      <!--      <v-col min-width="400px" width="50%" max-width="1000px" min-height="200px">-->
      <v-col style="min-width: 400px; max-width: 1000px; width: 50%">
        <v-card>
          <v-card-title class="text-center" style="padding: 3% 0 2% 0; font-size:2em">YouTube Downloader</v-card-title>
          <v-divider/>
          <v-row class="d-flex align-center justify-center" style="margin-top: 10px; margin-bottom: 20px">
            <v-col cols="12" md="8">
              <v-card-item>
                <v-form @submit.prevent>
                  <v-row>
                    <v-col cols="12" md="8" class="d-flex align-center justify-center">
                      <v-text-field hide-details label="Video URL" v-model="url" :rules="rules"
                                    placeholder="https://youtu.be/dQw4w9WgXcQ?si=wn5xd4k3zWJrXHyk"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="d-flex align-center justify-center">
                      <v-btn type="submit" color="#5865f2" @click="clickButton()">Download Video</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-item>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "MainView",
  data() {
    return {
      url: "",
      rules: [
        value => {
          if (value) return true
          return 'You must enter a URL.'
        },
      ]
    }
  },
  methods: {
    clickButton() {
      // console.log(encodeURIComponent(this.url))
      this.$router.push("/download/"+encodeURIComponent(btoa(this.url)))
    }
  }
}

</script>

<style scoped>

</style>
