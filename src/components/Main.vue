<template>
    <div class="main">
        <div class="input-form">
            <vs-select color="success" v-model="params.fun" label-placeholder="Algorithm">
                <vs-option :key="index" v-for="fun, index in funs" v-bind:label="fun" v-bind:value="fun">
                    {{ fun }}
                </vs-option>
            </vs-select>

            <vs-input border v-model="params.e2" label-placeholder="BM on Section Mx/kNm" />

            <vs-input border v-model="params.e3" label-placeholder="BM on Section My/kNm" />

            <vs-input border v-model="params.e4" label-placeholder="Axial Load Compression/kN" />

            <vs-input border v-model="params.e5" label-placeholder="Length of Section/m" />

            <vs-input border v-model="params.e7" label-placeholder="Axial Load Tension/kN" />

        </div>

        <div class="button-panel">
            <vs-button gradient @click="submit">
                Submit
            </vs-button>
            <vs-button warn @click="reset">
                Reset
            </vs-button>
        </div>

        <div class="desc">
            <p>
                The concept of algorithm has existed since antiquity. Arithmetic algorithms, such as a division algorithm,
                was used by ancient Babylonian mathematicians c. 2500 BC and Egyptian mathematicians c. 1550 BC. Greek
                mathematicians later used algorithms in 240 BC in the sieve of Eratosthenes for finding prime numbers,
                and the Euclidean algorithm for finding the greatest common divisor of two numbers. Arabic
                mathematicians such as al-Kindi in the 9th century used cryptographic algorithms for code-breaking, based on
                frequency analysis.
            </p>
        </div>

        <ResultTable v-bind="result" :showResult="showResult" @hideResult="hideResult"></ResultTable>
            
    </div>
</template>
<script>
import RequestForm from './RequestForm.vue'
import ResultTable from './ResultTable.vue'
import axios from "axios"
export default {
    components: { RequestForm, ResultTable },
    data: () => ({
        showResult: false,
        funs: ['C8975', 'C20019', 'C20024', 'C25019', 'C25024', 'C30024', 'C89-38-75', 'C89-38-95', 'C89-40-75', 'C89-40-95', 'C89-41-75', 'C89-41-95', 'C91-41-75', 'C91-41-95'],
        params: {
            fun: '',
            e2: '',
            e3: '',
            e4: '',
            e5: '',
            e7: ''
        }, result: {
        }
    }),
    methods: {
        submit() {
            const config = {
                headers: {
                    'token': localStorage.getItem('token')
                    // 'token':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW1lIiwiaXNzIjoiYWRtaW4iLCJleHAiOjE2ODQ0MDcwMzUsImlhdCI6MTY4NDQwMzQzNSwicm9sIjoiUk9MRV9BRE1JTiJ9.5vCpd7Zf7DQwS4Lt1koxRZWVee0Z_-ad9QDdq-v2UGF5PFAXhgxJ52zXt5sov3meR_Mpa4GEqODNamGFzOFu4g'
                }
            }
            console.log(config.headers.token)
            if (!config.headers.token) {

                var color = 'warn';
                var position = 'top-center'
                this.$vs.notification({
                    color,
                    position,
                    text: 'Please Sign In First'
                })
                this.$emit('needSignInEvent', true)
                return
            }
            if (!this.params.fun) {

                var color = 'warn';
                var position = 'top-center'
                this.$vs.notification({
                    color,
                    position,
                    text: 'Please chose function'
                })
                return
            }
            var type = 'points'
            const loading = this.$vs.loading({
                type: type,
                opacity: 0.9,
                filter: blur(0.7)
            })
            axios.post("http://8.142.88.250:8088/doCalc", this.params, config)
                .then((result) => {
                    this.result = result.data
                    this.result.fun = this.params.fun
                    // console.log(this.result); 

                    setTimeout(() => {
                        loading.close()
                        this.showResult = true
                    }, 500)
                }).catch((err) => {
                    console.log(err)
                    loading.close()
                })
            //axios.post("http://127.0.0.1:8088/doCalc", this.params, config).then((result) => { console.log(result.data); this.result = result.data }).catch((err) => console.log(err))
        },
        reset() {
            this.params = {
                fun: '',
                e2: '',
                e3: '',
                e4: '',
                e5: '',
                e7: ''
            }
        },
        hideResult(){
            this.showResult = false
        }
    }
}
</script>

<style scoped>
.main {
    min-width: 1000px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: scroll;
    justify-content: flex-start;
    align-items: center;
}

.input-form,
.button-panel,
.desc {
    width: 80%;
    margin-top: 32px;
    display: flex;
    justify-content: center;
}

.input-form {
    margin-top: 100px;
}
.desc {
    padding: 4px 12px;
    border-style: solid;
    border-color: bisque;
    border-width: 4px;
    border-radius: 12px;

}
</style>