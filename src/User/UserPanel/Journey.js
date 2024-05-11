import React from 'react';
import "./cssfiles/Journey.css"
import $ from 'jquery';
// import '@progress/kendo-ui';
// import '@progress/kendo-ui/js/kendo.dataviz.chart';

const stats = [
    { value: 30, order: "preconceptions" },
    { value: 20, order: "unboxing"},
    { value: 18, order: "setup"},
    { value: 15, order: "first use"},
    { value: 5, order: "third use" },
    { value: 12, order: "long-term use"},
];

function Journey() {
    // React.useEffect(() => {
    //     createChart();
    // }, []);

    // function createChart() {
    //     $("#chart").kendoChart({
    //         //title: { text: "Customer Journey Map"},
    //         legend: {visible: false},
    //         dataSource: {
    //             data: stats
    //         },
    //         series: [{
    //             type: "area",
    //             aggregate: "avg",
    //             field: "value",
    //             categoryField: "order",
    //             line: {style: "smooth"}
    //         }],
    //         categoryAxis: {
    //             baseUnit: "order"
    //         },
    //         valueAxis:{
    //             majorGridLines: {visible: false},
    //             visible: false
    //         }
    //     });
    // }

    return (
        <div>
            <div id="explanation-table">
                <table width="100%" border="0">
                    <thead>
                        <tr>
                            <th scope="col">Pre-conpceptions</th>
                            <th scope="col">Unboxing</th>
                            <th scope="col">Setup</th>
                            <th scope="col">First Use</th>
                            <th scope="col">Long-Term Use</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>High expectations for robot vacuums</td>
                            <td>Unboxing is confusing and unguided.</td>
                            <td>Setup is unclear, esp. to first-time users.</td>
                            <td>RRV destroys objects on first use, user lose trust.</td>
                            <td>Users begin to understand the capabilities of the vacuum and lower their expectations.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="example">
                <div className="demo-section k-content wide">
                    <div id="chart"></div>
                </div>
            </div>
        </div>
    );
}

export default Journey;
