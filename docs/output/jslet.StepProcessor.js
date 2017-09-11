Ext.data.JsonP.jslet_StepProcessor({"tagname":"class","name":"jslet.StepProcessor","autodetected":{},"files":[{"filename":"jslet.common.js","href":"jslet.common.html#jslet-StepProcessor"}],"params":[{"tagname":"params","type":"Integer","name":"count","doc":"<p>The long loop count.</p>\n","html_type":"Integer"},{"tagname":"params","type":"Function","name":"processingFn","doc":"<p>The processing function.</p>\n","properties":[{"tagname":"params","type":"Integer","name":"start","doc":"<p>The start position of the long loop.</p>\n","html_type":"Integer"},{"tagname":"params","type":"Integer","name":"end","doc":"<p>The end position of the long loop.</p>\n","html_type":"Integer"},{"tagname":"params","type":"Integer","name":"percent","doc":"<p>The processing percent of the loop.</p>\n","html_type":"Integer"}],"html_type":"Function"},{"tagname":"params","type":"Integer","name":"unit","doc":"<p>The unit of percent, like 5, 10, 20, it can't be greater than 100.</p>\n","html_type":"Integer"}],"members":[{"name":"run","tagname":"method","owner":"jslet.StepProcessor","id":"method-run","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jslet.StepProcessor","short_doc":"This class is used to split a long loop into ten short loops in order to refresh UI between two loops. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/jslet.common.html#jslet-StepProcessor' target='_blank'>jslet.common.js</a></div></pre><div class='doc-contents'><p>This class is used to split a long loop into ten short loops in order to refresh UI between two loops.\nIt's normally used for updating ProcessBar value. Example:</p>\n\n<pre class='inline-example '><code>var list = [1, 2, 3, .....];\nfunction doLoop(start, end, percent) {\n    for(var i = start; i &lt;= end; i++) {\n        //process biz logic\n    }\n    jslet('processBar').value(percent);\n}\n\nnew <a href=\"#!/api/jslet.StepProcessor\" rel=\"jslet.StepProcessor\" class=\"docClass\">jslet.StepProcessor</a>(list.length, doLoop).run();\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>count</span> : Integer<div class='sub-desc'><p>The long loop count.</p>\n</div></li><li><span class='pre'>processingFn</span> : Function<div class='sub-desc'><p>The processing function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>start</span> : Integer<div class='sub-desc'><p>The start position of the long loop.</p>\n</div></li><li><span class='pre'>end</span> : Integer<div class='sub-desc'><p>The end position of the long loop.</p>\n</div></li><li><span class='pre'>percent</span> : Integer<div class='sub-desc'><p>The processing percent of the loop.</p>\n</div></li></ul></div></li><li><span class='pre'>unit</span> : Integer<div class='sub-desc'><p>The unit of percent, like 5, 10, 20, it can't be greater than 100.</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-run' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jslet.StepProcessor'>jslet.StepProcessor</span><br/><a href='source/jslet.common.html#jslet-StepProcessor-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jslet.StepProcessor-method-run' class='name expandable'>run</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Run the step processor. ...</div><div class='long'><p>Run the step processor.</p>\n</div></div></div></div></div></div></div>","meta":{}});