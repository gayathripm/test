jQuery(document).ready(function () {
alert("gpmmmm");
  jQuery('#awesome-graph-kpm').tufteBar({
    data: [
      // First element is the y-value
      // Other elements are arbitary - they are not used by the lib
      // but are passed back into callback functions
      [1.0, {label: 'Dog'}],
      [1.3, {label: 'Raccoon'}],
      // etc...

      // For stacked graphs, pass an array of non-cumulative y values
      [[1.5, 1.0, 0.51], {label: '2005'}]
    ],

    // Any of the following properties can be either static values 
    // or a function that will be called for each data point. 
    // For functions, 'this' will be set to the current data element, 
    // just like jQuery's $.each

    // Bar width in arbitrary units, 1.0 means the bars will be snuggled
    // up next to each other
    barWidth: 0.8, 

    // The label on top of the bar - can contain HTML
    // formatNumber inserts commas as thousands separators in a number
    barLabel:  function(index) { 
      return $.tufteBar.formatNumber(this[0]) + 'x' 
    }, 

    // The label on the x-axis - can contain HTML
    axisLabel: function(index) { return this[1].label }, 

    // The color of the bar
    color:     function(index) { 
      return ['#E57536', '#82293B'][index % 2] 
    },

    // Stacked graphs also pass a stackedIndex parameter
    color:     function(index, stackedIndex) { 
      return ['#E57536', '#82293B'][stackedIndex % 2] 
    },

    // Alternatively, you can just override the default colors and keep
    // the built in color functions
    colors: ['#82293B', '#E57536', '#FFBE33'],
 
    // Legend is optional
    legend: {
      // Data can be an array of any type of object, but the default
      // formatter works with strings
      data: ["North", "East", "West"],

      // By default, the colors of the graph are used
      color: function(index) { 
        return ['#E57536', '#82293B'][index % 2] 
      },

      // You can customize the element label - can contain HTML
      label: function(index) { return this }
    }
  });
});
