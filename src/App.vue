<template>

<main class="h-screen w-screen bg-gradient-to-tr py-14 from-indigo-600 to-teal-600" >

<nav class=" glassBG shadow-lg container rounded px-4 py-4 mx-auto h-14 flex items-center justify-between" >

<div>
  <h1 class="font-bold text-xl text-gray-100" >GosmacQR</h1>
</div>

<div class="flex items-center space-x-3" >

  <a href="#" class="nav-link" >Home</a>
  <a href="#" class="nav-link" >Products</a>
  <a href="#" class="nav-link" >Shop</a>
  <a href="#" class="nav-link" >Blog</a>

</div>

</nav>

<section class="h-full" >

  <div class="container space-x-10 h-full mx-auto flex items-center justify-center" >

    <div class="w-[400px] h-96 glassBG flex relative p-4 items-center justify-center space-y-20 flex-col" id="inputBox">
      <h1 class="text-white text-xl font-semibold" >QR Kod Oluştur</h1>
      <input type="text" v-model="qrContent" class="my-5 rounded h-10 px-2 placeholder-slate-400 outline-none text-gray-800 bg-gray-100 focus-within:shadow-xl text-lg transition-all" placeholder="QR Kod İçeriği" id="">
      <a href="#" @click="createQR" class="text-xl w-[230px] flex items-center justify-center py-2 bg-violet-700 rounded-2xl hover:bg-violet-600 transition-all hover:shadow-lg text-gray-100" >Oluştur</a>
    </div>

    <div class="w-[400px] h-96 glassBG flex relative p-4 items-center justify-between flex-col" id="inputBox">
      <img v-if="generatedQR" :src="generatedQR" width="250" class="rounded" alt="">
      <a v-if="generatedQR" download="qr.png" :href="generatedQR" class="text-xl w-[230px] flex items-center justify-center py-2 bg-violet-700 rounded-2xl hover:bg-violet-600 transition-all hover:shadow-lg text-gray-100" >İndir</a>
      <span v-else class="absolute top-1/3 text-lg text-white" >Bir Şeyler Yaz!</span>
    </div>

  </div>

</section>

</main>

</template>


<script>
import QRCode from 'qrcode'

export default {
  data(){
    return {
    qrContent: null,
    generatedQR: null
    }
  },
  methods:{
    createQR(){
      if (!this.qrContent) return;
      
      QRCode.toDataURL(this.qrContent)
      .then(url => {
        this.generatedQR = url
        })
      .catch(err => {
        console.error(err)
      })

    }
  }
}
</script>

<style>
.glassBG {
  background: rgba( 255, 245, 245, 0.3 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>
