function plot7() {
    var d7 = Plotly.d3;

    var gd7 = d7.select("div[id='plot7']")
    .style({
        'width': '100%',
        'height': '600px',
        'margin-top': '3vh',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
    });

    var my_Div7 = gd7.node();
    

    var data7 = [
        {   
            lowerfence: [1.000000e+04],
            q1: [1.819700e+04],
            median: [3.790000e+04],
            q3: [1.140000e+05],
            upperfence: [1.460000e+07],
            type: 'box',
            name: 'Only gaming topics',
            boxpoints: 'none'
        },
        {   
            lowerfence: [1.000000e+04],
            q1: [1.633225e+04],
            median: [3.180000e+04],
            q3: [9.037500e+04],
            upperfence: [3.870000e+05],
            type: 'box',
            name: 'Not only gaming topics',
            boxpoints: 'none'
        },
    ];
      
    var layout7 = {
        title: 'Distribution of videos by topics',
        boxmode: 'group',
        xaxis: {
            title: '',
            automargin: true
        },
        font: {size:12 , color: 'black'}, 
        paper_bgcolor: '#e4e4e4',
        plot_bgcolor: '#e4e4e4'
    };
      
    Plotly.newPlot(my_Div7, data7, layout7);
    		
    window.onresize = function() { Plotly.Plots.resize(my_Div7) };
}