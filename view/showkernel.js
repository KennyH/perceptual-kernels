#!/usr/bin/env node
/***
 *
 * File  : showkernel.js
 * Author: Cagatay Demiralp (cagatay)
 * Desc  : Visualizes a given perceptual kernel
 *         as a grayscale heatmap
 *
 * Example: showkernel shape-l9
 */

if (process.argv.length < 3 ) {
    console.log('Please provide the name of the kernel you would like to see!');
    console.log('Usage: showkernel <kernelname>')
    return;
}

var   tasks = ['l5', 'l9', 'sa', 'tm', 'td'],
    fndict = {shape:'{drawfn:shape10, width:375, height:375,',
        color:'{drawfn:color10, width:375, height:375,',
        size:' {drawfn:size10, width:375, height:375,',
        shapecolor:' {drawfn:shapeXcolor4, width:600, height:600,',
        shapesize:' {drawfn:shapeXsize4, width:600, height:600,',
        sizecolor:' {drawfn:sizeXcolor4, width:600, height:600,'},
    kernel = process.argv[2].split('-'),
    kerneldraw = fndict[kernel[0]],
    path = process.argv[2] + '.txt';


if(kerneldraw === 'undefined' || tasks.indexOf(kernel[1]) === -1) {
    console.log('Unknown perceptual kernel!');
    return;
}else{
    kerneldraw = 'var kernel = ' +  kerneldraw +  ' filename:"' + path +'"};';
}

var express =  require("express"),
    app = express(),
    open = require("open"),
    d3 = require("d3");

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/../data/kernels/'));

var body = d3.select('body');

body.append('div')
    .attr('id', 'chart');

var d3url='d3.v3.min.js';
body.append("script")
    .attr('type', 'text/javascript')
    .attr('src',d3url);

body.append("script")
    .attr('type', 'text/javascript')
    .attr('src','stim.js');

body.append("script")
    .attr('type', 'text/javascript')
    .attr('src','palettes.js');

body.append("script")
    .attr('type', 'text/javascript')
    .attr('src','drawkernel.js');

body.append("script")
    .attr('type', 'text/javascript')
    .attr('src','heatmap.js');

var run = kerneldraw +'\n' +
    'drawKernel("#chart", kernel);';
body.append("script")
    .html(run);

app.use(function(req, res, next){
	//console.log('request received.');
    res.send(d3.select('body').node().innerHTML);
}).listen(8080);

open('http://localhost:8080/');
