<template>
  <div class="result-table">
    <div class="row title">
      SCETION & CAPABILITY
    </div>
    <div class="row">
      <div class="col">
        <div class="row label">{{ fun }}</div>
        <div :key="index" v-for="l,index in scLabel1" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="l,index in ['SECTION', '']" class="row label">{{ l }}</div>
        <div :key="index+2" v-for="r,index in [s28, s29, s30, s31]" class="row result">{{ r+' '+scUnit1[index] }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="l,index in scLabel2" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="r,index in [v26, v27, v28, v29, v30, v31]" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="l,index in scLabel3" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="r,index in [x26, x27, x28, x29, x30, x31]" class="row result">{{ r }}</div>
      </div>
    </div>
    <div class="row title">
      COMPUTATION
    </div>
    <div class="row">
      <div class="col">
        <div :key="index" v-for="l,index in comLabel1" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="r,index in [e5, '0', e2, e3, e4, e7]" class="row result">{{ r+' '+comUnit1[index] }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="l,index in comLabel2" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="r,index in [x34, x35, ' ', x37, x38, x39]" class="row result">{{ r+' '+comUnit2[index] }}</div>
      </div>
    </div>
    <div class="row title">
      COMBINED BENDING & COMPRESSION
    </div>
    <div class="row">
      <div class="col">
        <div :key="index" v-for="l,index in ccLabel1" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div class="row label">STABILITY</div>
        <div :key="index" v-for="r,index in [s43, s44]" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="s,index in ['', t43, t44]" class="row label" v-bind:style="{'background-color':s=='Ok'?'lightgreen':s=='NBG'?'orangered':'transparent'}">{{ s }}</div>
      </div>
      <div class="col">
        <div class="row label">STABILITY</div>
        <div :key="index" v-for="r,index in [u43, u44]" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="s,index in ['', v43, v44]" class="row label" v-bind:style="{'background-color':s=='Ok'?'lightgreen':s=='NBG'?'orangered':'transparent'}">{{ s }}</div>
      </div>
    </div>
    <div class="row title">
      COMBINED BENDING & TENSION
    </div>
    
    <div class="row">
      <div class="col">
        <div :key="index" v-for="l,index in ctLabel1" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div class="row label">STABILITY</div>
        <div :key="index" v-for="r,index in [s48, s49]" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="s,index in ['',t48, t49]" class="row label" v-bind:style="{'background-color':s=='Ok'?'lightgreen':s=='NBG'?'orangered':'transparent'}">{{ s }}</div>
      </div>
      <div class="col">
        <div class="row label">STABILITY</div>
        <div :key="index" v-for="r,index in [u48, u49]" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="s,index in ['',v48, v49]" class="row label" v-bind:style="{'background-color':s=='Ok'?'lightgreen':s=='NBG'?'orangered':'transparent'}">{{ s }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
        fun:'',
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
    },
  data:() => ({
    scLabel1: ['', 'MAJOR BENDING, Mx','MINOR BENDING, My','COMPRESSION','TENSION'],
    scResult1:['0', '0','0','0','0'],
    scUnit1: ['kNm','kNm','kN','Kn'],
    scLabel2: ['D','B','dl','ri','t','ri'],
    scResult2:['0','0','0','0','0','0'],
    scLabel3: ['A','Fy','Ixx','Iyy','E'],
    scResult3:['0','0','0','0','0'],

    comLabel1:['LENGTH, Le','NUMBER OF RESTRAINT','MAJOR BENDING, Mx','MINOR BENDING, My','AXIAL COMPRESSION, P','AXIAL TENSION, T'],
    comResult1:['0','0','0','0','0','0'],
    comUnit1:['m','','kNm','kNm','kN','kN'],
    comLabel2:['EFFECTIVE Lex','EFFECTIVE Lex','','Lex','Ley','Lez'],
    comResult2:['0','0','','0','0','0'],
    comUnit2:['','','','m','m','m'],

    ccLabel1:['','MAJOR BENDING, Mx','MINOR BENDING, My'],
    ccResult1:['0','0'],
    ccSign1:['','OK','OK'],
    ccResult2:['0','0'],
    ccSign2:['','OK','OK'],
    
    ctLabel1:['','MAJOR BENDING, Mx','MINOR BENDING, My'],
    ctResult1:['0','0'],
    ctSign1:['','OK','NGB'],
    ctResult2:['0','0'],
    ctSign2:['','OK','OK'],
  })
}
</script>
<style>
.result-table {
  flex-grow: 1;
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: cen;
  overflow: scroll;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  overflow: hidden;
  padding: 2px 0;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  overflow: hidden;
  padding: 0 2px;
}
.title {
  background-color: bisque;
  font-weight: bold;
  font-size: 1em;
}
.label, .result {
  min-width: 80px;
  margin-left: 20px;
  height: 30px;
}
.result {
  justify-content: flex-start;
}
.label {
  font-weight: bold;
  justify-content: center;
}
</style>