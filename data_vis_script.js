// Set default values for width and height
const width = 500;
const height = Math.min(width, 500);

// Create the primary SVG container
const mainSvg = d3.select("#d3-container").append("svg")
    .attr("width", width)
    .attr("height", height);

function createChart(data) {
    const radius = Math.min(width, height) / 2;

    const arc = d3.arc()
        .innerRadius(radius * 0.67)
        .outerRadius(radius - 1);

    const pie = d3.pie()
        .padAngle(1 / radius)
        .sort(null)
        .value(d => d.value);

    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

    mainSvg
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("style", "max-width: 100%; height: auto;");

    mainSvg.append("g")
        .selectAll("path")
        .data(pie(data))
        .join("path")
        .attr("fill", d => color(d.data.name))
        .attr("d", arc)
        .append("title")
        .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

    mainSvg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(pie(data))
        .join("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .call(text => text.append("tspan")
            .attr("y", "-0.4em")
            .attr("font-weight", "bold")
            .text(d => d.data.name))
        .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
            .attr("x", 0)
            .attr("y", "0.7em")
            .attr("fill-opacity", 0.7)
            .text(d => d.data.value.toLocaleString("en-US")));

    return mainSvg.node();
}

// Sample data for testing
const data = [
    { name: 'Item1', value: 100 },
    { name: 'Item2', value: 50 },
    { name: 'Item3', value: 30 },
    { name: 'Item4', value: 20 }
];

createChart(data);
