// ----------------------------------------新窗口打开--------------------------------------------------
var OpenNewBlank = function (params, add, that) {
    const {
      href
    } = that.$router.resolve({
      path: `/${add}/${params}`,
    });
    window.open(href, "_blank");
    // that.$router.push({ path: `/${add}/${params}` })
  }
// ------------------------------------------下载文件----------------------------------------
var DownloadFile = function (downloadurl, filename) {
  const x = new window.XMLHttpRequest();
  x.open('GET', downloadurl, true);
  x.responseType = 'blob';
  x.onload = () => {
    const url = window.URL.createObjectURL(x.response);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };
  x.send();
}


  export default {
    OpenNewBlank,
    DownloadFile,
  
  }