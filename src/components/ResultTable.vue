<template>
  <div class="result-table">
    <div class="row title">
      SCETION & CAPABILITY
    </div>
    <div class="row">
      <div class="col">
        <div :key="index" v-for="l,index in scLabel1" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="r,index in scResult1" class="row result">{{ r+' '+scUnit1[index] }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="l,index in scLabel2" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="r,index in scResult2" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="l,index in scLabel3" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="r,index in scResult3" class="row result">{{ r }}</div>
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
        <div :key="index" v-for="r,index in comResult1" class="row result">{{ r+' '+comUnit1[index] }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="l,index in comLabel2" class="row label">{{ l }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="r,index in comResult2" class="row result">{{ r+' '+comUnit2[index] }}</div>
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
        <div :key="index" v-for="r,index in ccResult1" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="s,index in ccSign1" class="row label" v-bind:style="{'background-color':s=='OK'?'lightgreen':s=='NGB'?'orangered':'transparent'}">{{ s }}</div>
      </div>
      <div class="col">
        <div class="row label">STABILITY</div>
        <div :key="index" v-for="r,index in ccResult2" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="s,index in ccSign2" class="row label" v-bind:style="{'background-color':s=='OK'?'lightgreen':s=='NGB'?'orangered':'transparent'}">{{ s }}</div>
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
        <div :key="index" v-for="r,index in ctResult1" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="s,index in ctSign1" class="row label" v-bind:style="{'background-color':s=='OK'?'lightgreen':s=='NGB'?'orangered':'transparent'}">{{ s }}</div>
      </div>
      <div class="col">
        <div class="row label">STABILITY</div>
        <div :key="index" v-for="r,index in ctResult2" class="row result">{{ r }}</div>
      </div>
      <div class="col">
        <div :key="index" v-for="s,index in ctSign2" class="row label" v-bind:style="{'background-color':s=='OK'?'lightgreen':s=='NGB'?'orangered':'transparent'}">{{ s }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data:() => ({
    scLabel1: ['MAJOR BENDING, Mx','MINOR BENDING, My','COMPRESSION','TENSION'],
    scResult1:['0','0','0','0'],
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