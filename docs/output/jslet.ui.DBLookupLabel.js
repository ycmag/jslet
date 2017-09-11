Ext.data.JsonP.jslet_ui_DBLookupLabel({"tagname":"class","name":"jslet.ui.DBLookupLabel","autodetected":{},"files":[{"filename":"jslet.dblookuplabel.js","href":"jslet.dblookuplabel.html#jslet-ui-DBLookupLabel"}],"extends":"jslet.ui.DBControl","members":[{"name":"dataset","tagname":"property","owner":"jslet.ui.DBControl","id":"property-dataset","meta":{}},{"name":"lookupField","tagname":"property","owner":"jslet.ui.DBLookupLabel","id":"property-lookupField","meta":{}},{"name":"lookupValue","tagname":"property","owner":"jslet.ui.DBLookupLabel","id":"property-lookupValue","meta":{}},{"name":"returnField","tagname":"property","owner":"jslet.ui.DBLookupLabel","id":"property-returnField","meta":{}},{"name":"addChildControl","tagname":"method","owner":"jslet.ui.Control","id":"method-addChildControl","meta":{"protected":true}},{"name":"afterBind","tagname":"method","owner":"jslet.ui.Control","id":"method-afterBind","meta":{"protected":true}},{"name":"beforeBind","tagname":"method","owner":"jslet.ui.DBControl","id":"method-beforeBind","meta":{"protected":true}},{"name":"bind","tagname":"method","owner":"jslet.ui.DBLookupLabel","id":"method-bind","meta":{"protected":true}},{"name":"canFocus","tagname":"method","owner":"jslet.ui.DBLookupLabel","id":"method-canFocus","meta":{"protected":true}},{"name":"checkRequiredProperty","tagname":"method","owner":"jslet.ui.DBControl","id":"method-checkRequiredProperty","meta":{"protected":true}},{"name":"destroy","tagname":"method","owner":"jslet.ui.DBControl","id":"method-destroy","meta":{}},{"name":"doLookupChanged","tagname":"method","owner":"jslet.ui.DBControl","id":"method-doLookupChanged","meta":{"protected":true}},{"name":"doMetaChanged","tagname":"method","owner":"jslet.ui.DBControl","id":"method-doMetaChanged","meta":{"protected":true}},{"name":"doUIChanged","tagname":"method","owner":"jslet.ui.Control","id":"method-doUIChanged","meta":{"protected":true}},{"name":"doValueChanged","tagname":"method","owner":"jslet.ui.DBControl","id":"method-doValueChanged","meta":{"protected":true}},{"name":"getDatasetInParentElement","tagname":"method","owner":"jslet.ui.DBControl","id":"method-getDatasetInParentElement","meta":{"private":true}},{"name":"initialize","tagname":"method","owner":"jslet.ui.DBLookupLabel","id":"method-initialize","meta":{"protected":true}},{"name":"isValidTemplateTag","tagname":"method","owner":"jslet.ui.DBLookupLabel","id":"method-isValidTemplateTag","meta":{"protected":true}},{"name":"refreshControl","tagname":"method","owner":"jslet.ui.DBLookupLabel","id":"method-refreshControl","meta":{"protected":true}},{"name":"removeAllChildControls","tagname":"method","owner":"jslet.ui.Control","id":"method-removeAllChildControls","meta":{"protected":true}},{"name":"renderAll","tagname":"method","owner":"jslet.ui.DBLookupLabel","id":"method-renderAll","meta":{"chainable":true}},{"name":"setParams","tagname":"method","owner":"jslet.ui.DBControl","id":"method-setParams","meta":{"protected":true}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.ui.DBLookupLabel","short_doc":"DBLookupLabel. ...","classIcon":"icon-class","superclasses":["jslet.ui.Control","jslet.ui.DBControl"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='docClass'>jslet.ui.Control</a><div class='subclass '><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='docClass'>jslet.ui.DBControl</a><div class='subclass '><strong>jslet.ui.DBLookupLabel</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel' target='_blank'>jslet.dblookuplabel.js</a></div></pre><div class='doc-contents'><p>DBLookupLabel. Display field value according to another field and its value. Example:</p>\n\n<pre class='inline-example '><code>var jsletParam = {type:\"DBLookupLabel\",dataset:\"department\",lookupField:\"deptcode\", lookupValue: '0101', returnField: 'name'};\n\n //1. Declaring:\n &lt;label data-jslet='{type:\"DBLookupLabel\",dataset:\"department\",lookupField:\"deptcode\", lookupValue: \"0101\", returnField: \"name\"}' /&gt;\n or\n &lt;label data-jslet='jsletParam' /&gt;\n\n//2. Binding\n &lt;label id=\"ctrlId\"  /&gt;\n //Js snippet\n var el = document.getElementById('ctrlId');\n <a href=\"#!/api/jslet.ui-method-bindControl\" rel=\"jslet.ui-method-bindControl\" class=\"docClass\">jslet.ui.bindControl</a>(el, jsletParam);\n\n//3. Create dynamically\n <a href=\"#!/api/jslet.ui-method-createControl\" rel=\"jslet.ui-method-createControl\" class=\"docClass\">jslet.ui.createControl</a>(jsletParam, document.body);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dataset' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-property-dataset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-property-dataset' class='name expandable'>dataset</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Dataset which to link to control. ...</div><div class='long'><p>Dataset which to link to control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dataset</span> : String | undefined<div class='sub-desc'><p>Dataset name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | <a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-lookupField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBLookupLabel'>jslet.ui.DBLookupLabel</span><br/><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel-property-lookupField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBLookupLabel-property-lookupField' class='name expandable'>lookupField</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get the field name for looking up. ...</div><div class='long'><p>Set or get the field name for looking up.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lookupField</span> : String | undefined<div class='sub-desc'><p>Lookup field name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-lookupValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBLookupLabel'>jslet.ui.DBLookupLabel</span><br/><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel-property-lookupValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBLookupLabel-property-lookupValue' class='name expandable'>lookupValue</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get the lookup value. ...</div><div class='long'><p>Set or get the lookup value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lookupField</span> : Object | undefined<div class='sub-desc'><p>Lookup value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-returnField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBLookupLabel'>jslet.ui.DBLookupLabel</span><br/><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel-property-returnField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBLookupLabel-property-returnField' class='name expandable'>returnField</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get the return field name. ...</div><div class='long'><p>Set or get the return field name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>returnField</span> : String | undefined<div class='sub-desc'><p>Return field name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChildControl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-addChildControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-addChildControl' class='name expandable'>addChildControl</a>( <span class='pre'>childCtrl</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Add child control into this control. ...</div><div class='long'><p>Add child control into this control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childCtrl</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-afterBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-afterBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-afterBind' class='name expandable'>afterBind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>After bind. ...</div><div class='long'><p>After bind.</p>\n</div></div></div><div id='method-beforeBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-beforeBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-beforeBind' class='name expandable'>beforeBind</a>( <span class='pre'>$super</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Call this method before binding parameters to a HTML element, you can rewrite this in your owner control. ...</div><div class='long'><p>Call this method before binding parameters to a HTML element, you can rewrite this in your owner control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-beforeBind\" rel=\"jslet.ui.Control-method-beforeBind\" class=\"docClass\">jslet.ui.Control.beforeBind</a></p></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBLookupLabel'>jslet.ui.DBLookupLabel</span><br/><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBLookupLabel-method-bind' class='name expandable'>bind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-bind\" rel=\"jslet.ui.Control-method-bind\" class=\"docClass\">jslet.ui.Control.bind</a></p></div></div></div><div id='method-canFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBLookupLabel'>jslet.ui.DBLookupLabel</span><br/><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel-method-canFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBLookupLabel-method-canFocus' class='name expandable'>canFocus</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-checkRequiredProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-checkRequiredProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-checkRequiredProperty' class='name expandable'>checkRequiredProperty</a>( <span class='pre'>$super</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-checkRequiredProperty\" rel=\"jslet.ui.Control-method-checkRequiredProperty\" class=\"docClass\">jslet.ui.Control.checkRequiredProperty</a></p></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>$super</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-destroy\" rel=\"jslet.ui.Control-method-destroy\" class=\"docClass\">jslet.ui.Control.destroy</a></p></div></div></div><div id='method-doLookupChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-doLookupChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-doLookupChanged' class='name expandable'>doLookupChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh UI when field lookup value is changed. ...</div><div class='long'><p>Refresh UI when field lookup value is changed.</p>\n</div></div></div><div id='method-doMetaChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-doMetaChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-doMetaChanged' class='name expandable'>doMetaChanged</a>( <span class='pre'>metaName</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh UI when field meta is changed. ...</div><div class='long'><p>Refresh UI when field meta is changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>metaName</span> : String<div class='sub-desc'><p>Field meta name, like: readOnly, disabled,...</p>\n</div></li></ul></div></div></div><div id='method-doUIChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-doUIChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-doUIChanged' class='name expandable'>doUIChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh dataset when user changed the value. ...</div><div class='long'><p>Refresh dataset when user changed the value.</p>\n</div></div></div><div id='method-doValueChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-doValueChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-doValueChanged' class='name expandable'>doValueChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh UI when field value is changed. ...</div><div class='long'><p>Refresh UI when field value is changed.</p>\n</div></div></div><div id='method-getDatasetInParentElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-getDatasetInParentElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-getDatasetInParentElement' class='name expandable'>getDatasetInParentElement</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBLookupLabel'>jslet.ui.DBLookupLabel</span><br/><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBLookupLabel-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>$super, el, params</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>params</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.DBControl-method-initialize\" rel=\"jslet.ui.DBControl-method-initialize\" class=\"docClass\">jslet.ui.DBControl.initialize</a></p></div></div></div><div id='method-isValidTemplateTag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBLookupLabel'>jslet.ui.DBLookupLabel</span><br/><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel-method-isValidTemplateTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBLookupLabel-method-isValidTemplateTag' class='name expandable'>isValidTemplateTag</a>( <span class='pre'>el</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-refreshControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBLookupLabel'>jslet.ui.DBLookupLabel</span><br/><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel-method-refreshControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBLookupLabel-method-refreshControl' class='name expandable'>refreshControl</a>( <span class='pre'>evt, isForce</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>isForce</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.DBControl-method-refreshControl\" rel=\"jslet.ui.DBControl-method-refreshControl\" class=\"docClass\">jslet.ui.DBControl.refreshControl</a></p></div></div></div><div id='method-removeAllChildControls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-removeAllChildControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-removeAllChildControls' class='name expandable'>removeAllChildControls</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Remove all child controls from this control. ...</div><div class='long'><p>Remove all child controls from this control.</p>\n</div></div></div><div id='method-renderAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBLookupLabel'>jslet.ui.DBLookupLabel</span><br/><a href='source/jslet.dblookuplabel.html#jslet-ui-DBLookupLabel-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBLookupLabel-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'></span> ) : <a href=\"#!/api/jslet.ui.DBLookupLabel\" rel=\"jslet.ui.DBLookupLabel\" class=\"docClass\">jslet.ui.DBLookupLabel</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.ui.DBLookupLabel\" rel=\"jslet.ui.DBLookupLabel\" class=\"docClass\">jslet.ui.DBLookupLabel</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-renderAll\" rel=\"jslet.ui.Control-method-renderAll\" class=\"docClass\">jslet.ui.Control.renderAll</a></p></div></div></div><div id='method-setParams' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.DBControl' rel='jslet.ui.DBControl' class='defined-in docClass'>jslet.ui.DBControl</a><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-setParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-setParams' class='name expandable'>setParams</a>( <span class='pre'>$super, ctrlParams</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>ctrlParams</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-setParams\" rel=\"jslet.ui.Control-method-setParams\" class=\"docClass\">jslet.ui.Control.setParams</a></p></div></div></div></div></div></div></div>","meta":{}});