var data = [
  { name: 'first', value: 10 },
  { name: 'second', value: 30 },
  { name: 'third', value: 40 },
  { name: 'fourth', value: 80 },
  { name: 'fifth', value: 50 },
];

var scale = d3.scaleLinear().domain([1, 100]).range([1, 100]);

var svg = d3.select('body').append('svg').attr('width', 150).attr('height', 150);


var rects = svg.selectAll('rect').data(data);

rects.enter().append('rect')
  .attr('height', 0)
  .attr('width', 10)
  .attr('x', function (d, i) { return i * 20; })
  .attr('y', 150)
  .attr('fill', 'red')
  .attr('fill-opacity', 0.5)
  .attr('stroke', 'red')
  .transition().duration(1000)
  .attr('height', function (d) { return scale(d.value) })
  .attr('y', function (d) { return 150 - d.value; });

setInterval(function () {

  data[Math.ceil(Math.random() * data.length) - 1].value = Math.ceil(Math.random() * 100);

  svg.selectAll('rect').data(data).transition().duration(1000)
    .attr('height', function (d) { return scale(d.value) })
    .attr('y', function (d) { return 150 - d.value; });

}, 1000);