function plot3() {    
    
    var d3 = Plotly.d3;

    var gd3 = d3.select("div[id='plot3']")
    .style({
        'width': '100%',
        'margin-top': '3vh',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
    });

    var my_Div3 = gd3.node();
    var data3 = [
        {
          x: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          y: [662848, 284543, 238336, 112883, 87143, 62830, 50617, 39567, 54214, 52017, 91355],
          type: 'bar',
          marker: {
            color: '#ec5046'
          }
        }
      ];

    var layout3 = {
        title:'Distribution of the frequency of capitalize words', 
        barmode: "stack",
        xaxis: {
            title: 'Frequencies of upper words', 
            showgrid: false,
            zeroline: false,
            autorange: true,
        },
        yaxis: {
            title: 'Number of titles',
            autorange: true,
        },
        font: {size:12 , color: 'black'}, 
        paper_bgcolor: '#e4e4e4',
        plot_bgcolor: '#e4e4e4'
    }
            
    Plotly.plot(my_Div3, data3, layout3);
    		
    window.onresize = function() { Plotly.Plots.resize(my_Div3) };
}