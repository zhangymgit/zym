;(function (designWidth, designFontSize, maxWidth) {
  var doc = document
  var win = window
  var docEl = doc.documentElement
  var tid
  var rootItem
  var rootStyle
  function refreshRem () {
    var nowwidth = docEl.getBoundingClientRect().width
    if (!maxWidth) {
      maxWidth = 640
    }
    if (nowwidth > maxWidth) {
      nowwidth = maxWidth
    }
    var nowFontsizze = nowwidth * designFontSize / designWidth
    rootStyle = 'html{font-size:' + nowFontsizze + 'px !important}'
    rootItem = document.getElementById('rootsize') || document.createElement('style')
    if (!document.getElementById('rootsize')) {
      document.getElementsByTagName('head')[0].appendChild(rootItem)
      rootItem.id = 'rootsize'
    }
    if (rootItem.styleSheet) {
      rootItem.styleSheet.disabled || (rootItem.styleSheet.cssText = rootStyle)
    } else {
      try {
        rootItem.innerHTML = rootStyle
      } catch (error) {
        rootItem.innerText = rootStyle
      }
    }
    docEl.style.fontSize = nowFontsizze + 'px'
  }
  refreshRem()
  win.addEventListener('resize', function () {
    clearTimeout(tid)
    tid = setTimeout(refreshRem, 300)
  }, false)
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }
  }, false)
  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = '16px'
  } else {
    doc.addEventListener('DOMContentLoaded', function (e) {
      doc.body.style.fontSize = '16px'
    }, false)
  }
})(750, 100, 750)
