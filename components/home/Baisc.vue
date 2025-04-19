<template>
    <div class="">
        <div style="width: 100%; height: 50vh;" class="d-block position-relative">
            <img src="../../public/images/912226f6-3950-4838-b4bd-58a58a620a5c.jpg" width="100%" height="100%" alt="">
            <div class="div-center">
                <h1 class="mt-5">
                    Encrypt & Decrypt Algorithms
                </h1>
                <p>جرب خوارزميات التشفير وفك التشفير وتفاعل مع أدوات تعليمية</p>
                <button type="button" class="btn btn-primary mt-5">ابدأ الان</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Container",
};
</script>

<!-- <style>
@import url('https://fonts.googleapis.com/css2?family=Lalezar&family=Winky+Rough:ital,wght@0,300..900;1,300..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
</style> -->

<style scoped lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

img {
    // filter: blur(1px) brightness(0.8) ;
    filter: blur(1px) brightness(0.8) grayscale(0) contrast(1) saturate(1);

}

.div-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Lalezar", system-ui;
    font-weight: 100;
    letter-spacing: 3px; /* يزيد التباعد بين الحروف */
    
    p{
        font-size: 20px;
        opacity: 0.8; /* من 0 إلى 1 — كل ما قل الرقم، صار باهت أكثر */

    }


    button{
        width: 100px;
        background-color: #113976;
        border: #113976;
        letter-spacing: 2px; /* يزيد التباعد بين الحروف */

    }
    button:hover {
        background-color: #0d2a5f;
        border: #0d2a5f;
    }

}
</style>