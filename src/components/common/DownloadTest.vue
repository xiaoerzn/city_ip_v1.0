<template>
  <div name="downloadfile" @click="download()" >下载</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    downloadExcel() {
      let a = document.createElement("a");
      a.href = "http://10.15.1.192:8000/api/ip/down";
      a.click();
    },
    download(){
      const x = new window.XMLHttpRequest();
    x.open('GET', 'http://10.15.1.192:8000/apis/ip/down?eachpage=1&pagenum=1&domain_name=605.tw&top_name=asn&top_number=10&ip=203.66.143.165&filetype=html', true);
    x.responseType = 'blob';
    x.onload = () => {
        const url = window.URL.createObjectURL(x.response);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'aaaaaa.html';
        a.click();
    };
    x.send();
    }
  },
};
</script>

<style></style>
