window.onload=function(){
    var d3 = Plotly.d3;

    var gd3 = d3.select("div[id='plot1']")
    .style({
        'width': '90%',
        'margin-top': '3vh'
    });

    var my_Div = gd3.node();
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
      };
      
      
    var data = [trace1];

    var layout = {
        title:'Number of videos uploaded each week', 
        xaxis: {
            title: 'Time', 
            showgrid: false,
            zeroline: false,
            autorange: true,
        },
        yaxis: {
            title: 'Number of videos',
            type: 'log',
            autorange: true,
        },
        font: {size:16 , color: 'black'}, 
        paper_bgcolor: '#c4c4c4'
    }
            
    Plotly.plot(my_Div, data, layout, {displayModeBar: false});
    		
    window.onresize = function() { Plotly.Plots.resize( my_Div ) };
}



		