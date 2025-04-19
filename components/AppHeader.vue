<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <div style="display: contents;">
                <a class="navbar-brand" href="#">
                    <img src="../public/images/encrypted.png" width="100%" height="40px" alt="Logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#footer">التواصل</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            الخوارزميات
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="algo in algorithms" :key="algo.name">
                                <NuxtLink :to="`/algorithms/${algo.slug}`" class="dropdown-item">
                                    {{ algo.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">الصفحة الرئيسية</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import algorithms from '../data/algorithms'
</script>
