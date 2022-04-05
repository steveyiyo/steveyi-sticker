<template>
    <div class="container">
        <Nuxt />
        <footer>
            Created by
            <a href="https://gnehs.net/" target="_blank">gnehs</a> &
            <a href="https://steveyi.net/" target="_blank">SteveYi</a> | Powered by
            Chat UI, Nuxt.js & Vite
        </footer>
    </div>
</template> 
<style>
html,
body {
    background-color: #ffdbdb;
    background-image: url("/img/bg.svg");
    background-attachment: fixed;
    background-size: 300px;
    box-shadow: inset 100vw 100vw rgba(239, 239, 239, 0.9);
    margin: 0;
    padding: 0;
}
footer {
    opacity: 0.5;
    font-size: 0.7em;
    font-family: "Raleway", sans-serif;
    text-align: center;
    padding: 8px 0;
    margin: 8px 0;
    border-radius: 8px;
    background: rgb(255, 255, 255);
    backdrop-filter: blur(10px);
}
.container {
    max-width: calc(100vw - 20px);
    width: 512px;
    margin: 0 auto;
}

.cu.chat[data-style="telegram"] .author {
    display: flex;
}

.cu.chat[data-style="telegram"] .author > .admin {
    margin-left: 4px;
    flex: 1;
    text-align: right;
    color: #ccc;
    font-weight: normal;
    font-size: 0.9em;
}

.cu.chat[data-style="telegram"] divider {
    position: sticky;
    top: 8px;
    z-index: 1;
}
@-moz-document url-prefix() {
    .cu.chat[data-style="telegram"] divider {
        position: relative;
    }
}
</style>