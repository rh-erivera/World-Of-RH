<template>
  <div class="container">
    <div>
      <h1>World of RH Concepts</h1>
      <a href="/design1">Design 1</a>
      <a href="/design2">Design 2</a>
      <a href="/design3">Design 3</a>
      <a href="/design4">Design 4</a>
      <a href="/design5">Design 5</a>
      <a href="/slideshow">Slideshow</a>    
    </div>
  </div>
</template>

<style>

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
.container div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container h1 {
  font-size: 30pt;
}
.container a {
  padding: 20px 0;
  color: #D5D5D5;
}
.container a:hover {
  color: #000;
}
.container a {
  transition: color 500ms ease-in;
  -webkit-transition: color 500ms ease-in;
}

</style>
