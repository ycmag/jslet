Ext.data.JsonP.jslet_ui_EditMask({"tagname":"class","name":"jslet.ui.EditMask","autodetected":{},"files":[{"filename":"jslet.editmask.js","href":"jslet.editmask.html#jslet-ui-EditMask"}],"members":[{"name":"attach","tagname":"method","owner":"jslet.ui.EditMask","id":"method-attach","meta":{}},{"name":"detach","tagname":"method","owner":"jslet.ui.EditMask","id":"method-detach","meta":{}},{"name":"getValue","tagname":"method","owner":"jslet.ui.EditMask","id":"method-getValue","meta":{}},{"name":"setMask","tagname":"method","owner":"jslet.ui.EditMask","id":"method-setMask","meta":{}},{"name":"setValue","tagname":"method","owner":"jslet.ui.EditMask","id":"method-setValue","meta":{}},{"name":"validateValue","tagname":"method","owner":"jslet.ui.EditMask","id":"method-validateValue","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.ui.EditMask","short_doc":"EditMask. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/jslet.editmask.html#jslet-ui-EditMask' target='_blank'>jslet.editmask.js</a></div></pre><div class='doc-contents'><p>EditMask.</p>\n\n<p>Create edit mask class and attach to a HTML text element. Example:</p>\n\n<pre class='inline-example '><code>var htmlText = jQuery('#textId')[0];\nvar mask = new <a href=\"#!/api/jslet.ui.EditMask\" rel=\"jslet.ui.EditMask\" class=\"docClass\">jslet.ui.EditMask</a>();\nmask.attach(htmlText);\nmask.setMask('L00-000');\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-attach' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.EditMask'>jslet.ui.EditMask</span><br/><a href='source/jslet.editmask.html#jslet-ui-EditMask-method-attach' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.EditMask-method-attach' class='name expandable'>attach</a>( <span class='pre'>target</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Attach edit mask to a HTML text element. ...</div><div class='long'><p>Attach edit mask to a HTML text element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : HtmlElement<div class='sub-desc'><p>HTML text element.</p>\n</div></li></ul></div></div></div><div id='method-detach' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.EditMask'>jslet.ui.EditMask</span><br/><a href='source/jslet.editmask.html#jslet-ui-EditMask-method-detach' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.EditMask-method-detach' class='name expandable'>detach</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Detach edit mask from a HTML text element ...</div><div class='long'><p>Detach edit mask from a HTML text element</p>\n</div></div></div><div id='method-getValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.EditMask'>jslet.ui.EditMask</span><br/><a href='source/jslet.editmask.html#jslet-ui-EditMask-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.EditMask-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get unmasked value. ...</div><div class='long'><p>Get unmasked value.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Unmasked value.</p>\n</div></li></ul></div></div></div><div id='method-setMask' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.EditMask'>jslet.ui.EditMask</span><br/><a href='source/jslet.editmask.html#jslet-ui-EditMask-method-setMask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.EditMask-method-setMask' class='name expandable'>setMask</a>( <span class='pre'>mask, keepChar, transform</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set edit mask. ...</div><div class='long'><p>Set edit mask. Example:</p>\n\n<pre class='inline-example '><code>var htmlText = jQuery('#textId')[0];\nvar mask = new <a href=\"#!/api/jslet.ui.EditMask\" rel=\"jslet.ui.EditMask\" class=\"docClass\">jslet.ui.EditMask</a>();\nmask.attach(htmlText);\nmask.setMask('L00-000');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mask</span> : String<div class='sub-desc'><p>Mask string, rule: <br />\n '#': char set: 0-9 and -, not required. <br />\n '0': char set: 0-9, required. <br />\n '9': char set: 0-9, not required. <br />\n 'L': char set: A-Z,a-z, required. <br />\n 'l': char set: A-Z,a-z, not required. <br />\n 'A': char set: 0-9,a-z,A-Z, required. <br />\n 'a': char set: 0-9,a-z,A-Z, not required. <br />\n 'C': char set: any char, required. <br />\n 'c': char set: any char, not required.</p>\n</div></li><li><span class='pre'>keepChar</span> : Boolean<div class='sub-desc'><p>Keep the literal character or not.</p>\n</div></li><li><span class='pre'>transform</span> : String<div class='sub-desc'><p>Transform character into UpperCase or LowerCase, optional value: 'upper', 'lower' or null.</p>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.EditMask'>jslet.ui.EditMask</span><br/><a href='source/jslet.editmask.html#jslet-ui-EditMask-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.EditMask-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set value to text box. ...</div><div class='long'><p>Set value to text box.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>New value.</p>\n</div></li></ul></div></div></div><div id='method-validateValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.EditMask'>jslet.ui.EditMask</span><br/><a href='source/jslet.editmask.html#jslet-ui-EditMask-method-validateValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.EditMask-method-validateValue' class='name expandable'>validateValue</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check the value is valid or not. ...</div><div class='long'><p>Check the value is valid or not.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True - the value is valid, false - otherwise.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});