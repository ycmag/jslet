Ext.data.JsonP.jslet_ui_DBRadioGroup({"tagname":"class","name":"jslet.ui.DBRadioGroup","autodetected":{},"files":[{"filename":"jslet.dbradiogroup.js","href":"jslet.dbradiogroup.html#jslet-ui-DBRadioGroup"}],"extends":"jslet.ui.DBFieldControl","members":[{"name":"columnCount","tagname":"property","owner":"jslet.ui.DBRadioGroup","id":"property-columnCount","meta":{}},{"name":"dataset","tagname":"property","owner":"jslet.ui.DBControl","id":"property-dataset","meta":{}},{"name":"field","tagname":"property","owner":"jslet.ui.DBFieldControl","id":"property-field","meta":{}},{"name":"tabIndex","tagname":"property","owner":"jslet.ui.DBFieldControl","id":"property-tabIndex","meta":{}},{"name":"valueIndex","tagname":"property","owner":"jslet.ui.DBFieldControl","id":"property-valueIndex","meta":{}},{"name":"addChildControl","tagname":"method","owner":"jslet.ui.Control","id":"method-addChildControl","meta":{"protected":true}},{"name":"afterBind","tagname":"method","owner":"jslet.ui.Control","id":"method-afterBind","meta":{"protected":true}},{"name":"beforeBind","tagname":"method","owner":"jslet.ui.DBControl","id":"method-beforeBind","meta":{"protected":true}},{"name":"bind","tagname":"method","owner":"jslet.ui.DBRadioGroup","id":"method-bind","meta":{"protected":true}},{"name":"canFocus","tagname":"method","owner":"jslet.ui.DBFieldControl","id":"method-canFocus","meta":{"protected":true}},{"name":"checkRequiredProperty","tagname":"method","owner":"jslet.ui.DBFieldControl","id":"method-checkRequiredProperty","meta":{"protected":true}},{"name":"destroy","tagname":"method","owner":"jslet.ui.DBRadioGroup","id":"method-destroy","meta":{}},{"name":"doLookupChanged","tagname":"method","owner":"jslet.ui.DBRadioGroup","id":"method-doLookupChanged","meta":{"protected":true}},{"name":"doMetaChanged","tagname":"method","owner":"jslet.ui.DBRadioGroup","id":"method-doMetaChanged","meta":{"protected":true}},{"name":"doUIChanged","tagname":"method","owner":"jslet.ui.Control","id":"method-doUIChanged","meta":{"protected":true}},{"name":"doValueChanged","tagname":"method","owner":"jslet.ui.DBRadioGroup","id":"method-doValueChanged","meta":{"protected":true}},{"name":"focus","tagname":"method","owner":"jslet.ui.DBFieldControl","id":"method-focus","meta":{"chainable":true}},{"name":"getDatasetInParentElement","tagname":"method","owner":"jslet.ui.DBControl","id":"method-getDatasetInParentElement","meta":{"private":true}},{"name":"getFieldError","tagname":"method","owner":"jslet.ui.DBFieldControl","id":"method-getFieldError","meta":{}},{"name":"getText","tagname":"method","owner":"jslet.ui.DBFieldControl","id":"method-getText","meta":{}},{"name":"getValue","tagname":"method","owner":"jslet.ui.DBFieldControl","id":"method-getValue","meta":{}},{"name":"initialize","tagname":"method","owner":"jslet.ui.DBRadioGroup","id":"method-initialize","meta":{"protected":true}},{"name":"innerFocus","tagname":"method","owner":"jslet.ui.DBRadioGroup","id":"method-innerFocus","meta":{"protected":true}},{"name":"isValidTemplateTag","tagname":"method","owner":"jslet.ui.DBRadioGroup","id":"method-isValidTemplateTag","meta":{"protected":true}},{"name":"refreshControl","tagname":"method","owner":"jslet.ui.DBControl","id":"method-refreshControl","meta":{"protected":true}},{"name":"removeAllChildControls","tagname":"method","owner":"jslet.ui.Control","id":"method-removeAllChildControls","meta":{"protected":true}},{"name":"renderAll","tagname":"method","owner":"jslet.ui.DBRadioGroup","id":"method-renderAll","meta":{"chainable":true}},{"name":"renderInvalid","tagname":"method","owner":"jslet.ui.DBFieldControl","id":"method-renderInvalid","meta":{"protected":true}},{"name":"setParams","tagname":"method","owner":"jslet.ui.DBFieldControl","id":"method-setParams","meta":{"protected":true}},{"name":"tableId","tagname":"method","owner":"jslet.ui.DBFieldControl","id":"method-tableId","meta":{"protected":true}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.ui.DBRadioGroup","short_doc":"DBRadioGroup. ...","classIcon":"icon-class","superclasses":["jslet.ui.Control","jslet.ui.DBControl","jslet.ui.DBFieldControl"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='docClass'>jslet.ui.Control</a><div class='subclass '><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='docClass'>jslet.ui.DBControl</a><div class='subclass '><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='docClass'>jslet.ui.DBFieldControl</a><div class='subclass '><strong>jslet.ui.DBRadioGroup</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup' target='_blank'>jslet.dbradiogroup.js</a></div></pre><div class='doc-contents'><p>DBRadioGroup. Display a group of radio that user can select one option. Example:</p>\n\n<pre class='inline-example '><code>var jsletParam = {type:\"DBRadioGroup\",dataset:\"employee\",field:\"department\"};\n\n//1. Declaring:\n &lt;div data-jslet='type:\"DBRadioGroup\",dataset:\"employee\",field:\"department\"'' /&gt;\n or\n &lt;div data-jslet='jsletParam' /&gt;\n\n//2. Binding\n &lt;div id=\"ctrlId\"  /&gt;\n //Js snippet\n var el = document.getElementById('ctrlId');\n <a href=\"#!/api/jslet.ui-method-bindControl\" rel=\"jslet.ui-method-bindControl\" class=\"docClass\">jslet.ui.bindControl</a>(el, jsletParam);\n\n//3. Create dynamically\n <a href=\"#!/api/jslet.ui-method-createControl\" rel=\"jslet.ui-method-createControl\" class=\"docClass\">jslet.ui.createControl</a>(jsletParam, document.body);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-columnCount' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-property-columnCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-property-columnCount' class='name expandable'>columnCount</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get column count. ...</div><div class='long'><p>Set or get column count.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>columnCount</span> : Integer | undefined<div class='sub-desc'><p>Column count.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Integer</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-dataset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-property-dataset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-property-dataset' class='name expandable'>dataset</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Dataset which to link to control. ...</div><div class='long'><p>Dataset which to link to control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dataset</span> : String | undefined<div class='sub-desc'><p>Dataset name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | <a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-field' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-property-field' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-property-field' class='name expandable'>field</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Field name which to link to control. ...</div><div class='long'><p>Field name which to link to control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fldName</span> : String | undefined<div class='sub-desc'><p>Field name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-tabIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-property-tabIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-property-tabIndex' class='name expandable'>tabIndex</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Tab index of control. ...</div><div class='long'><p>Tab index of control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tabIndex</span> : Integer | undefined<div class='sub-desc'><p>Tab index.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Integer</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-valueIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-property-valueIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-property-valueIndex' class='name expandable'>valueIndex</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Field value index which to link to control. ...</div><div class='long'><p>Field value index which to link to control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>valueIndex</span> : Integer | undefined<div class='sub-desc'><p>Field value index.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Integer</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChildControl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-addChildControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-addChildControl' class='name expandable'>addChildControl</a>( <span class='pre'>childCtrl</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Add child control into this control. ...</div><div class='long'><p>Add child control into this control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childCtrl</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-afterBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-afterBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-afterBind' class='name expandable'>afterBind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>After bind. ...</div><div class='long'><p>After bind.</p>\n</div></div></div><div id='method-beforeBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-beforeBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-beforeBind' class='name expandable'>beforeBind</a>( <span class='pre'>$super</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Call this method before binding parameters to a HTML element, you can rewrite this in your owner control. ...</div><div class='long'><p>Call this method before binding parameters to a HTML element, you can rewrite this in your owner control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-beforeBind\" rel=\"jslet.ui.Control-method-beforeBind\" class=\"docClass\">jslet.ui.Control.beforeBind</a></p></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-method-bind' class='name expandable'>bind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-bind\" rel=\"jslet.ui.Control-method-bind\" class=\"docClass\">jslet.ui.Control.bind</a></p></div></div></div><div id='method-canFocus' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-method-canFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-method-canFocus' class='name expandable'>canFocus</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Identify this control can be focused or not. ...</div><div class='long'><p>Identify this control can be focused or not.</p>\n</div></div></div><div id='method-checkRequiredProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-method-checkRequiredProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-method-checkRequiredProperty' class='name expandable'>checkRequiredProperty</a>( <span class='pre'>$super</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.DBControl-method-checkRequiredProperty\" rel=\"jslet.ui.DBControl-method-checkRequiredProperty\" class=\"docClass\">jslet.ui.DBControl.checkRequiredProperty</a></p></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>$super</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.DBFieldControl-method-destroy\" rel=\"jslet.ui.DBFieldControl-method-destroy\" class=\"docClass\">jslet.ui.DBFieldControl.destroy</a></p></div></div></div><div id='method-doLookupChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-method-doLookupChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-method-doLookupChanged' class='name expandable'>doLookupChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.DBControl-method-doLookupChanged\" rel=\"jslet.ui.DBControl-method-doLookupChanged\" class=\"docClass\">jslet.ui.DBControl.doLookupChanged</a></p></div></div></div><div id='method-doMetaChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-method-doMetaChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-method-doMetaChanged' class='name expandable'>doMetaChanged</a>( <span class='pre'>$super, metaName</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>metaName</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.DBFieldControl-method-doMetaChanged\" rel=\"jslet.ui.DBFieldControl-method-doMetaChanged\" class=\"docClass\">jslet.ui.DBFieldControl.doMetaChanged</a></p></div></div></div><div id='method-doUIChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-doUIChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-doUIChanged' class='name expandable'>doUIChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh dataset when user changed the value. ...</div><div class='long'><p>Refresh dataset when user changed the value.</p>\n</div></div></div><div id='method-doValueChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-method-doValueChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-method-doValueChanged' class='name expandable'>doValueChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.DBControl-method-doValueChanged\" rel=\"jslet.ui.DBControl-method-doValueChanged\" class=\"docClass\">jslet.ui.DBControl.doValueChanged</a></p></div></div></div><div id='method-focus' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-method-focus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-method-focus' class='name expandable'>focus</a>( <span class='pre'></span> ) : this<span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Focus to this control. ...</div><div class='long'><p>Focus to this control.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>this</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDatasetInParentElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-getDatasetInParentElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-getDatasetInParentElement' class='name expandable'>getDatasetInParentElement</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getFieldError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-method-getFieldError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-method-getFieldError' class='name expandable'>getFieldError</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get field error. ...</div><div class='long'><p>Get field error.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Error Object, like {message: 'Not Exists!', inputText: 'Foo'}</p>\n</div></li></ul></div></div></div><div id='method-getText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-method-getText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-method-getText' class='name expandable'>getText</a>( <span class='pre'>isEditing</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get display text of field. ...</div><div class='long'><p>Get display text of field.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isEditing</span> : Boolean<div class='sub-desc'><p>True - get editing text, false - get display text.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValue' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get field value. ...</div><div class='long'><p>Get field value.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Field value.</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>$super, el, params</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>params</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.DBControl-method-initialize\" rel=\"jslet.ui.DBControl-method-initialize\" class=\"docClass\">jslet.ui.DBControl.initialize</a></p></div></div></div><div id='method-innerFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-method-innerFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-method-innerFocus' class='name expandable'>innerFocus</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.DBFieldControl-method-innerFocus\" rel=\"jslet.ui.DBFieldControl-method-innerFocus\" class=\"docClass\">jslet.ui.DBFieldControl.innerFocus</a></p></div></div></div><div id='method-isValidTemplateTag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-method-isValidTemplateTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-method-isValidTemplateTag' class='name expandable'>isValidTemplateTag</a>( <span class='pre'>el</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-refreshControl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-refreshControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-refreshControl' class='name expandable'>refreshControl</a>( <span class='pre'>evt</span> ) : Boolean<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh control when data changed. ...</div><div class='long'><p>Refresh control when data changed.\nThere are three type changes: meta changed, data changed, lookup data changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/jslet.data.RefreshEvent\" rel=\"jslet.data.RefreshEvent\" class=\"docClass\">jslet.data.RefreshEvent</a><div class='sub-desc'><p>jslet refresh event object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>if refresh successfully, return true, otherwise false.</p>\n</div></li></ul></div></div></div><div id='method-removeAllChildControls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-removeAllChildControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-removeAllChildControls' class='name expandable'>removeAllChildControls</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Remove all child controls from this control. ...</div><div class='long'><p>Remove all child controls from this control.</p>\n</div></div></div><div id='method-renderAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBRadioGroup'>jslet.ui.DBRadioGroup</span><br/><a href='source/jslet.dbradiogroup.html#jslet-ui-DBRadioGroup-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBRadioGroup-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'></span> ) : <a href=\"#!/api/jslet.ui.DBRadioGroup\" rel=\"jslet.ui.DBRadioGroup\" class=\"docClass\">jslet.ui.DBRadioGroup</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.ui.DBRadioGroup\" rel=\"jslet.ui.DBRadioGroup\" class=\"docClass\">jslet.ui.DBRadioGroup</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-renderAll\" rel=\"jslet.ui.Control-method-renderAll\" class=\"docClass\">jslet.ui.Control.renderAll</a></p></div></div></div><div id='method-renderInvalid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-method-renderInvalid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-method-renderInvalid' class='name expandable'>renderInvalid</a>( <span class='pre'>errObj</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Render invalid message and change the control to \"invalid\" style. ...</div><div class='long'><p>Render invalid message and change the control to \"invalid\" style.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>errObj</span> : String<div class='sub-desc'><p>error object: {code: xxx, message}, if it's null, clear the 'invalid' style.</p>\n</div></li></ul></div></div></div><div id='method-setParams' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-method-setParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-method-setParams' class='name expandable'>setParams</a>( <span class='pre'>$super, ctrlParams</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>ctrlParams</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.DBControl-method-setParams\" rel=\"jslet.ui.DBControl-method-setParams\" class=\"docClass\">jslet.ui.DBControl.setParams</a></p></div></div></div><div id='method-tableId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='defined-in docClass'>jslet.ui.DBFieldControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBFieldControl-method-tableId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBFieldControl-method-tableId' class='name expandable'>tableId</a>( <span class='pre'>tableId</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>The table id when this control is embed into a DBTable control. ...</div><div class='long'><p>The table id when this control is embed into a DBTable control. This property is used internally, don't call it directly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tableId</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});