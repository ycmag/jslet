﻿(function (factory) {
    if (typeof define === 'function') {
    	if(define.amd) {
	        define(['common/metastore', 'jslet', 'mock/employee-mock'], factory);
	    } else {
	    	define(function(require, exports, module) {
	    		module.exports = factory();
	    	});
	    }
    } else {
    	factory();
    }
})(function () {
	/********************************** 定义数据集 ************************************************/
	//datasetMetaStore定义在公共js:common/datasetmetastore.js中
	//将数据集定义信息仓库加到datasetFactory中，创建Dataset时会仓库里去定义信息
	jslet.data.datasetFactory.addMetaStore(window.datasetMetaStore);
	//通过工厂方法，可以自动创建主数据集及相关的数据集
    jslet.data.datasetFactory.createDataset('employee').done(function() {
    	var dsEmployee = jslet.data.getDataset('employee');
    	
    	dsEmployee.setVisibleFields(['id', 'name', 'photo']);
    	
    	//增加公式字段，实现通过参数取图片功能
    	dsEmployee.createField({name: 'dyncPhoto', dataType: 'S', length: 30, displayWidth: 20, formula: '"/demo/getphoto?id=" + [id]'})
    	dsEmployee.query();
    	jslet.ui.install();
    });
    
});
