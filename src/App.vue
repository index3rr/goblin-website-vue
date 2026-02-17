<script setup>
function showAlert() {
  alert('Clicked');
}
</script>

<template>
  <GlassContainer width="40%"><h1>The COUNT</h1>
  You are signed in as: The ultimate arbitor of truth</GlassContainer><br>
  <hr>
  <div class="content">

    <GlassContainer block="flex" title="Luna" height="150px" class="person" id="luna" @click="showAlert">
      <img src="assets/luna.jpg" class="person-image">
      <div class="vertical-text-container">
        <h3>Luna's Rules:</h3>
        <ul>
          <li>You snaps cant squeak or whatever uh thats hte only one i remember also</li>
          <li>no one can talk about peoples moms</li>
          <li>um... i dont remember</li>
        </ul>
      </div>
      <ClickableGlass block="flex" class="report-button" title="REPORT VIOLATION!"></ClickableGlass>
    </GlassContainer>

    <GlassContainer block="flex" title="Carter" height="150px" class="person" id="carter" @click="showAlert">
      <img src="assets/carter.jpg" class="person-image">
      <div class="vertical-text-container">
        <h3>Carters's Rules:</h3>
        <ul>
          <li>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa</li>
          <li>u<h1>fahsfahkjd</h1>m</li>
          <li>um</li>
        </ul>
        what is going on 
        <h1>fahsfahkjd</h1>
      </div>
      <ClickableGlass block="flex" class="report-button" title="REPORT VIOLATION!"></ClickableGlass>
    </GlassContainer>

  </div>
</template>

<script>

import ClickableGlass from './components/ClickableGlass.vue';
import GlassContainer from './components/GlassContainer.vue'
export default {
  name: 'App',
  components: {
    GlassContainer,
    ClickableGlass
  }
}
  </script>

<style>

pre {
  font-family: monospace;
  display: block;
  white-space: pre;
  overflow-x: auto;
  max-width: 100%; /* Ensure it doesn't expand beyond the container */
  word-break: break-word; /* Break overly long words if necessary */
  padding: 8px;
  border-radius: 4px;
}
  
ul {
  text-align: left;
}


.content {
  text-align: center;
  align-items: center;
  justify-content: center;
}

.report-button {
  display:flex;
  height:100% !important;
  margin-left: auto;
  text-align: center;
  align-items: center;
  justify-content: center;

}

.vertical-text-container {
    /* span the editor's content automatically above multiple columns: */
    -webkit-columns: 200px 2;
    /* Chrome, Safari1 Opera */
    -moz-columns: 100px 2;
    /* Firefox */
    columns: 100px 2;
    -webkit-column-gap: 5px;
    -moz-column-gap: 5px;
    column-gap: 5px;
    word-break: break-word;
    white-space: normal;
}

.person-image {
  object-fit: contain;
}

.person {
  height: 150px;
  width: 100%;
  
  display:flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
}

body {
  overflow-x: hidden;
  margin: 0px !important;
  image-rendering: optimizeSpeed;             
    image-rendering: -moz-crisp-edges;                               
    image-rendering: -o-crisp-edges;                                
    image-rendering: -webkit-optimize-contrast; 
    image-rendering: pixelated;                 
    image-rendering: optimize-contrast;        
    -ms-interpolation-mode: nearest-neighbor;                 

  background-image: url('assets/background.gif');
  background-size: cover;
  height: 100vh;
  padding:0;
}
#app {
   text-shadow: rgb(20, 20, 20) 0px 0 5px;
  -webkit-text-stroke-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cfcfcf;
}
a {
  color: rgb(211, 164, 164)
}
</style>
