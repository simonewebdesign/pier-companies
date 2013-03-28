
/* Display a confirm box when the user
 * clicks on the delete link.
 */
function confirmDeleteHandler(e) {
  e = e || window.event;
  var target;
  target = e.target || e.srcElement;
  if ( target.className.match(/\bconfirmDelete\b/) ) {
    if (!confirm('Are you sure?')) {
      e.preventDefault();
    }
  }
}

if (document.body.addEventListener) {
  document.body.addEventListener('click', confirmDeleteHandler, false);
} else {
  document.body.attachEvent('onclick', confirmDeleteHandler); // for IE
}

// ---------------------


/* TinyMCE configuration.
 */
function loadTinyMCE() {
   tinyMCE.init({
      mode : "textareas",
      theme : "advanced",
      plugins : "pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",
      theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
      theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
      theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
      theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak",
      theme_advanced_toolbar_location : "top",
      theme_advanced_toolbar_align : "left",
      theme_advanced_statusbar_location : "bottom",
      theme_advanced_resizing : true
   });
}

/* Load TinyMCE when the user
 * clicks on the loadTinyMCE link.
 */
function loadTinyMCEHandler(e) {
  e = e || window.event;
  var target;
  target = e.target || e.srcElement;
  if ( target.className.match(/\bloadTinyMCE\b/) ) {
    loadTinyMCE();
    target.parentNode.removeChild(target); // it's the only way to remove in js
  }
}

if (document.body.addEventListener) {
  document.body.addEventListener('click', loadTinyMCEHandler, false);
} else {
  document.body.attachEvent('onclick', loadTinyMCEHandler, false); // for IE
}
