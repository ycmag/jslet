Ext.data.JsonP.jslet_ui_DnD({"tagname":"class","name":"jslet.ui.DnD","autodetected":{},"files":[{"filename":"jslet.dnd.js","href":"jslet.dnd.html#jslet-ui-DnD"}],"private":true,"members":[{"name":"bindControl","tagname":"method","owner":"jslet.ui.DnD","id":"method-bindControl","meta":{}},{"name":"unbindControl","tagname":"method","owner":"jslet.ui.DnD","id":"method-unbindControl","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.ui.DnD","short_doc":"Drag &amp; Drop. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/jslet.dnd.html#jslet-ui-DnD' target='_blank'>jslet.dnd.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Drag &amp; Drop. A common framework to implement drag &amp; drop. Example:</p>\n\n<pre class='inline-example '><code>//Define a delegate class\ndndDelegate = {}\ndndDelegate._doDragStart = function(){}\ndndDelegate._doDragging = function (oldX, oldY, x, y, deltaX, deltaY) {}\ndndDelegate._doDragEnd = function (oldX, oldY, x, y, deltaX, deltaY) {}\ndndDelegate._doDragCancel = function () {}\n\n//Initialize <a href=\"#!/api/jslet.ui.DnD\" rel=\"jslet.ui.DnD\" class=\"docClass\">jslet.ui.DnD</a>\n//var dnd = new <a href=\"#!/api/jslet.ui.DnD\" rel=\"jslet.ui.DnD\" class=\"docClass\">jslet.ui.DnD</a>();\n//Or use global <a href=\"#!/api/jslet.ui.DnD\" rel=\"jslet.ui.DnD\" class=\"docClass\">jslet.ui.DnD</a> instance to bind 'dndDelegate'\njslet.ui.dnd.bindControl(dndDelegate);\n\n//After end dragging, you need unbind it\njslet.ui.dnd.unbindControl();\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-bindControl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DnD'>jslet.ui.DnD</span><br/><a href='source/jslet.dnd.html#jslet-ui-DnD-method-bindControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DnD-method-bindControl' class='name expandable'>bindControl</a>( <span class='pre'>ctrl</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind control. ...</div><div class='long'><p>Bind control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctrl</span> : Object<div class='sub-desc'><p>The control need drag &amp; drop, there are four method in it: <br />\n ctrl.<em>doDragStart = function(){} <br />\n ctrl.</em>doDragging = function(oldX, oldY, x, y, deltaX, deltaY){} <br />\n ctrl.<em>doDragEnd = function(oldX, oldY, x, y, deltaX, deltaY){} <br />\n ctrl.</em>doDragCancel = function(){} <br />\n ctrl_doDragStart = function{}</p>\n</div></li></ul></div></div></div><div id='method-unbindControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DnD'>jslet.ui.DnD</span><br/><a href='source/jslet.dnd.html#jslet-ui-DnD-method-unbindControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DnD-method-unbindControl' class='name expandable'>unbindControl</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unbind the current control ...</div><div class='long'><p>Unbind the current control</p>\n</div></div></div></div></div></div></div>","meta":{"private":true}});