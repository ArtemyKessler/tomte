<template>
  <div class="emoji-picker" v-if="show">
    <v-card height="300px" v-if="show">
      <v-card-title class="blue white--text">
        <span class="headline">Emoji Picker</span>
      </v-card-title>
      <v-card-text>
        <div class="emoji-content">
          <span
            class="emojiSpan mx-1 my-1"
            v-for="emoji in emojis"
            v-bind:key="emoji.key"
            @click="onEmojiClick(emoji)"
            >{{ emoji.value }}</span
          >
          <!-- <Emoji
            v-for="emoji in emojis"
            v-bind:key="emoji.key"
            :emoji="emoji"
            @click="onEmojiClick"
          ></Emoji> -->
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  // import Emoji from "./Emoji.vue";

  export default {
    data() {
      return {
        emojis: [],
      };
    },
    props: {
      show: Boolean,
    },
    created() {
      this.$http
        .get(
          "https://raw.githubusercontent.com/shanraisshan/EmojiCodeSheet/master/json/string/People.json"
        )
        .then(
          (response) => {
            this.emojis = response.body.peoples.people;
          },
          (response) => {
            console.log(response);
          }
        );
    },
    methods: {
      onEmojiClick(emoji) {
        this.$emit("click", emoji);
      },
      closePicker() {
        this.$emit("close");
      },
    },
    components: {
      // Emoji
    },
  };
</script>

<style>
  .emoji-picker {
    background: white;
    position: absolute;
    bottom: 5rem;
    left: 0;
    width: 200px;
    user-select: none;
  }
  .emoji-picker .emoji-header {
    display: flex;
    padding: 5px;
    box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.15);
  }

  .emoji-picker .emoji-header .emoji-close {
    margin-left: auto;
  }
  .emoji-picker .emoji-content {
    margin-top: 10px;
    overflow-y: auto;
    height: 200px;
  }
  .emoji-picker span {
    cursor: pointer;
    font-size: 25px;
  }
</style>
