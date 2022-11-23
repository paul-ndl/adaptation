window.onload=function(){
    var d3 = Plotly.d3;

    var gd3 = d3.select("div[id='myPlot']")
    .style({
        'width': '60%',
        'margin-left': '15vh',
        'margin-top': '3vh'
        
    });

    var my_Div = gd3.node();
    var data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
    }];
            
    Plotly.plot(my_Div, data, {title: 'Example',font:{ size:16 , color: 'white'}, paper_bgcolor: '#5696aa'}, {displayModeBar: false});
    		
    window.onresize = function() { Plotly.Plots.resize( my_Div ) };
}



		