<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Encrypt-Decrypt',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: 'خوارزميات أنظمة التشفير' },
    { property: 'og:description', content: 'موقع يعرض خوارزميات أنظمة التشفير في جامعة باشاك شاهير' },
    { property: 'og:image', content: '/encryptDecrypt/images/logo.jpg' }, // صحح المسار
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/encryptDecrypt/favicon.ico' }
  ]
})
</script>


<style>
* {
  font-family: "Lalezar", system-ui;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
}
</style>