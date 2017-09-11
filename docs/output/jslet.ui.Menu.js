Ext.data.JsonP.jslet_ui_Menu({"tagname":"class","name":"jslet.ui.Menu","autodetected":{},"files":[{"filename":"jslet.menu.js","href":"jslet.menu.html#jslet-ui-Menu"}],"extends":"jslet.ui.Control","members":[{"name":"items","tagname":"property","owner":"jslet.ui.Menu","id":"property-items","meta":{}},{"name":"addChildControl","tagname":"method","owner":"jslet.ui.Control","id":"method-addChildControl","meta":{"protected":true}},{"name":"afterBind","tagname":"method","owner":"jslet.ui.Control","id":"method-afterBind","meta":{"protected":true}},{"name":"beforeBind","tagname":"method","owner":"jslet.ui.Control","id":"method-beforeBind","meta":{"protected":true}},{"name":"bind","tagname":"method","owner":"jslet.ui.Menu","id":"method-bind","meta":{"protected":true}},{"name":"checkRequiredProperty","tagname":"method","owner":"jslet.ui.Control","id":"method-checkRequiredProperty","meta":{"protected":true}},{"name":"destroy","tagname":"method","owner":"jslet.ui.Menu","id":"method-destroy","meta":{}},{"name":"doUIChanged","tagname":"method","owner":"jslet.ui.Control","id":"method-doUIChanged","meta":{"protected":true}},{"name":"hide","tagname":"method","owner":"jslet.ui.Menu","id":"method-hide","meta":{}},{"name":"initialize","tagname":"method","owner":"jslet.ui.Menu","id":"method-initialize","meta":{"protected":true}},{"name":"removeAllChildControls","tagname":"method","owner":"jslet.ui.Control","id":"method-removeAllChildControls","meta":{"protected":true}},{"name":"renderAll","tagname":"method","owner":"jslet.ui.Menu","id":"method-renderAll","meta":{}},{"name":"setChecked","tagname":"method","owner":"jslet.ui.Menu","id":"method-setChecked","meta":{}},{"name":"setDisabled","tagname":"method","owner":"jslet.ui.Menu","id":"method-setDisabled","meta":{}},{"name":"setParams","tagname":"method","owner":"jslet.ui.Control","id":"method-setParams","meta":{"protected":true}},{"name":"show","tagname":"method","owner":"jslet.ui.Menu","id":"method-show","meta":{}},{"name":"showAt","tagname":"method","owner":"jslet.ui.Menu","id":"method-showAt","meta":{}},{"name":"showContextMenu","tagname":"method","owner":"jslet.ui.Menu","id":"method-showContextMenu","meta":{}},{"name":"onItemClick","tagname":"event","owner":"jslet.ui.Menu","id":"event-onItemClick","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.ui.Menu","short_doc":"Menu. ...","classIcon":"icon-class","superclasses":["jslet.ui.Control"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='docClass'>jslet.ui.Control</a><div class='subclass '><strong>jslet.ui.Menu</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/jslet.menu.html#jslet-ui-Menu' target='_blank'>jslet.menu.js</a></div></pre><div class='doc-contents'><p>Menu. Example:</p>\n\n<pre class='inline-example '><code>var jsletParam = {type: 'Menu', onItemClick: globalMenuItemClick, items: [\n  {id: 'back', name: 'Backward', iconClass: 'icon1' },\n  {id: 'go', name: 'Forward', disabled: true },\n  {name: '-' }]};\n\n//1. Declaring:\n  &lt;div data-jslet='jsletParam' /&gt;\n\n//2. Binding\n  &lt;div id='menu1' /&gt;\n  //js snippet:\n  var el = document.getElementById('menu1');\n  <a href=\"#!/api/jslet.ui-method-bindControl\" rel=\"jslet.ui-method-bindControl\" class=\"docClass\">jslet.ui.bindControl</a>(el, jsletParam);\n\n//3. Create dynamically\n  <a href=\"#!/api/jslet.ui-method-createControl\" rel=\"jslet.ui-method-createControl\" class=\"docClass\">jslet.ui.createControl</a>(jsletParam, document.body);\n  //Use the below code to show context menu\n  jslet('#ctrlId').showContextMenu(event);\n  //Show menu at the specified position\n  jslet('#ctrlId').show(left, top);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-items' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-property-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-property-items' class='name expandable'>items</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get menu items configuration. ...</div><div class='long'><p>Set or get menu items configuration.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : Object[] | undefined<div class='sub-desc'><p>Menu items.</p>\n<ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Menu item id.</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Menu item name.</p>\n</div></li><li><span class='pre'>onClick</span> : Function<div class='sub-desc'><p>Menu item onClick event, example: onClick: function(event) {}.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : MouseEvent<div class='sub-desc'><p>Mouse event.</p>\n</div></li></ul></div></li><li><span class='pre'>disabled</span> : Boolean<div class='sub-desc'><p>True - Menu item is disabled, false - otherwise.</p>\n</div></li><li><span class='pre'>checked</span> : Boolean<div class='sub-desc'><p>True - Menu item is checked, false - otherwise.</p>\n</div></li><li><span class='pre'>iconClass</span> : String<div class='sub-desc'><p>Menu item icon class name.</p>\n</div></li><li><span class='pre'>disabledIconClass</span> : String<div class='sub-desc'><p>Menu item icon disabled class name.</p>\n</div></li><li><span class='pre'>itemType</span> : String<div class='sub-desc'><p>Menu item type, optional value: null, 'radio', 'check'.</p>\n</div></li><li><span class='pre'>group</span> : String<div class='sub-desc'><p>Group name, only work when itemType equals 'radio'.</p>\n</div></li></ul></div></li><li><span class='pre'>Sub</span> : Object[]<div class='sub-desc'><p>menu items.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Object[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChildControl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-addChildControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-addChildControl' class='name expandable'>addChildControl</a>( <span class='pre'>childCtrl</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Add child control into this control. ...</div><div class='long'><p>Add child control into this control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>childCtrl</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-afterBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-afterBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-afterBind' class='name expandable'>afterBind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>After bind. ...</div><div class='long'><p>After bind.</p>\n</div></div></div><div id='method-beforeBind' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-beforeBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-beforeBind' class='name expandable'>beforeBind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Before bind. ...</div><div class='long'><p>Before bind.\nChild control can extend this method.</p>\n</div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-bind' class='name expandable'>bind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-bind\" rel=\"jslet.ui.Control-method-bind\" class=\"docClass\">jslet.ui.Control.bind</a></p></div></div></div><div id='method-checkRequiredProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-checkRequiredProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-checkRequiredProperty' class='name expandable'>checkRequiredProperty</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>$super</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-destroy\" rel=\"jslet.ui.Control-method-destroy\" class=\"docClass\">jslet.ui.Control.destroy</a></p></div></div></div><div id='method-doUIChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-doUIChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-doUIChanged' class='name expandable'>doUIChanged</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Refresh dataset when user changed the value. ...</div><div class='long'><p>Refresh dataset when user changed the value.</p>\n</div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Hide menu item and all its sub menu item. ...</div><div class='long'><p>Hide menu item and all its sub menu item.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>$super, el, params</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>$super</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>params</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-initialize\" rel=\"jslet.ui.Control-method-initialize\" class=\"docClass\">jslet.ui.Control.initialize</a></p></div></div></div><div id='method-removeAllChildControls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-removeAllChildControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-removeAllChildControls' class='name expandable'>removeAllChildControls</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Remove all child controls from this control. ...</div><div class='long'><p>Remove all child controls from this control.</p>\n</div></div></div><div id='method-renderAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/jslet.ui.Control-method-renderAll\" rel=\"jslet.ui.Control-method-renderAll\" class=\"docClass\">jslet.ui.Control.renderAll</a></p></div></div></div><div id='method-setChecked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-setChecked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-setChecked' class='name expandable'>setChecked</a>( <span class='pre'>menuId, checked</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set a menu item to be checked or non-checked. ...</div><div class='long'><p>Set a menu item to be checked or non-checked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>menuId</span> : String<div class='sub-desc'><p>Menu id.</p>\n</div></li><li><span class='pre'>checked</span> : Boolean<div class='sub-desc'><p>True - the menu item is checked, otherwise it's non-checked.</p>\n</div></li></ul></div></div></div><div id='method-setDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>menuId, disabled</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set a menu item to be disabled/enabled. ...</div><div class='long'><p>Set a menu item to be disabled/enabled.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>menuId</span> : String<div class='sub-desc'><p>Menu id.</p>\n</div></li><li><span class='pre'>disabled</span> : Boolean<div class='sub-desc'><p>True - the menu item is disabled, otherwise it's enabled.</p>\n</div></li></ul></div></div></div><div id='method-setParams' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/jslet.ui.Control' rel='jslet.ui.Control' class='defined-in docClass'>jslet.ui.Control</a><br/><a href='source/jslet.control.html#jslet-ui-Control-method-setParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Control-method-setParams' class='name expandable'>setParams</a>( <span class='pre'>ctrlParams</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctrlParams</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-show' class='name expandable'>show</a>( <span class='pre'>left, top</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Show menu at specified position. ...</div><div class='long'><p>Show menu at specified position.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>left</span> : Integer<div class='sub-desc'><p>Position left.</p>\n</div></li><li><span class='pre'>top</span> : Integer<div class='sub-desc'><p>Position top.</p>\n</div></li></ul></div></div></div><div id='method-showAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-showAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-showAt' class='name expandable'>showAt</a>( <span class='pre'>hostEl</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Show menu at the position which specifed by a HTML element. ...</div><div class='long'><p>Show menu at the position which specifed by a HTML element. Example:</p>\n\n<pre class='inline-example '><code>menuObj.showAt('#btn1'); //\nmenuObj.showAt(document.getElementById('btn1'));\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hostEl</span> : String | HtmlElement<div class='sub-desc'><p>Host HTML element or jQuery query string.</p>\n</div></li></ul></div></div></div><div id='method-showContextMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-method-showContextMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-method-showContextMenu' class='name expandable'>showContextMenu</a>( <span class='pre'>event, contextObj</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Show menu on context menu. ...</div><div class='long'><p>Show menu on context menu. Example:</p>\n\n<pre class='inline-example '><code>//Html\n&lt;div id=\"popmenu\" oncontextmenu=\"popMenu(event);\"&gt;\n//Js\n</code></pre>\n\n<p>   function popMenu(event) {\n     jslet(\"#popmenu\").showContextMenu(event);\n    }</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>contextObj</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onItemClick' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.ui.Menu'>jslet.ui.Menu</span><br/><a href='source/jslet.menu.html#jslet-ui-Menu-event-onItemClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.ui.Menu-event-onItemClick' class='name expandable'>onItemClick</a>( <span class='pre'>onItemClick</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set or get menuItem click event handler. ...</div><div class='long'><p>Set or get menuItem click event handler. Example:</p>\n\n<pre class='inline-example '><code>menubarObj.onItemClick(function(menuId){});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onItemClick</span> : Function | undefined<div class='sub-desc'><p>MenuItem click event handler.</p>\n<ul><li><span class='pre'>menuId</span> : String<div class='sub-desc'><p>MenuItem click event handler.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this | Function</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});