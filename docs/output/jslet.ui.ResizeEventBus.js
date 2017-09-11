Ext.data.JsonP.jslet_ui_ResizeEventBus({"tagname":"class","name":"jslet.ui.ResizeEventBus","autodetected":{},"files":[{"filename":"jslet.resizeeventbus.js","href":"jslet.resizeeventbus.html#jslet-ui-ResizeEventBus"}],"members":[{"name":"resize","tagname":"method","owner":"jslet.ui.ResizeEventBus","id":"method-resize","meta":{}},{"name":"subscribe","tagname":"method","owner":"jslet.ui.ResizeEventBus","id":"method-subscribe","meta":{}},{"name":"unsubscribe","tagname":"method","owner":"jslet.ui.ResizeEventBus","id":"method-unsubscribe","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.ui.ResizeEventBus","short_doc":"Resize event bus, manage all resize event. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/jslet.resizeeventbus.html#jslet-ui-ResizeEventBus' target='_blank'>jslet.resizeeventbus.js</a></div></pre><div class='doc-contents'><p>Resize event bus, manage all resize event. Example:</p>\n\n<pre class='inline-example '><code>var myCtrlObj = {\n  checkSizeChanged: function(){}\n}\n\n//Subcribe a message from MessageBus\njslet.resizeEventBus.subcribe(myCtrlObj);\n\n//Unsubcribe a message from MessageBus\njslet.resizeEventBus.unsubcribe(myCtrlObj);\n\n//Send a mesasge to MessageBus\njslet.resizeEventBus.sendMessage('MyMessage', {x: 10, y:10});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-resize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.ResizeEventBus'>jslet.ui.ResizeEventBus</span><br/><a href='source/jslet.resizeeventbus.html#jslet-ui-ResizeEventBus-method-resize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.ResizeEventBus-method-resize' class='name expandable'>resize</a>( <span class='pre'>sender</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fire a \"resize\" message. ...</div><div class='long'><p>Fire a \"resize\" message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sender</span> : HtmlElement<div class='sub-desc'><p>Sender which sends the \"resize\" event.</p>\n</div></li></ul></div></div></div><div id='method-subscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.ResizeEventBus'>jslet.ui.ResizeEventBus</span><br/><a href='source/jslet.resizeeventbus.html#jslet-ui-ResizeEventBus-method-subscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.ResizeEventBus-method-subscribe' class='name expandable'>subscribe</a>( <span class='pre'>ctrlObj</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Subscribe a control to response a resize event. ...</div><div class='long'><p>Subscribe a control to response a resize event. Example:</p>\n\n<pre class='inline-example '><code>var uiCtrl = {\n  checkSizeChanged: function() {}\n};\n\njslet.ui.resizeEventBus.subscribe(uiCtrl);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctrlObj</span> : Object<div class='sub-desc'><p>Control object which need subscribe a message, there must be a function: checkSizeChanged in ctrlObj.</p>\n</div></li></ul></div></div></div><div id='method-unsubscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.ResizeEventBus'>jslet.ui.ResizeEventBus</span><br/><a href='source/jslet.resizeeventbus.html#jslet-ui-ResizeEventBus-method-unsubscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.ResizeEventBus-method-unsubscribe' class='name expandable'>unsubscribe</a>( <span class='pre'>ctrlObj</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unsubscribe a control to response a resize event. ...</div><div class='long'><p>Unsubscribe a control to response a resize event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctrlObj</span> : Object<div class='sub-desc'><p>control object which need subscribe a message.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});