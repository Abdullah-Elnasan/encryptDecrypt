<template>
    <div class="container text-center p-4" dir="rtl">
        <h2 class="mb-5">تشغيل الخوارزمية: <span>{{ algorithmName }}</span></h2>

        <div style="align-items: center; display: ruby;" class="mt-5">
            <div class="parent-btn d-flex justify-content-center gap-3 mb-4 float-center">
                <button class="btn" :class="{ active: activeButton === 'encrypt' }" @click="setActiveButton('encrypt')">
                    تشفير
                </button>
                <button class="btn" :class="{ active: activeButton === 'decrypt' }" @click="setActiveButton('decrypt')">
                    فك التشفير
                </button>
            </div>
        </div>
        <div v-if="needsKey" class="form-group mb-4 text-end">
            <label class="mb-1 fw-bold">المفتاح:</label>
            <input v-model="key" class="form-control text-start" placeholder="أدخل المفتاح" />
        </div>


        <div class="row">
            <div class="col-6 form-group mb-3 text-end">
                <label class="mb-1 fw-bold">النص:</label>
                <textarea v-model="input" class="form-control text-start" placeholder="أدخل النص هنا"
                    rows="4"></textarea>
            </div>

            <div class="col-6 text-end" hieght="100%">
                <label class="mb-1 fw-bold">النتيجة:</label>
                <div class="alert alert-info text-break text-start position-relative">
                    <p v-if="output" class="mb-0">{{ output }}</p>
                    <button class="btn btn-sm btn-secondary position-absolute bottom-0 start-0 m-2" @click="copyOutput">
                        نسخ
                    </button>
                </div>
            </div>
        </div>
        <div>
            <button class="btn btn-outline-primary mt-5" @click="setActiveALgorithm()">نفذ الخوارزمية</button>
        </div>

        <div v-if="copied" class="text-success mt-2">✅ تم النسخ!</div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import algorithmFunctions from '~/helper/algorithmFunctions'
import algorithmsList from '~/data/algorithms'

const route = useRoute()
const slug = route.params.slug

const algorithm = algorithmFunctions[slug]
const algorithmName = computed(() => {
    const found = algorithmsList.find(a => a.slug === slug)
    return found?.name || slug
})

const needsKey = algorithm?.requiresKey ?? false

const input = ref('')
const key = ref('')
const output = ref('')
const copied = ref(false)
const activeButton = ref('encrypt')

function encrypt() {
    copied.value = false
    output.value = algorithm?.encrypt ? algorithm.encrypt(input.value, key.value) : '⚠️ لا توجد دالة تشفير.'
}
function setActiveButton(button) {
    activeButton.value = button;
}
function setActiveALgorithm(button) {
    if (this.activeButton === 'encrypt') {
        encrypt()
    } else {
        decrypt()
    }
}

function decrypt() {
    copied.value = false
    output.value = algorithm?.decrypt ? algorithm.decrypt(input.value, key.value) : '⚠️ لا توجد دالة فك تشفير.'
}

function copyOutput() {
    navigator.clipboard.writeText(output.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
}
</script>

<style scoped lang="scss">
textarea,
input {
    direction: rtl;
    text-align: right;
}

h2 {
    span {
        color: #113976 !important;
    }
}

.parent-btn {
    background-color: rgb(233, 235, 249);
    width: 200px;
    padding: 6px 3px;
    border-radius: 8px;
}

.btn {
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    /* إضافة تأثيرات التحول */
}

.active {
    background-color: #113976;
    // background-color: ##055160;
    color: white;
    transform: scale(1.05);
    /* تأثير تكبير الزر عند تفعيل الكلاس active */
}

.btn:not(.active) {
    transform: scale(1);
    /* الزر غير النشط يبقى بحجمه الطبيعي */
}

.btn-outline-primary {
    border-color:  #113976 !important; 
    color: #113976 !important;
}

.btn-outline-primary:hover {
    background-color: #113976 !important;
    color: white !important;
    border-color: #113976 !important;
}

.alert-info {
    background-color: #113976 !important;
    color: white !important;

}
.row {
    div {
        height: 200px;

        textarea {
            height: 200px;
        }
    }
}
</style>
