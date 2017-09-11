Ext.data.JsonP.jslet_ui_DBControl({"tagname":"class","name":"jslet.ui.DBControl","autodetected":{},"files":[{"filename":"jslet.control.js","href":"jslet.control.html#jslet-ui-DBControl"}],"extends":"jslet.ui.Control","members":[{"name":"dataset","tagname":"property","owner":"jslet.ui.DBControl","id":"property-dataset","meta":{}},{"name":"addChildControl","tagname":"method","owner":"jslet.ui.Control","id":"method-addChildControl","meta":{"protected":true}},{"name":"afterBind","tagname":"method","owner":"jslet.ui.Control","id":"method-afterBind","meta":{"protected":true}},{"name":"beforeBind","tagname":"method","owner":"jslet.ui.DBControl","id":"method-beforeBind","meta":{"protected":true}},{"name":"bind","tagname":"method","owner":"jslet.ui.Control","id":"method-bind","meta":{"protected":true}},{"name":"checkRequiredProperty","tagname":"method","owner":"jslet.ui.DBControl","id":"method-checkRequiredProperty","meta":{"protected":true}},{"name":"destroy","tagname":"method","owner":"jslet.ui.DBControl","id":"method-destroy","meta":{}},{"name":"doLookupChanged","tagname":"method","owner":"jslet.ui.DBControl","id":"method-doLookupChanged","meta":{"protected":true}},{"name":"doMetaChanged","tagname":"method","owner":"jslet.ui.DBControl","id":"method-doMetaChanged","meta":{"protected":true}},{"name":"doUIChanged","tagname":"method","owner":"jslet.ui.Control","id":"method-doUIChanged","meta":{"protected":true}},{"name":"doValueChanged","tagname":"method","owner":"jslet.ui.DBControl","id":"method-doValueChanged","meta":{"protected":true}},{"name":"getDatasetInParentElement","tagname":"method","owner":"jslet.ui.DBControl","id":"method-getDatasetInParentElement","meta":{"private":true}},{"name":"initialize","tagname":"method","owner":"jslet.ui.DBControl","id":"method-initialize","meta":{"protected":true}},{"name":"refreshControl","tagname":"method","owner":"jslet.ui.DBControl","id":"method-refreshControl","meta":{"protected":true}},{"name":"removeAllChildControls","tagname":"method","owner":"jslet.ui.Control","id":"method-removeAllChildControls","meta":{"protected":true}},{"name":"renderAll","tagname":"method","owner":"jslet.ui.Control","id":"method-renderAll","meta":{"chainable":true,"protected":true}},{"name":"setParams","tagname":"method","owner":"jslet.ui.DBControl","id":"method-setParams","meta":{"protected":true}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.ui.DBControl","classIcon":"icon-class","superclasses":["jslet.ui.Control"],"subclasses":["jslet.ui.AbstractDBTable","jslet.ui.DBChart","jslet.ui.DBEditPanel","jslet.ui.DBError","jslet.ui.DBFieldControl","jslet.ui.DBInspector","jslet.ui.DBLookupLabel","jslet.ui.DBPageBar","jslet.ui.DBSelectView","jslet.ui.DBTreeView"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='docClass'>jslet.ui.Control</a><div class='subclass '><strong>jslet.ui.DBControl</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/jslet.ui.AbstractDBTable' rel='jslet.ui.AbstractDBTable' class='docClass'>jslet.ui.AbstractDBTable</a></div><div class='dependency'><a href='#!/api/jslet.ui.DBChart' rel='jslet.ui.DBChart' class='docClass'>jslet.ui.DBChart</a></div><div class='dependency'><a href='#!/api/jslet.ui.DBEditPanel' rel='jslet.ui.DBEditPanel' class='docClass'>jslet.ui.DBEditPanel</a></div><div class='dependency'><a href='#!/api/jslet.ui.DBError' rel='jslet.ui.DBError' class='docClass'>jslet.ui.DBError</a></div><div class='dependency'><a href='#!/api/jslet.ui.DBFieldControl' rel='jslet.ui.DBFieldControl' class='docClass'>jslet.ui.DBFieldControl</a></div><div class='dependency'><a href='#!/api/jslet.ui.DBInspector' rel='jslet.ui.DBInspector' class='docClass'>jslet.ui.DBInspector</a></div><div class='dependency'><a href='#!/api/jslet.ui.DBLookupLabel' rel='jslet.ui.DBLookupLabel' class='docClass'>jslet.ui.DBLookupLabel</a></div><div class='dependency'><a href='#!/api/jslet.ui.DBPageBar' rel='jslet.ui.DBPageBar' class='docClass'>jslet.ui.DBPageBar</a></div><div class='dependency'><a href='#!/api/jslet.ui.DBSelectView' rel='jslet.ui.DBSelectView' class='docClass'>jslet.ui.DBSelectView</a></div><div class='dependency'><a href='#!/api/jslet.ui.DBTreeView' rel='jslet.ui.DBTreeView' class='docClass'>jslet.ui.DBTreeView</a></div><h4>Files</h4><div class='dependency'><a href='source/jslet.control.html#jslet-ui-DBControl' target='_blank'>jslet.control.js</a></div></pre><div class='doc-contents'><p>Base data sensitive control.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dataset' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-property-dataset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-property-dataset' class='name expandable'>dataset</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Dataset which to link to control. ...</div><div class='long'><p>Dataset which to link to control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dataset</span> : String | undefined<div class='sub-desc'><p>Dataset name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | <a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChildControl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-addChildControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-addChildControl' class='name expandable'>addChildControl</a>( <span class='pre'>childCtrl</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Add child control into this control. ...</div><div class='long'><p>Add child control into this control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childCtrl</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-afterBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-afterBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-afterBind' class='name expandable'>afterBind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>After bind. ...</div><div class='long'><p>After bind.</p>\n</div></div></div><div id='method-beforeBind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-beforeBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-beforeBind' class='name expandable'>beforeBind</a>( <span class='pre'>$super</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Call this method before binding parameters to a HTML element, you can rewrite this in your owner control. ...</div><div class='long'><p>Call this method before binding parameters to a HTML element, you can rewrite this in your owner control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-beforeBind\" rel=\"jslet.ui.Control-method-beforeBind\" class=\"docClass\">jslet.ui.Control.beforeBind</a></p></div></div></div><div id='method-bind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-bind' class='name expandable'>bind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Bind this control to a HTML element. ...</div><div class='long'><p>Bind this control to a HTML element.</p>\n</div></div></div><div id='method-checkRequiredProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-checkRequiredProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-checkRequiredProperty' class='name expandable'>checkRequiredProperty</a>( <span class='pre'>$super</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-checkRequiredProperty\" rel=\"jslet.ui.Control-method-checkRequiredProperty\" class=\"docClass\">jslet.ui.Control.checkRequiredProperty</a></p></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>$super</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-destroy\" rel=\"jslet.ui.Control-method-destroy\" class=\"docClass\">jslet.ui.Control.destroy</a></p></div></div></div><div id='method-doLookupChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-doLookupChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-doLookupChanged' class='name expandable'>doLookupChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh UI when field lookup value is changed. ...</div><div class='long'><p>Refresh UI when field lookup value is changed.</p>\n</div></div></div><div id='method-doMetaChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-doMetaChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-doMetaChanged' class='name expandable'>doMetaChanged</a>( <span class='pre'>metaName</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh UI when field meta is changed. ...</div><div class='long'><p>Refresh UI when field meta is changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>metaName</span> : String<div class='sub-desc'><p>Field meta name, like: readOnly, disabled,...</p>\n</div></li></ul></div></div></div><div id='method-doUIChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-doUIChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-doUIChanged' class='name expandable'>doUIChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh dataset when user changed the value. ...</div><div class='long'><p>Refresh dataset when user changed the value.</p>\n</div></div></div><div id='method-doValueChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-doValueChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-doValueChanged' class='name expandable'>doValueChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh UI when field value is changed. ...</div><div class='long'><p>Refresh UI when field value is changed.</p>\n</div></div></div><div id='method-getDatasetInParentElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-getDatasetInParentElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-getDatasetInParentElement' class='name expandable'>getDatasetInParentElement</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>$super, el, ctrlParams</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>ctrlParams</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-initialize\" rel=\"jslet.ui.Control-method-initialize\" class=\"docClass\">jslet.ui.Control.initialize</a></p></div></div></div><div id='method-refreshControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-refreshControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-refreshControl' class='name expandable'>refreshControl</a>( <span class='pre'>evt</span> ) : Boolean<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh control when data changed. ...</div><div class='long'><p>Refresh control when data changed.\nThere are three type changes: meta changed, data changed, lookup data changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/jslet.data.RefreshEvent\" rel=\"jslet.data.RefreshEvent\" class=\"docClass\">jslet.data.RefreshEvent</a><div class='sub-desc'><p>jslet refresh event object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>if refresh successfully, return true, otherwise false.</p>\n</div></li></ul></div></div></div><div id='method-removeAllChildControls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-removeAllChildControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-removeAllChildControls' class='name expandable'>removeAllChildControls</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Remove all child controls from this control. ...</div><div class='long'><p>Remove all child controls from this control.</p>\n</div></div></div><div id='method-renderAll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'></span> ) : this<span class=\"signature\"><span class='chainable' >chainable</span><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Render this control, if control configuration is changed, call this method to refresh control. ...</div><div class='long'><p>Render this control, if control configuration is changed, call this method to refresh control.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>this</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.DBControl'>jslet.ui.DBControl</span><br/><a href='source/jslet.control.html#jslet-ui-DBControl-method-setParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.DBControl-method-setParams' class='name expandable'>setParams</a>( <span class='pre'>$super, ctrlParams</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>ctrlParams</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-setParams\" rel=\"jslet.ui.Control-method-setParams\" class=\"docClass\">jslet.ui.Control.setParams</a></p></div></div></div></div></div></div></div>","meta":{}});