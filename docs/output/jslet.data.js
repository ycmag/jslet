Ext.data.JsonP.jslet_data({"tagname":"class","name":"jslet.data","alternateClassNames":[],"members":[{"name":"dataModule","tagname":"property","owner":"jslet.data","id":"property-dataModule","meta":{"private":true}},{"name":"createDataset","tagname":"method","owner":"jslet.data","id":"method-createDataset","meta":{}},{"name":"createDynamicDataset","tagname":"method","owner":"jslet.data","id":"method-createDynamicDataset","meta":{}},{"name":"createEnumDataset","tagname":"method","owner":"jslet.data","id":"method-createEnumDataset","meta":{}},{"name":"getDataset","tagname":"method","owner":"jslet.data","id":"method-getDataset","meta":{}},{"name":"getValueConverter","tagname":"method","owner":"jslet.data","id":"method-getValueConverter","meta":{"private":true}},{"name":"record2Json","tagname":"method","owner":"jslet.data","id":"method-record2Json","meta":{"private":true}}],"aliases":{},"files":[{"filename":"","href":""}],"classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dataModule' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data'>jslet.data</span><br/><a href='source/jslet.datacommon.html#jslet-data-property-dataModule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data-property-dataModule' class='name expandable'>dataModule</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>keep all dataset object,\nkey for dataset name, value for dataset object. ...</div><div class='long'><p>keep all dataset object,\nkey for dataset name, value for dataset object.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createDataset' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data'>jslet.data</span><br/><a href='source/jslet.dataset.html#jslet-data-method-createDataset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data-method-createDataset' class='name expandable'>createDataset</a>( <span class='pre'>datasetName, fieldConfigs, datasetProps, maxCreatingLevel</span> ) : <a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create dataset with field configurations. ...</div><div class='long'><p>Create dataset with field configurations. Example:</p>\n\n<pre class='inline-example '><code>var fldCfg = [{\n  name: 'deptid',\n  type: 'S',\n  length: 10,\n  label: 'ID'\n}, {\n  name: 'name',\n  type: 'S',\n  length: 20,\n  label: 'Dept. Name'\n}];\nvar dsCfg = {keyField: 'deptid', codeField: 'deptid', nameField: 'name'};\nvar dsDepartment = <a href=\"#!/api/jslet.data-method-createDataset\" rel=\"jslet.data-method-createDataset\" class=\"docClass\">jslet.data.createDataset</a>('department', fldCfg, dsCfg);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>datasetName</span> : String<div class='sub-desc'><p>Dataset name.</p>\n</div></li><li><span class='pre'>fieldConfigs</span> : Object[]<div class='sub-desc'><p>A list of field configuration. See <a href=\"#!/api/jslet.data.Field\" rel=\"jslet.data.Field\" class=\"docClass\">jslet.data.Field</a> properties.</p>\n</div></li><li><span class='pre'>datasetProps</span> : Object<div class='sub-desc'><p>Dataset properties, like: {keyField: '', codeField: '', ...}, see dataset properties.</p>\n</div></li><li><span class='pre'>maxCreatingLevel</span> : Integer<div class='sub-desc'><p>Specified the max creating level when creating dataset nested(host dataset -> lookup dataset -> lookup dataset-> ...).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createDynamicDataset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data'>jslet.data</span><br/><a href='source/jslet.dataset.html#jslet-data-method-createDynamicDataset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data-method-createDynamicDataset' class='name expandable'>createDynamicDataset</a>( <span class='pre'>datasetName, creatingOption</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Create dataset with dataset configuration which is stored in other place, like DB, IndexedDB. ...</div><div class='long'><p>Create dataset with dataset configuration which is stored in other place, like DB, IndexedDB.<br />\nIt will fire global event: <a href=\"#!/api/jslet.global.dataset-event-onDatasetCreating\" rel=\"jslet.global.dataset-event-onDatasetCreating\" class=\"docClass\">jslet.global.dataset.onDatasetCreating</a>, you can listen this event, load dataset configuration and create it.<br />\nThis method will not return dataset object. You can call <a href=\"#!/api/jslet.data-method-getDataset\" rel=\"jslet.data-method-getDataset\" class=\"docClass\">getDataset</a> to get the dataset object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>datasetName</span> : String<div class='sub-desc'><p>Dataset's name;</p>\n</div></li><li><span class='pre'>creatingOption</span> : Object<div class='sub-desc'><p>Creating option, pattern:\n{maxCreatingLevel: x, includeFields: ['fieldName1','fieldName2',...], excludeFields: ['fieldName8',...], onlyLookupFields: true|false}</p>\n<ul><li><span class='pre'>maxCreatingLevel</span> : Integer<div class='sub-desc'><p>Specified the max creating level when creating dataset nested(host dataset -> lookup dataset -> lookup dataset-> ...).</p>\n</div></li><li><span class='pre'>includeFields</span> : String[]<div class='sub-desc'><p>Only create dataset with the specified field names.</p>\n</div></li><li><span class='pre'>excludeFields</span> : String[]<div class='sub-desc'><p>Create dataset without the specified field names.</p>\n</div></li><li><span class='pre'>onlyLookupFields</span> : Boolean<div class='sub-desc'><p>If onlyLookupFields is true, it will create dataset with fields which specified by the following dataset's properties: keyField, codeField, nameField, parentField and enabledField;</p>\n</div></li><li><span class='pre'>datasetType</span> : <a href=\"#!/api/jslet.data.DatasetType\" rel=\"jslet.data.DatasetType\" class=\"docClass\">jslet.data.DatasetType</a><div class='sub-desc'><p>The optional values are:  <a href=\"#!/api/jslet.data.DatasetType-property-NORMAL\" rel=\"jslet.data.DatasetType-property-NORMAL\" class=\"docClass\">jslet.data.DatasetType.NORMAL</a>, <a href=\"#!/api/jslet.data.DatasetType-property-LOOKUP\" rel=\"jslet.data.DatasetType-property-LOOKUP\" class=\"docClass\">jslet.data.DatasetType.LOOKUP</a>, <a href=\"#!/api/jslet.data.DatasetType-property-DETAIL\" rel=\"jslet.data.DatasetType-property-DETAIL\" class=\"docClass\">jslet.data.DatasetType.DETAIL</a>;</p>\n</div></li><li><span class='pre'>realDatasetName</span> : String<div class='sub-desc'><p>Dataset creator uses \"realDatasetName\" to load dataset records.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Fires</h3><ul><li>onDatasetCreating</li></ul></div></div></div><div id='method-createEnumDataset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data'>jslet.data</span><br/><a href='source/jslet.dataset.html#jslet-data-method-createEnumDataset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data-method-createEnumDataset' class='name expandable'>createEnumDataset</a>( <span class='pre'>dsName, enumStr</span> ) : <a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create Enum Dataset. ...</div><div class='long'><p>Create Enum Dataset. This method is use to create the simple dataset.<br />\nThe created dataset has two fixed fields: 'code', 'name'. Example:</p>\n\n<pre class='inline-example '><code>var dsGender = <a href=\"#!/api/jslet.data-method-createEnumDataset\" rel=\"jslet.data-method-createEnumDataset\" class=\"docClass\">jslet.data.createEnumDataset</a>('gender', 'F:Female,M:Male');\ndsGender.getFieldValue('code');//return 'F'\ndsGender.getFieldValue('name');//return 'Female'\ndsGender.next();\ndsGender.getFieldValue('code');//return 'M'\ndsGender.getFieldValue('name');//return 'Male'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dsName</span> : String<div class='sub-desc'><p>Dataset name;</p>\n</div></li><li><span class='pre'>enumStr</span> : String<div class='sub-desc'><p>A string which stores enumeration data, its format must be:[code]: [name], [code]: [name].</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDataset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data'>jslet.data</span><br/><a href='source/jslet.datacommon.html#jslet-data-method-getDataset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data-method-getDataset' class='name expandable'>getDataset</a>( <span class='pre'>dsName</span> ) : <a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get dataset object with dataset name. ...</div><div class='long'><p>Get dataset object with dataset name. If dataset not exist, return null.</p>\n\n<pre class='inline-example '><code>var dsObj = <a href=\"#!/api/jslet.data-method-getDataset\" rel=\"jslet.data-method-getDataset\" class=\"docClass\">jslet.data.getDataset</a>('employee');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dsName</span> : String<div class='sub-desc'><p>Dataset name;</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.data.Dataset\" rel=\"jslet.data.Dataset\" class=\"docClass\">jslet.data.Dataset</a></span><div class='sub-desc'><p>Dataset object.</p>\n</div></li></ul></div></div></div><div id='method-getValueConverter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data'>jslet.data</span><br/><a href='source/jslet.valueconverter.html#jslet-data-method-getValueConverter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data-method-getValueConverter' class='name expandable'>getValueConverter</a>( <span class='pre'>fldObj</span> ) : <a href=\"#!/api/jslet.data.FieldValueConverter\" rel=\"jslet.data.FieldValueConverter\" class=\"docClass\">jslet.data.FieldValueConverter</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Get appropriate field value converter. ...</div><div class='long'><p>Get appropriate field value converter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fldObj</span> : <a href=\"#!/api/jslet.data.Field\" rel=\"jslet.data.Field\" class=\"docClass\">jslet.data.Field</a><div class='sub-desc'><p>field object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jslet.data.FieldValueConverter\" rel=\"jslet.data.FieldValueConverter\" class=\"docClass\">jslet.data.FieldValueConverter</a></span><div class='sub-desc'><p>field value converter;</p>\n</div></li></ul></div></div></div><div id='method-record2Json' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.data'>jslet.data</span><br/><a href='source/jslet.datacommon.html#jslet-data-method-record2Json' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.data-method-record2Json' class='name expandable'>record2Json</a>( <span class='pre'>records, excludeFields</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Convert dataset record to json. ...</div><div class='long'><p>Convert dataset record to json.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>records</span> : Object[]<div class='sub-desc'><p>Dataset records, required.</p>\n</div></li><li><span class='pre'>excludeFields</span> : String[]<div class='sub-desc'><p>Excluded field names,optional.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Json String.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});