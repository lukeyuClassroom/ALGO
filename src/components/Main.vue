<template>
    <div class="main">
        <div class="input-form">
            <vs-input border v-model="value" placeholder="Name" />

            <vs-input color="#7d33ff" border type="password" v-model="value2" placeholder="Password">
            </vs-input>

            <vs-input border warn type="email" icon-after v-model="value3" label-placeholder="Address">
            </vs-input>

            <vs-input border v-model="value" placeholder="Name" />

            <vs-input color="#7d33ff" border type="password" v-model="value2" placeholder="Password">
            </vs-input>

            <vs-input border warn type="email" icon-after v-model="value3" label-placeholder="Address">

            </vs-input>
        </div>

        <div class="button-panel">
            <vs-button gradient :active="active == 1" @click="active = 1">
                Submit
            </vs-button>
            <vs-button warn :active="active == 1" @click="active = 1">
                Reset
            </vs-button>
        </div>

        <div class="desc">
            <p>
                The concept of algorithm has existed since antiquity. Arithmetic algorithms, such as a division algorithm,
                was used by ancient Babylonian mathematicians c. 2500 BC and Egyptian mathematicians c. 1550 BC.[10] Greek
                mathematicians later used algorithms in 240 BC in the sieve of Eratosthenes for finding prime numbers,[11]
                and the Euclidean algorithm for finding the greatest common divisor of two numbers.[12] Arabic
                mathematicians such as al-Kindi in the 9th century used cryptographic algorithms for code-breaking, based on
                frequency analysis.[13]
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
export default {
    components: { RequestForm, ResultTable },
    data: () => ({
        active: 0,
        active3: true
    })
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
.button-panel, .desc {
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
}</style>