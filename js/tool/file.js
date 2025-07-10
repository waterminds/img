//取得副檔名
function getFileExtension1(filename) {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
  }
  //取得檔名
  function getFileName(val) {
      filename = val.split('\\').pop().split('/').pop();
      filename = filename.substring(0, filename.lastIndexOf('.'));
      return filename;
  }