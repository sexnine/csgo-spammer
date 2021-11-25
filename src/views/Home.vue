<template>
  <div class="text-white flex flex-col h-screen pb-6">
    <div class="my-6">
      <h1 class="text-3xl font-bold">CS:GO Spammer</h1>
      <h2 class="text-md font-light text-red-500">Made by sexnine 💖</h2>
    </div>
    <div class="flex justify-center h-full flex-grow">
      <div
        class="flex flex-row flex-grow mx-6 justify-center gap-x-6 max-w-5xl"
      >
        <div class="flex-grow">
          <text-area
            v-model="msgListInput"
            class="resize-none w-full h-full"
            placeholder="Messages to send, put each message on a new line..."
          />
        </div>
        <div class="flex gap-y-4 flex-col">
          <Button
            :text="spamming ? 'Stop spamming' : 'Start spamming'"
            @click="spamBtn"
          />
          <div>
            <p>Time between messages (ms)</p>
            <text-input type="number" v-model="timeBetweenMessagesInput" />
          </div>
          <checkbox text="Repeat" :checked="repeat" @click="repeat = !repeat" />
          <Button text="Randomize list" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { invoke } from "@tauri-apps/api/tauri";
import Button from "../components/Button.vue";
import TextArea from "../components/TextArea.vue";
import TextInput from "../components/TextInput.vue";
import Checkbox from "../components/Checkbox.vue";

export default {
  name: "Home",
  data() {
    return {
      spamming: false,
      currentMsgIndex: 0,
      msgList: [],
      repeat: false,
      timeBetweenMessagesInput: "1000",
      timeBetweenMessages: 1000,
      spammingTask: null,
      msgListInput: "",
    };
  },
  components: {
    Button,
    TextArea,
    TextInput,
    Checkbox,
  },
  methods: {
    spamBtn() {
      if (this.spamming) {
        this.stopSpamming();
        return;
      }

      this.spamming = true;
      this.timeBetweenMessages = Number(this.timeBetweenMessagesInput);
      this.currentMsgIndex = 0;
      this.msgList = this.msgListInput.split("\n");

      this.spammingTask = setInterval(() => {
        invoke("send_command", {
          command: "say " + this.msgList[this.currentMsgIndex],
        });
        console.log(this.msgList[this.currentMsgIndex]);
        this.currentMsgIndex++;

        if (this.currentMsgIndex >= this.msgList.length) {
          if (this.repeat) {
            this.currentMsgIndex = 0;
          } else {
            this.stopSpamming();
            return;
          }
        }
      }, this.timeBetweenMessages + 50);
    },
    stopSpamming() {
      if (this.spammingTask) {
        clearInterval(this.spammingTask);
      }
      this.spamming = false;
    },
  },
};
</script>
