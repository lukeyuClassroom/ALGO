<template>
    <div class="main">
        <div class="input-form">
            <vs-select v-model="params.fun" label-placeholder="Algorithm">
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
            <vs-button gradient :active="active == 1" @click="submit">
                Submit
            </vs-button>
            <vs-button warn :active="active == 1" @click="reset">
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
        <vs-dialog not-center not-close v-model="active">
            <div class="header-dialog">
                <h2>Thanks for Waiting &#128516;</h2>
            </div>
            <div class="con-content">
                <ResultTable></ResultTable>
            </div>

            <template #footer>
                <div class="con-footer">
                    <vs-button @click="active = false" gradient>
                        Ok
                    </vs-button>
                    <vs-button @click="active = false" dark gradient>
                        Cancel
                    </vs-button>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>
<script>
import RequestForm from './RequestForm.vue'
import ResultTable from './ResultTable.vue'
import axios from "axios"
export default {
    components: { RequestForm, ResultTable },
    data: () => ({
        active: false,
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
            if (config.headers.token === '') {

                var color = 'warn';
                var position = 'top-center'
                this.$vs.notification({
                    color,
                    position,
                    text: 'Please Sign In First'
                })
                return
            }
            axios.post("http://8.142.88.250:8088/doCalc", this.params, config)
            .then((result) => { 
                console.log(result.data); 
                this.result = result.data 
                this.active = true
            }).catch((err) => console.log(err))
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
    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
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

.desc {
    padding: 4px 12px;
    border-style: solid;
    border-color: bisque;
    border-width: 4px;
    border-radius: 12px;

}

.input-form {
    margin-top: 100px;
}

.vs-dialog {
    width: 80%;
    min-width: 600px;
}

.vs-dialog-content {
    padding-top: 20px;
}

.header-dialog {
    display: flex;
    justify-content: center;
}

.con-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.con-footer .vs-button {
    margin: 0px;
}

.con-footer .vs-button .vs-button__content {
    padding: 10px 30px;
}

.con-footer .vs-button~.vs-button {
    margin-left: 10px;
}

.con-content {
    width: 100%;
}

.con-content p {
    font-size: 0.8rem;
    padding: 0px 10px;
}

.con-content .vs-checkbox-label {
    font-size: 0.8rem;
}

.con-content .vs-input-parent {
    width: 100%;
}

.con-content .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);
}

.con-content .vs-input-content .vs-input {
    width: 100%;
}

.footer-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(100%);
}

.footer-dialog .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;
}

.footer-dialog .new a {
    color: getColor('primary') !important;
    margin-left: 6px;
}

.footer-dialog .new a:hover {
    text-decoration: underline;
}

.footer-dialog .vs-button {
    margin: 0px;
}
</style>