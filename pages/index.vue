<template>
    <div>
        <div class="cu chat" data-style="telegram">
            <div
                v-for="(message, index) in messages"
                :key="index"
                class="message text read"
                :class="{ sticker: message.sticker || message.videoSticker, img: message.img }"
            >
                <div class="avatar">
                    <img :src="users[message.user].avatar" alt="avatar" />
                </div>
                <div class="content">
                    <div
                        class="author"
                        :style="{ color: users[message.user].color }"
                        v-show="!message.sticker && !message.videoSticker"
                    >
                        {{ users[message.user].name }}
                        <div
                            class="admin"
                            v-if="users[message.user].admin"
                        >{{ users[message.user].admin }}</div>
                    </div>
                    <div class="reply" v-if="message.reply">
                        <div class="author">{{ users[message.reply.user].name }}</div>
                        <div class="content">
                            <div class="text">{{ message.reply.text }}</div>
                        </div>
                    </div>
                    <img v-if="message.img" :src="message.img" />
                    <div class="text" v-if="message.text">
                        <p v-html="message.text" />
                    </div>
                    <div class="meta" v-if="message.time">
                        <div class="item">{{ message.time }}</div>
                    </div>
                    <img
                        v-if="message.sticker"
                        :src="message.sticker"
                        loading="lazy"
                        style="max-width: 256px"
                    />
                    <video
                        v-if="message.videoSticker"
                        loading="lazy"
                        autoplay
                        loop
                        muted
                        playsinline
                        style="max-width: 256px"
                    >
                        <source
                            v-for="({ src, type }, i) in message.videoSticker"
                            :src="src"
                            :type="type"
                            :key="i"
                        />
                    </video>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import users from "@/assets/users";
import messages from "@/assets/messages";
export default {
    data() {
        return { users, messages };
    },
    created() {
        for (let username of Object.keys(this.users)) {
            let pickRandom = (arr) =>
                arr[Math.floor(Math.random() * arr.length)];
            let colorList = [
                "#c75650",
                "#d57b27",
                "#7e6ccf",
                "#4fb231",
                "#2ea4ca",
            ];
            this.users[username].color = pickRandom(colorList);
        }
    },
};
</script>
 