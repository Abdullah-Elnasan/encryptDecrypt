<template>
  <div class="font-cairo bg-white min-h-screen">
    <!-- Hero Section -->
    <section class="text-center py-20 bg-red-100">
      <Baisc></Baisc>
    </section>

    <!-- أشهر الخوارزميات -->
    <section class="container text-center py-10 mx-auto mt-4 body-contnet">
      <h2 class="mb-5">خوارزميات مشهورة</h2>
      <div class="row">
        <div v-for="algo in algorithms" :key="algo.name" class=" col-12 col-sm-6 col-lg-4 p-2">
          <div class="card-content border border-red-300 p-4 rounded hover:shadow-md transition"
            style="box-shadow: rgba(28, 44, 70, 0.3) 0px 1px 2px 0px, rgba(28, 44, 70, 0.15) 0px 1px 3px 1px;">
            <h3 class="text-lg font-semibold text-red-600 mt-xl-2">{{ algo.name }}</h3>
            <p class="text-sm text-red-500 mt-2 mt-xl-3">{{ algo.description }}</p>
            <NuxtLink :to="`/algorithms/${algo.slug}`">
              <button type="button" class="btn btn-primary mt-3 mt-xl-5">
                جربها
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Baisc from '~/components/home/Baisc.vue'
import algorithms from '~/data/algorithms'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lalezar&family=Winky+Rough:ital,wght@0,300..900;1,300..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
</style>

<style lang="scss" scoped>
.font-cairo {
  font-family: "Lalezar", system-ui;
  letter-spacing: 1px;
}

.body-contnet {
  div {
    p {
      opacity: 0.8;
    }

    button {
      width: 100px;
      background-color: #113976;
      border: #113976;
      letter-spacing: 2px;
      /* يزيد التباعد بين الحروف */

    }

    button:hover {
      background-color: #0d2a5f;
      border: #0d2a5f;
    }
  }
}


@media (min-width: 998px) {
  .body-contnet {
    .card-content {
      height: 250px !important;
    }
  }
}


</style>
