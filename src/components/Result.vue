<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="9">
                <v-sheet class="pa-0 titleline1">
                    SCETION & CAPABILITY
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0 titleline2">
                    C89.75
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 titleline2">
                    SECTION
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    D
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{v26}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    A
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{x26}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    B
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{v27}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    Fy
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{x27}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    MAJOR BENDING, Mx
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{s28}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit">
                    kNm
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    dl
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{v28}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    Ixx
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{x28}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    MINOR BENDING, My
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{s29}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit unit">
                    kNm
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    ri
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{v29}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    Iyy
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{x29}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    COMPRESSION
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{s30}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit unit">
                    kN
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    t
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{v30}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    E
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{x30}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    TENSION
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{s31}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit unit">
                    kN
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    ri
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    {{v31}}
                </v-sheet>
            </v-col>
            <v-col cols="2">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="8">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="9">
                <v-sheet class="pa-0 titleline1">
                    COMPUTATION
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <v-sheet class="pa-0">
                    LENGTH, Le
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback">
                    {{e5}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit">
                    m
                </v-sheet>
            </v-col>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    EFFECTIVE Lex
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback">
                    {{x34}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <v-sheet class="pa-0">
                    NUMBER OF RESTRAINT
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback">
                    0
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
            <v-col cols="2">
                <v-sheet class="pa-0" style="font-size:14px;">
                    EFFECTIVE TORSIONALL
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback">
                    {{x35}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <v-sheet class="pa-0">
                    MAJOR BENDING, Mx
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback">
                    {{e2}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit">
                    kNm
                </v-sheet>
            </v-col>
            <v-col cols="4">
                <v-sheet class="pa-0">

                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <v-sheet class="pa-0">
                    MINOR BENDING, My
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback">
                    {{e3}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit">
                    kNm
                </v-sheet>
            </v-col>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    Lex
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{x37}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit">
                    m
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <v-sheet class="pa-0">
                    AXIAL COMPRESSION, P
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback">
                    {{e4}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit">
                    kN
                </v-sheet>
            </v-col>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    Ley
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{x38}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit">
                    m
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="3">
                <v-sheet class="pa-0">
                    AXIAL TENSION, T
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback">
                    {{e7}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit">
                    kN
                </v-sheet>
            </v-col>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    Lez
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{x39}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 unit">
                    m
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="8">
                <v-sheet class="pa-0">
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="6">
                <v-sheet class="pa-0 titleline1">
                    COMBINED BENDING & COMPRESSION
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">

                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    STABILITY
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">

                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    STRENGTH
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">

                </v-sheet>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    MAJOR BENDING, Mx
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{s43}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0" v-bind:style="{'background-color':t43=='Ok'?'green':'red'}">
                    {{t43}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{u43}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0" v-bind:style="{'background-color':v43=='Ok'?'green':'red'}">
                    {{v43}}
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    MINOR BENDING, My
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{s44}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0" v-bind:style="{'background-color':t44=='Ok'?'green':'red'}">
                    {{t44}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{u44}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0" v-bind:style="{'background-color':v44=='Ok'?'green':'red'}">
                    {{v44}}
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="8">
                <v-sheet class="pa-0">

                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="6">
                <v-sheet class="pa-0 titleline1">
                    COMBINED BENDING & TENSION
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">

                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    STABILITY
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">

                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">
                    STRENGTH
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0">

                </v-sheet>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    MAJOR BENDING, Mx
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{s48}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0" v-bind:style="{'background-color':t48=='Ok'?'green':'red'}">
                    {{t48}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{u48}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0" v-bind:style="{'background-color':v48=='Ok'?'green':'red'}">
                    {{v48}}
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="2">
                <v-sheet class="pa-0">
                    MINOR BENDING, My
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{s49}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0" v-bind:style="{'background-color':t49=='Ok'?'green':'red'}">
                    {{t49}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0 accentback2">
                    {{u49}}
                </v-sheet>
            </v-col>
            <v-col cols="1">
                <v-sheet class="pa-0" v-bind:style="{'background-color':v49=='Ok'?'green':'red'}">
                    {{v49}}
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="8">
                <v-sheet class="pa-0">

                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        e2: '',
        e3: '',
        e4: '',
        e5: '',
        e7: '',
        s28: '',
        s29: '',
        s30: '',
        s31: '',
        s43: '',
        s44: '',
        s48: '',
        s49: '',
        t43: '',
        t44: '',
        t48: '',
        t49: '',
        u43: '',
        u44: '',
        u48: '',
        u49: '',
        v43: '',
        v44: '',
        v48: '',
        v49: '',
        v26: '',
        v27: '',
        v28: '',
        v29: '',
        v30: '',
        v31: '',
        x26: '',
        x27: '',
        x28: '',
        x29: '',
        x30: '',
        x31: '',
        x34: '',
        x35: '',
        x36: '',
        x37: '',
        x38: '',
        x39: '',
    }
}
</script>
<style scoped>
* {
    text-align: center;
}

.v-col {
    background-color: white;
}

.titleline1 {
    background-color: rgb(242, 242, 242);
    color: rgb(236, 170, 107);
    text-align: center;
    font-weight: bold;
}

.titleline2 {
    background-color: rgb(154, 179, 212);
    color: white;
    font-weight: bold;
}

.unit {
    text-align: left;
    padding-left: 2px !important;
}

.accentback {
    background-color: rgb(247, 205, 160);
}

.accentback2 {
    background-color: rgb(220, 220, 220);
}

.accentback3 {
    background-color: red;
}

.accentback4 {
    background-color: greenyellow;
}
</style>