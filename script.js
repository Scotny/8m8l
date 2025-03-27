import { Bar } from "./charts/bar.js";
import { Horizontal } from "./charts/horizontal_bar.js";
import { Line_Multi } from "./charts/line_multi-axis.js";
import { Stacked_Bar } from "./charts/stacked_bar.js";
import { Polar_Area } from "./charts/polar_area.js";
import { Doughnut } from "./charts/doughnut.js";
import { Line } from "./charts/line.js";
import { Pie } from "./charts/pie.js";

Bar(document.getElementById("bar"));
Horizontal(document.getElementById("horizontal_bar"));
Line_Multi(document.getElementById("line_multi-axis"));
Stacked_Bar(document.getElementById("stacked_bar"));
Polar_Area(document.getElementById("polar_area"));
Doughnut(document.getElementById("doughnut"));
Line(document.getElementById("line"));
Pie(document.getElementById("pie"));
