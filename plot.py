import matplotlib.pyplot as plt
import numpy as np
import plotly
import chart_studio.plotly as py
import plotly.tools as tls

fig, ax = plt.subplots(figsize=(12, 6))
x = np.linspace(0, 3*np.pi, 500)
ax.plot(x, np.sin(x**2))
ax.set_title('A simple chirp')

plotly_fig = tls.mpl_to_plotly(fig)
plotly_fig.write_json("test.json")