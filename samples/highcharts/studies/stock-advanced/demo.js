// Predefined analyzes, like default dataset+indicators+annotations
window.analyzes = [{
    indicators: [{
        linkedTo: "main",
        type: "ema",
        id: "s-ema"
    }, {
        linkedTo: "main",
        type: "sma",
        id: "s-sma"
    }, {
        linkedTo: "main",
        type: "wma",
        id: "s-wma"
    }],
    flags: [],
    annotations: [{
        visible: true,
        labelOptions: {
            align: "center",
            allowOverlap: false,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            borderColor: "black",
            borderRadius: 1,
            borderWidth: 1,
            crop: false,
            overflow: "none",
            padding: 5,
            shadow: false,
            shape: "callout",
            style: {
                fontSize: "11px",
                fontWeigth: "bold",
                color: "contrast"
            },
            useHTML: false,
            verticalAlign: "bottom",
            x: 0,
            y: -16
        },
        shapeOptions: {
            stroke: "rgba(0, 0, 0, 0.75)",
            strokeWidth: 1,
            fill: "rgba(0, 0, 0, 0.75)",
            r: 0
        },
        zIndex: 6,
        events: {},
        id: "annotation-text-5",
        labels: [{
            text: "September 2017:<br>iPhone X annoucment",
            point: {
                x: 1505174400000,
                y: 162,
                xAxis: 0,
                yAxis: 0
            },
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            shape: "callout",
            borderWidth: 0,
            x: 0,
            y: -16
        }]
    }, {
        visible: true,
        labelOptions: {
            align: "center",
            allowOverlap: false,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            borderColor: "black",
            borderRadius: 1,
            borderWidth: 1,
            crop: false,
            overflow: "none",
            padding: 5,
            shadow: false,
            shape: "callout",
            style: {
                fontSize: "11px",
                fontWeigth: "bold",
                color: "contrast"
            },
            useHTML: false,
            verticalAlign: "bottom",
            x: 0,
            y: -16
        },
        shapeOptions: {
            stroke: "rgba(0, 0, 0, 0.75)",
            strokeWidth: 1,
            fill: "rgba(0, 0, 0, 0.75)",
            r: 0
        },
        zIndex: 6,
        events: {},
        id: "annotation-text-6",
        labels: [{
            text: "Analysis AAPL<br> Includes indicators: <br> EMA (14), SMA (13) and WMA (9)<br> Good example how moving averages are different and how relate to a data change.",
            point: {
                x: 1499817600000,
                y: 170,
                xAxis: 0,
                yAxis: 0
            },
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            shape: "callout",
            borderWidth: 0,
            x: 0,
            y: -16
        }]
    }],
    yAxis: [{
        height: '100%'
    }]
}, {
    indicators: [{
        linkedTo: "main",
        type: "rsi",
        id: "s-rsi",
        yAxis: 1
    }, {
        linkedTo: "main",
        id: "s-macd",
        type: "macd",
        yAxis: 2,
        color: "#eee",
        signalLine: {
            styles: {
                lineColor: "blue"
            }
        },
        macdLine: {
            styles: {
                lineColor: "red"
            }
        }
    }, {
        linkedTo: "main",
        color: "red",
        type: "ema",
        id: "s-ema"
    }],
    flags: [{
        type: "flags",
        onSeries: "s-macd",
        shape: "squarepin",
        data: [{
            x: 1507593600000,
            title: "<span style=\"position: relative; top: 5px; left: -15px;\">A</span>"
        }],
        yAxis: 2,
        style: {
            fontSize: "13px",
            fontWeight: "bold",
            dy: 4
        },
        textAlign: "center",
        width: 25,
        height: 25,
        useHTML: false,
        y: -50,
        enableMouseTracking: false
    }, {
        type: "flags",
        onSeries: "s-macd",
        shape: "squarepin",
        data: [{
            x: 1509494400000,
            title: "<span style=\"position: relative; top: 5px; left: -15px;\">B</span>"
        }, {
            x: 1509580800000,
            title: "<span style=\"position: relative; top: 5px; left: -15px;\">C</span>"
        }],
        yAxis: 2,
        style: {
            fontSize: "13px",
            fontWeight: "bold",
            dy: 4
        },
        textAlign: "center",
        width: 25,
        height: 25,
        useHTML: false,
        y: -50,
        enableMouseTracking: false
    }, {
        type: "flags",
        onSeries: "s-rsi",
        shape: "flag",
        data: [{
            x: 1502409600000,
            title: "<span style=\"position: relative; top: 5px; left: 0;\">D</span>"
        }],
        yAxis: 1,
        style: {
            fontSize: "13px",
            fontWeight: "bold",
            dy: 4
        },
        textAlign: "center",
        width: 25,
        height: 25,
        useHTML: false,
        y: -50,
        enableMouseTracking: false
    }],
    yAxis: [{
        height: "50%",
        resize: {
            enabled: true,
            controlledAxis: {
                next: ["rsi"]
            }
        }
    }, {
        top: "50%",
        height: "25%",
        id: "rsi",
        resize: {
            enabled: true,
            controlledAxis: {
                next: ["macd"]
            }
        }
    }, {
        top: "75%",
        height: "25%",
        id: "macd"
    }],
    annotations: [{
        visible: true,
        labelOptions: {
            align: "center",
            allowOverlap: false,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            borderColor: "black",
            borderRadius: 1,
            borderWidth: 1,
            crop: false,
            overflow: "justify",
            padding: 5,
            shadow: false,
            shape: "callout",
            style: {
                fontSize: "11px",
                fontWeight: "normal",
                color: "contrast"
            },
            useHTML: false,
            verticalAlign: "bottom",
            x: 0,
            y: -16
        },
        shapeOptions: {
            stroke: "rgba(0, 0, 0, 0.75)",
            strokeWidth: 1,
            fill: "rgba(0, 0, 0, 0.75)",
            r: 0
        },
        zIndex: 2,
        shapes: [{
            type: "path",
            points: [{
                x: 1499299200000,
                y: 176.24,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 176.24,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 168.33164,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1499299200000,
                y: 168.33164,
                xAxis: 0,
                yAxis: 0
            }],
            strokeWidth: 0,
            fill: "rgba(169, 255, 101, 0.4)"
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 168.33164,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 168.33164,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 163.43918,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1499299200000,
                y: 163.43918,
                xAxis: 0,
                yAxis: 0
            }],
            strokeWidth: 0,
            fill: "rgba(162, 241, 130, 0.4)"
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 163.43918,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 163.43918,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 159.485,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1499299200000,
                y: 159.485,
                xAxis: 0,
                yAxis: 0
            }],
            strokeWidth: 0,
            fill: "rgba(156, 229, 161, 0.4)"
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 159.485,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 159.485,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 155.53082,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1499299200000,
                y: 155.53082,
                xAxis: 0,
                yAxis: 0
            }],
            strokeWidth: 0,
            fill: "rgba(150, 216, 192, 0.4)"
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 155.53082,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 155.53082,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 149.90114,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1499299200000,
                y: 149.90114,
                xAxis: 0,
                yAxis: 0
            }],
            strokeWidth: 0,
            fill: "rgba(139, 191, 216, 0.4)"
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 149.90114,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 149.90114,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 142.73,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1499299200000,
                y: 142.73,
                xAxis: 0,
                yAxis: 0
            }],
            strokeWidth: 0,
            fill: "rgba(130, 170, 255, 0.4)"
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 176.24,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 176.24,
                xAxis: 0,
                yAxis: 0
            }],
            stroke: "black",
            strokeWidth: 1
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 168.33164,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 168.33164,
                xAxis: 0,
                yAxis: 0
            }],
            stroke: "black",
            strokeWidth: 1
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 163.43918,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 163.43918,
                xAxis: 0,
                yAxis: 0
            }],
            stroke: "black",
            strokeWidth: 1
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 159.485,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 159.485,
                xAxis: 0,
                yAxis: 0
            }],
            stroke: "black",
            strokeWidth: 1
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 155.53082,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 155.53082,
                xAxis: 0,
                yAxis: 0
            }],
            stroke: "black",
            strokeWidth: 1
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 149.90114,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 149.90114,
                xAxis: 0,
                yAxis: 0
            }],
            stroke: "black",
            strokeWidth: 1
        }, {
            type: "path",
            points: [{
                x: 1499299200000,
                y: 142.73,
                xAxis: 0,
                yAxis: 0
            }, {
                x: 1510099200000,
                y: 142.73,
                xAxis: 0,
                yAxis: 0
            }],
            stroke: "black",
            strokeWidth: 1
        }],
        labels: [{
            style: {
                color: "grey"
            },
            align: "right",
            verticalAlign: "middle",
            backgroundColor: "none",
            borderWidth: 0,
            shape: "rect",
            point: {
                x: 1499299200000,
                y: 176.24,
                xAxis: 0,
                yAxis: 0
            },
            text: "0.000",
            y: 0
        }, {
            style: {
                color: "grey"
            },
            align: "right",
            verticalAlign: "middle",
            backgroundColor: "none",
            borderWidth: 0,
            shape: "rect",
            point: {
                x: 1499299200000,
                y: 168.33164,
                xAxis: 0,
                yAxis: 0
            },
            text: "0.236",
            y: 0
        }, {
            style: {
                color: "grey"
            },
            align: "right",
            verticalAlign: "middle",
            backgroundColor: "none",
            borderWidth: 0,
            shape: "rect",
            point: {
                x: 1499299200000,
                y: 163.43918,
                xAxis: 0,
                yAxis: 0
            },
            text: "0.382",
            y: 0
        }, {
            style: {
                color: "grey"
            },
            align: "right",
            verticalAlign: "middle",
            backgroundColor: "none",
            borderWidth: 0,
            shape: "rect",
            point: {
                x: 1499299200000,
                y: 159.485,
                xAxis: 0,
                yAxis: 0
            },
            text: "0.500",
            y: 0
        }, {
            style: {
                color: "grey"
            },
            align: "right",
            verticalAlign: "middle",
            backgroundColor: "none",
            borderWidth: 0,
            shape: "rect",
            point: {
                x: 1499299200000,
                y: 155.53082,
                xAxis: 0,
                yAxis: 0
            },
            text: "0.618",
            y: 0
        }, {
            style: {
                color: "grey"
            },
            align: "right",
            verticalAlign: "middle",
            backgroundColor: "none",
            borderWidth: 0,
            shape: "rect",
            point: {
                x: 1499299200000,
                y: 149.90114,
                xAxis: 0,
                yAxis: 0
            },
            text: "0.786",
            y: 0
        }, {
            style: {
                color: "grey"
            },
            align: "right",
            verticalAlign: "middle",
            backgroundColor: "none",
            borderWidth: 0,
            shape: "rect",
            point: {
                x: 1499299200000,
                y: 142.73,
                xAxis: 0,
                yAxis: 0
            },
            text: "1.000",
            y: 0
        }],
        clip: 0
    }]
}];

/***
 * JSONP
 */

function $jsonp(src, options) {
    var callbackName = options.callbackName || 'callback',
        onSuccess = options.onSuccess || function () {},
        timeout = options.timeout || 10; // sec

    var timeoutTrigger = window.setTimeout(function () {
        window[callbackName] = function () {};
    }, timeout * 1000);

    window[callbackName] = function (data) {
        window.clearTimeout(timeoutTrigger);
        onSuccess(data);
    };

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;

    document.getElementsByTagName('head')[0].appendChild(script);
}

/***
 * Get chart by ID
 */

(function (H) {
    H.getChartById = function (id) {
        return H.charts[document.getElementById(id).getAttribute('data-highcharts-chart')];
    };
}(Highcharts));

/***
 * SIDE MENU
 */
(function (H) {
    var mainMenu = document.getElementById('menu-side'),
        flagMenu = document.getElementById('submenu'),
        i;

    function resetOtherClass(button) {
        var mainChildren = mainMenu.children,
            flagMenuList = flagMenu.querySelectorAll('li');

        for (i = 0; i < mainChildren.length; i++) {
            if (mainChildren[i] !== button) {
                mainChildren[i].classList.remove('active');
            }
        }

        for (i = 0; i < flagMenuList.length; i++) {
            if (flagMenuList[i] !== button) {
                flagMenuList[i].classList.remove('active');
            }
        }
    }

    function onButtonClick(button, chart) {
        var annotating = button.getAttribute('id').split('-')[1];
        var annotation = H.Annotation[chart.annotating];

        resetOtherClass(button);
        button.classList.toggle('active');

        if (chart.annotating && annotation && annotation.reset) {
            annotation.reset();
        }

        chart.annotating = annotating === chart.annotating ? null : annotating;
    }

    function menuOnClick(e) {

        var button = e.target;
        var id = button.getAttribute('id');

        if (id === 'annotation-flag') {
            resetOtherClass(button);

            if (flagMenu.style.display === 'block') {
                flagMenu.style.display = 'none';
                button.classList.remove('active');

            } else {
                flagMenu.style.display = 'block';
                button.classList.add('active');
            }

        } else {
            flagMenu.style.display = 'none';

            onButtonClick(button, H.getChartById('container'));
        }
    }

    function flagMenuClick(e) {
        onButtonClick(e.target, H.getChartById('container'));
    }

    function sideMenu() {
        var menuButtons = mainMenu.querySelectorAll('button'),
            listButtons = mainMenu.querySelectorAll('li');

        resetOtherClass();

        mainMenu.removeEventListener('click', menuOnClick);

        H.getChartById('container').annotating = null;

        menuButtons.forEach(function (menuButton) {
            menuButton.addEventListener('click', menuOnClick);
        });

        listButtons.forEach(function (listButton) {
            listButton.addEventListener('click', flagMenuClick);
        });
    }

    window.sideMenu = sideMenu;

}(Highcharts));

/***
 * ANNOTATIONS BUNDLE
 */
function whichAxis(e, chart) {
    var y = e.clientY;
    var i = 0,
        len = chart.yAxis.length;
    var axis;

    for (i; i < len; i++) {
        axis = chart.yAxis[i];
        if (y >= axis.top && y <= axis.top + axis.height) {
            return axis;
        }
    }

    return null;
}

/***
 * Tunnel
 */
(function () {
    var inArray = Highcharts.inArray;
    var points = [];
    var yAxisIndex = -1;

    function point(x, y) {
        var point = {
            x: x,
            y: y,
            xAxis: 0,
            yAxis: yAxisIndex
        };

        return point;
    }

    function tunnel(points, chart) {
        var yAxis = chart.yAxis[yAxisIndex];
        var width = yAxis.toValue(30, true) - yAxis.toValue(0, true);

        var leftBottom = point(points[0].x, points[0].y - width, points[0].series.yAxis, points[0].series.chart);
        var rightBottom = point(points[1].x, points[1].y - width, points[1].series.yAxis, points[1].series.chart);
        var rightMiddle = point(rightBottom.x, rightBottom.y + width, rightBottom.yAxis);
        var rightTop = point(rightBottom.x, rightBottom.y + width * 2, rightBottom.yAxis);
        var leftTop = point(leftBottom.x, leftBottom.y + width * 2, leftBottom.yAxis);
        var leftMiddle = point(leftBottom.x, leftBottom.y + width, leftBottom.yAxis);

        chart.addAnnotation({
            clip: yAxisIndex,
            shapes: [
                {
                    type: 'path',
                    points: [ leftBottom, rightBottom, rightMiddle, leftMiddle ],
                    strokeWidth: 0,
                    fill: 'rgba(169, 255, 101, 0.4)'
                },
                {
                    type: 'path',
                    points: [ leftMiddle, rightMiddle, rightTop, leftTop ],
                    strokeWidth: 0,
                    fill: 'rgba(208, 122, 50, 0.2)'
                },
                {
                    type: 'path',
                    points: [ leftBottom, rightBottom ],
                    stroke: 'grey'
                },
                {
                    type: 'path',
                    points: [ leftMiddle, rightMiddle ],
                    stroke: 'grey'
                },
                {
                    type: 'path',
                    points: [ leftTop, rightTop ],
                    stroke: 'grey'
                }
            ]
        });

        points = [];
    }

    function onPointClick(p) {
        if (!points[0]) {
            points.push(p);
            yAxisIndex = inArray(p.series.yAxis, p.series.chart.yAxis);
            return;
        }

        if (yAxisIndex !== -1 && yAxisIndex === inArray(p.series.yAxis, p.series.chart.yAxis)) {
            points.push(p);
        }

        if (points.length === 2) {
            tunnel(points, p.series.chart);
            points = [];
            yAxisIndex = -1;
        }
    }


    function reset() {
        yAxisIndex = -1;
        points = [];
    }

    Highcharts.Annotation.tunnel = {
        onPointClick: onPointClick,
        reset: reset
    };
}());

/***
 * CLIPS:
 */
(function (H) {
    var defined = H.defined;

    H.wrap(H.Chart.prototype, 'redrawAnnotations', function (p) {
        var clips = this.annotationsClips || (this.annotationsClips = []);

        H.each(this.yAxis, function (yAxis, i) {
            var clip = clips[i];
            var box = {
                x: yAxis.left,
                y: yAxis.top,
                width: yAxis.width,
                height: yAxis.height
            };

            if (clip) {
                clip.attr(box);
            } else {
                var clipRect = this.renderer.clipRect(box);
                clips.push(clipRect);
            }
        }, this);

        p.call(this);
    });

    H.wrap(H.Annotation.prototype, 'render', function (p) {
        p.call(this);

        var clipIndex = this.options.clip;
        var clip;

        if (defined(clipIndex) && (clip = this.chart.annotationsClips[clipIndex])) {
            this.group.clip(clip);
        }

        var annotation = this;
        var events = this.options.events;
        var contextmenu = events && events.contextmenu;

        if (contextmenu) {
            this.group.on('contextmenu', function (e) {
                contextmenu.call(annotation, e);
            });
        }

    });
}(Highcharts));

/***
 * ARROW LINE
 */
(function (H) {
    var inArray = H.inArray;
    var points = [];
    var yAxisIndex = -1;

    function point(p) {
        var point = { x: p.x, y: p.y, xAxis: 0, yAxis: yAxisIndex };

        return point;
    }

    function arrowLine(points, chart, withMarker) {
        var start = point(points[0]);
        var stop = point(points[1]);

        var options = {
            clip: yAxisIndex,
            shapes: [{
                type: 'path',
                points: [ start, stop ]
            }]
        };

        if (withMarker) {
            options.shapes[0].markerEnd = 'arrow';
        }

        chart.addAnnotation(options);
    }

    function onPointClick(p, withMarker) {
        if (!points[0]) {
            yAxisIndex = inArray(p.series.yAxis, p.series.chart.yAxis);
            points.push(p);
            return;
        }

        if (yAxisIndex !== -1 && inArray(p.series.yAxis, p.series.chart.yAxis) === yAxisIndex) {
            points.push(p);
        }

        if (points.length === 2) {
            arrowLine(points, p.series.chart, withMarker);
            points = [];
            yAxisIndex = -1;
        }
    }

    function onChartClick(e, chart, withMarker) {
        var yAxis = whichAxis(e, chart);
        var x = chart.xAxis[0].toValue(e.chartX);
        var y = yAxis ? yAxis.toValue(e.chartY) : -9e7;

        onPointClick({ x: x, y: y, series: { yAxis: yAxis, chart: chart } }, withMarker);
    }



    function reset() {
        yAxisIndex = -1;
        points = [];
    }

    H.Annotation.arrow = {
        onPointClick: function (p) {
            onPointClick(p, true);
        },
        onChartClick: function (e, chart) {
            onChartClick(e, chart, true);
        },
        reset: reset
    };

    H.Annotation.line = {
        onPointClick: function (p) {
            onPointClick(p, false);
        },
        onChartClick: function (e, chart) {
            onChartClick(e, chart, false);
        },
        reset: reset
    };
}(Highcharts));

/***
 * BASICS
 */
(function (H) {
    var each = H.each;
    var inArray = H.inArray;

    function shape(type, x, y, chart, xAxis, yAxis) {
        var options = {
            type: type,
            point: {
                x: x,
                y: y,
                xAxis: xAxis,
                yAxis: yAxis
            },
            x: 0,
            y: 0,
            fill: 'none'
        };

        if (type === 'circle') {
            options.r = 10;
        } else if (type === 'rect') {
            options.width = 20;
            options.height = 20;
            options.x = -10;
            options.y = -10;
        }

        chart.addAnnotation({
            shapes: [ options ]
        });
    }

    function onChartClick(type) {
        return function (e, chart) {
            var x = e.chartX - chart.plotLeft;
            var y = e.chartY - chart.plotTop;

            shape(type, x, y, chart);
        };
    }

    function onPointClick(type) {
        return function (p) {
            shape(type, p.x, p.y, p.series.chart, 0, inArray(p.series.yAxis, p.series.chart.yAxis));
        };
    }

    each(['circle', 'rect'], function (type) {
        H.Annotation[type] = {
            onChartClick: onChartClick(type),
            onPointClick: onPointClick(type)
        };
    });

}(Highcharts));

/***
 * STAR
 */
(function (H) {
    window.starSteps = [
        'M218.2,96.4L218.2,96.4c6.9,14.1,20.4,23.8,35.9,26.1l0,0c39.1,5.7,54.7,53.7,26.4,81.3l0,0 c-11.2,10.9-16.4,26.7-13.7,42.2l0,0c6.7,38.9-34.2,68.6-69.2,50.2l0,0c-13.9-7.3-30.5-7.3-44.4,0l0,0c-35,18.4-75.8-11.3-69.2-50.2 l0,0c2.7-15.5-2.5-31.2-13.7-42.2l0,0c-28.3-27.6-12.7-75.6,26.4-81.3l0,0c15.5-2.3,28.9-12,35.9-26.1l0,0 C150.2,61,200.8,61,218.2,96.4z',
        'M203.5,66.7l18.5,37.5c4.6,9.2,13.4,15.6,23.5,17.1l8.5,1.2c39.1,5.7,54.7,53.7,26.4,81.3l0,0 c-11.2,10.9-16.4,26.7-13.7,42.2l0,0c6.7,38.9-34.2,68.6-69.2,50.2l0,0c-13.9-7.3-30.5-7.3-44.4,0l0,0c-35,18.4-75.8-11.3-69.2-50.2 l0,0c2.7-15.5-2.5-31.2-13.7-42.2l0,0c-28.3-27.6-12.7-75.6,26.4-81.3l8.5-1.2c10.2-1.5,19-7.9,23.5-17.1l18.5-37.5 C158.9,43.4,192.1,43.4,203.5,66.7z',
        'M203.5,66.7l18.5,37.5c4.6,9.2,13.4,15.6,23.5,17.1l44.7,6.5c24.3,3.5,34,33.4,16.4,50.5l-33,32.1 c-7,6.8-10.2,16.6-8.5,26.2l1.6,9.4c6.7,38.9-34.2,68.6-69.2,50.2l0,0c-13.9-7.3-30.5-7.3-44.4,0l0,0c-35,18.4-75.8-11.3-69.2-50.2 l0,0c2.7-15.5-2.5-31.2-13.7-42.2l0,0c-28.3-27.6-12.7-75.6,26.4-81.3l8.5-1.2c10.2-1.5,19-7.9,23.5-17.1l18.5-37.5 C158.9,43.4,192.1,43.4,203.5,66.7z',
        'M203.5,66.7l18.5,37.5c4.6,9.2,13.4,15.6,23.5,17.1l44.7,6.5c24.3,3.5,34,33.4,16.4,50.5l-33,32.1 c-7,6.8-10.2,16.6-8.5,26.2l9.9,57.9c3.3,19.1-16.8,33.6-33.9,24.6l-54.9-28.9c-6.8-3.6-14.9-3.6-21.7,0l-11.3,5.9 c-35,18.4-75.8-11.3-69.2-50.2l0,0c2.7-15.5-2.5-31.2-13.7-42.2l0,0c-28.3-27.6-12.7-75.6,26.4-81.3l8.5-1.2 c10.2-1.5,19-7.9,23.5-17.1l18.5-37.5C158.9,43.4,192.1,43.4,203.5,66.7z',
        'M203.5,66.7l18.5,37.5c4.6,9.2,13.4,15.6,23.5,17.1l44.7,6.5c24.3,3.5,34,33.4,16.4,50.5l-33,32.1 c-7,6.8-10.2,16.6-8.5,26.2l9.9,57.9c3.3,19.1-16.8,33.6-33.9,24.6l-54.9-28.9c-6.8-3.6-14.9-3.6-21.7,0L109,319.5 c-16.9,8.9-36.5-5.5-33.3-24.2l10.7-62.1c1.3-7.5-1.2-15.1-6.6-20.3l-9.3-9.1c-28.3-27.6-12.7-75.6,26.4-81.3l8.5-1.2 c10.2-1.5,19-7.9,23.5-17.1l18.5-37.5C158.9,43.4,192.1,43.4,203.5,66.7z',
        'M203.5,66.7l18.5,37.5c4.6,9.2,13.4,15.6,23.5,17.1l44.7,6.5c24.3,3.5,34,33.4,16.4,50.5l-33,32.1 c-7,6.8-10.2,16.6-8.5,26.2l9.9,57.9c3.3,19.1-16.8,33.6-33.9,24.6l-54.9-28.9c-6.8-3.6-14.9-3.6-21.7,0L109,319.5 c-16.9,8.9-36.5-5.5-33.3-24.2l10.7-62.1c1.3-7.5-1.2-15.1-6.6-20.3l-36.4-35.5c-17.2-16.8-7.7-46,16.1-49.4l46-6.7 c10.2-1.5,19-7.9,23.5-17.1l18.5-37.5C158.9,43.4,192.1,43.4,203.5,66.7z',
        'M183.4,25.9l38.6,78.2c4.6,9.2,13.4,15.6,23.5,17.1l44.7,6.5c24.3,3.5,34,33.4,16.4,50.5l-33,32.1 c-7,6.8-10.2,16.6-8.5,26.2l9.9,57.9c3.3,19.1-16.8,33.6-33.9,24.6l-54.9-28.9c-6.8-3.6-14.9-3.6-21.7,0L109,319.5 c-16.9,8.9-36.5-5.5-33.3-24.2l10.7-62.1c1.3-7.5-1.2-15.1-6.6-20.3l-36.4-35.5c-17.2-16.8-7.7-46,16.1-49.4l46-6.7 c10.2-1.5,19-7.9,23.5-17.1l38.6-78.2C170.8,19.3,180.2,19.3,183.4,25.9z',
        'M183.4,25.9l38.6,78.2c4.6,9.2,13.4,15.6,23.5,17.1l88.1,12.8c6.5,0.9,9.1,9,4.4,13.6l-64.4,62.8 c-7,6.8-10.2,16.6-8.5,26.2l9.9,57.9c3.3,19.1-16.8,33.6-33.9,24.6l-54.9-28.9c-6.8-3.6-14.9-3.6-21.7,0L109,319.5 c-16.9,8.9-36.5-5.5-33.3-24.2l10.7-62.1c1.3-7.5-1.2-15.1-6.6-20.3l-36.4-35.5c-17.2-16.8-7.7-46,16.1-49.4l46-6.7 c10.2-1.5,19-7.9,23.5-17.1l38.6-78.2C170.8,19.3,180.2,19.3,183.4,25.9z',
        'M183.4,25.9l38.6,78.2c4.6,9.2,13.4,15.6,23.5,17.1l88.1,12.8c6.5,0.9,9.1,9,4.4,13.6l-64.4,62.8 c-7,6.8-10.2,16.6-8.5,26.2l15.5,90.4c1,5.8-5.1,10.2-10.3,7.5l-84.1-44.2c-6.8-3.6-14.9-3.6-21.7,0L109,319.5 c-16.9,8.9-36.5-5.5-33.3-24.2l10.7-62.1c1.3-7.5-1.2-15.1-6.6-20.3l-36.4-35.5c-17.2-16.8-7.7-46,16.1-49.4l46-6.7 c10.2-1.5,19-7.9,23.5-17.1l38.6-78.2C170.8,19.3,180.2,19.3,183.4,25.9z',
        'M183.4,25.9l38.6,78.2c4.6,9.2,13.4,15.6,23.5,17.1l88.1,12.8c6.5,0.9,9.1,9,4.4,13.6l-64.4,62.8 c-7,6.8-10.2,16.6-8.5,26.2l15.5,90.4c1,5.8-5.1,10.2-10.3,7.5l-84.1-44.2c-6.8-3.6-14.9-3.6-21.7,0l-84.7,44.5 c-4.9,2.6-10.7-1.6-9.8-7.1l16.2-94.5c1.3-7.5-1.2-15.1-6.6-20.3l-36.4-35.5c-17.2-16.8-7.7-46,16.1-49.4l46-6.7 c10.2-1.5,19-7.9,23.5-17.1l38.6-78.2C170.8,19.3,180.2,19.3,183.4,25.9z',
        'M183.4,25.9l38.6,78.2c4.6,9.2,13.4,15.6,23.5,17.1l88.1,12.8c6.5,0.9,9.1,9,4.4,13.6l-64.4,62.8 c-7,6.8-10.2,16.6-8.5,26.2l15.5,90.4c1,5.8-5.1,10.2-10.3,7.5l-84.1-44.2c-6.8-3.6-14.9-3.6-21.7,0l-84.7,44.5 c-4.9,2.6-10.7-1.6-9.8-7.1l16.2-94.5c1.3-7.5-1.2-15.1-6.6-20.3l-67-65.3c-4.7-4.6-2.1-12.5,4.4-13.4l88.3-12.8 c10.2-1.5,19-7.9,23.5-17.1l38.6-78.2C170.8,19.3,180.2,19.3,183.4,25.9z'
    ];

    function animateStar(item) {

        var anim = this.renderer.createElement('animate').attr({
            attributeType: 'XML',
            attributeName: 'd',
            values: window.starSteps.join(';'),
            dur: '2s',
            fill: 'freeze'
        }).add(item);

        var rotate = this.renderer.createElement('animateTransform').attr({
            attributeType: 'XML',
            attributeName: 'transform',
            type: 'rotate',
            from: '0 180 180',
            to: '360 180 180',
            values: '0 180 180;90 180 180;180 180 180;270 180 180;360 180 180;380 180 180;350 180 180;370 180 180;358 180 180;362 180 180;360 180 180',
            dur: '4s',
            fill: 'freeze'
        }).add(item);

        rotate.element.beginElement();
        anim.element.beginElement();
    }

    H.wrap(H.Annotation.prototype, 'redrawPath', function (p, pathItem, isNew) {
        if (pathItem.options.d) {
            pathItem[isNew ? 'attr' : 'animate']({
                d: pathItem.options.d
            });

            pathItem.placed = true;
        } else {
            p.call(this, pathItem, isNew);
        }
    });

    H.wrap(H.Annotation.prototype, 'renderItem', function (p, item) {
        var shape = this.options.shapes && this.options.shapes[0];
        var onAddCallback = shape && shape.animateStar;

        if (onAddCallback) {
            var onAdd = item.onAdd;
            item.onAdd = function () {
                if (onAdd) {
                    onAdd.call(this);
                }

                animateStar.call(this, item);
            };
        }

        p.call(this, item);
    });

    H.wrap(H.Annotation.prototype, 'redrawItem', function (p, item) {
        p.call(this, item);

        var group = this.options.group;
        var scale = 0.2;
        var bbox, x, y;

        if (group) {
            bbox = this.group.getBBox();
            x = group.x - bbox.width * scale / 1.5;
            y = group.y - bbox.height * scale / 1.5;

            this.group.attr({
                transform: 'translate(' + x + ', ' + y + ') scale(' + scale + ')'
            });
        }

    });



    function star(x, y, chart) {
        chart.addAnnotation({
            group: { x: x, y: y },
            shapes: [{
                animateStar: true,
                type: 'path',
                d: window.starSteps[0],
                points: [{}],
                fill: 'rgba(205, 150, 15, 0.5)'
            }]
        });
    }

    function onChartClick(e, chart) {
        var x = e.chartX;
        var y = e.chartY;

        star(x, y, chart);
    }

    H.Annotation.feature = {
        onChartClick: onChartClick
    };
}(Highcharts));

/***
 * TEXT
 */
(function (H) {
    var inArray = H.inArray;

    var text = document.getElementById('text');
    var x = -9e7;
    var y = -9e7;
    var yAxisIndex = -1;
    var chart = null;
    var counter = -1;
    var annotationToRemove;

    var dialog = document.getElementById('annotation-text-form');

    function onPointClick(p) {
        x = p.x;
        y = p.y;
        yAxisIndex = inArray(p.series.yAxis, p.series.chart.yAxis);
        chart = p.series.chart;

        if (yAxisIndex !== -1 && chart) {
            dialog.style.display = 'block';
        }
    }

    function addText(e) {
        e.preventDefault();

        var backgroundColor = document.querySelector('input[name="background-color"]:checked').value;
        var shape = document.querySelector('input[name="shape"]:checked').value;

        if (annotationToRemove) {
            chart.removeAnnotation(annotationToRemove);
            annotationToRemove = null;
        }
        chart.addAnnotation({
            events: {
                contextmenu: function (e) {
                    e.preventDefault();

                    var label = this.options.labels[0];
                    text.value = label.text;

                    var point = this.labels[0].points[0];
                    annotationToRemove = this.options.id;
                    onPointClick(point);
                }
            },
            id: 'annotation-text-' + (++counter),
            labels: [{
                text: text.value,
                point: {
                    x: x,
                    y: y,
                    xAxis: 0,
                    yAxis: yAxisIndex
                },
                backgroundColor: backgroundColor,
                shape: shape,
                borderWidth: shape !== 'connector' ? 0 : 1,
                x: 0,
                y: shape === 'circle' ? 0 : -16
            }]
        });

        dialog.style.display = 'none';
        chart = null;
        yAxisIndex = -1;
    }

    document.getElementById('add-text-annotation').addEventListener('submit', addText);

    function onChartClick(e, chart) {
        var yAxis = window.whichAxis(e, chart);
        var x = chart.xAxis[0].toValue(e.chartX);
        var y = yAxis ? yAxis.toValue(e.chartY) : -9e7;

        onPointClick({ x: x, y: y, series: { yAxis: yAxis, chart: chart } });
    }

    H.Annotation.text = {
        onChartClick: onChartClick,
        onPointClick: onPointClick
    };
}(Highcharts));

/***
 * FIBONACCI
 */
(function (H) {
    var inArray = H.inArray;
    var levels = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1];
    var alpha = 0.4;
    var points = [];
    var yAxisIndex = -1;

    function colors() {
        return [
            'rgba(130, 170, 255, 0.4)',
            'rgba(139, 191, 216, 0.4)',
            'rgba(150, 216, 192, 0.4)',
            'rgba(156, 229, 161, 0.4)',
            'rgba(162, 241, 130, 0.4)',
            'rgba(169, 255, 101, 0.4)'
        ].reverse();
    }

    function point(x, y) {
        var point = {
            x: x,
            y: y,
            xAxis: 0,
            yAxis: yAxisIndex
        };

        return point;
    }

    function fibonacciRetracements(p, chart) {
        var p1 = points[0];
        var p2 = points[1];

        if (p1.x > p2.x) {
            p1 = points[1];
            p2 = points[0];
        }

        var diff = p2.y - p1.y;
        var retracements = levels.map(function (level) {
            return p2.y - diff * level;
        });

        var lines = retracements.map(function (retracement) {
            return {
                type: 'path',
                points: [ point(p1.x, retracement, p1), point(p2.x, retracement, p2) ]
            };
        });

        var shapePoints = retracements.map(function (retracement) {
            return [
                point(p1.x, retracement, p1),
                point(p2.x, retracement, p2)
            ];
        });

        var backgrounds = colors(alpha).map(function (color, i) {
            return {
                type: 'path',
                points: [ shapePoints[i][0], shapePoints[i][1], shapePoints[i + 1][1], shapePoints[i + 1][0] ],
                strokeWidth: 0,
                fill: color
            };
        });


        lines = shapePoints.map(function (points) {
            return {
                type: 'path',
                points: points,
                stroke: 'black',
                strokeWidth: 1
            };
        });

        var labels = levels.map(function (level, i) {
            return {
                point: shapePoints[i][0],
                text: level.toFixed(3),
                y: 0,
                backgroundColor: 'none',
                align: 'right',
                verticalAlign: 'middle',
                shape: 'rect',
                borderWidth: 0,
                style: {
                    color: 'grey'
                }
            };
        });

        chart.addAnnotation({
            shapes: backgrounds.concat(lines),
            labels: labels,
            zIndex: 2,
            clip: yAxisIndex
        });
    }

    function onPointClick(p) {
        if (!points[0]) {
            points.push(p);
            yAxisIndex = inArray(p.series.yAxis, p.series.chart.yAxis);
            return;
        }

        if (yAxisIndex !== -1 && yAxisIndex === inArray(p.series.yAxis, p.series.chart.yAxis)) {
            points.push(p);
        }

        if (points.length === 2) {
            fibonacciRetracements(points, p.series.chart);
            points = [];
            yAxisIndex = -1;
        }
    }

    function reset() {
        points = [];
    }

    H.Annotation.fibonacci = {
        onPointClick: onPointClick,
        reset: reset
    };
}(Highcharts));

/***
 * FLAGS
 */
(function (H) {
    var symbols = H.SVGRenderer.prototype.symbols;

    symbols.diamondpin = function (x, y, w, h, options) {
        var anchorX = options && options.anchorX,
            anchorY = options && options.anchorY,
            path,
            labelTopOrBottomY;

        path = symbols.diamond(x, y, w, h);

        if (anchorX && anchorY) {
      // if the label is below the anchor, draw the connecting line from the top edge of the label
      // otherwise start drawing from the bottom edge
            labelTopOrBottomY = (y > anchorY) ? y : y + h;
            path.push('M', anchorX, labelTopOrBottomY, 'L', anchorX, anchorY);
        }

        return path;
    };

    H.wrap(H.seriesTypes.flags.prototype, 'drawPoints', function (p) {
        p.call(this);

        var style = this.options.style;

        if (style && style.dy) {
            H.each(this.points, function (point) {
                if (point.graphic) {
                    point.graphic.text.attr({
                        dy: style.dy
                    });
                }
            });
        }
    });


    var inArray = H.inArray;
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var letterIndex = -1;

    function onPointClick(shape) {
        return function (p) {
            var chart = p.series.chart;

            var id = p.series.options.id;
            var yAxisIndex = inArray(p.series.yAxis, chart.yAxis);

            if (id && yAxisIndex !== -1) {
                var options = {
                    type: 'flags',
                    onSeries: id,
                    shape: shape,
                    data: [{
                        x: p.x,
                        title: letters[++letterIndex % letters.length]
                    }],
                    yAxis: yAxisIndex,
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        dy: 4
                    },
                    textAlign: 'center',
                    width: 25,
                    height: 25,
                    y: -50,
                    enableMouseTracking: false
                };

                if (shape === 'diamondpin') {
                    options.width = 30;
                }

                chart.addSeries(options);
            }
        };
    }

    H.each(['flag', 'circlepin', 'squarepin', 'diamondpin'], function (shape) {
        H.Annotation[shape] = {
            onPointClick: onPointClick(shape)
        };
    });
}(Highcharts));

/***
 * MAIN DEMO
 */
window.onload = function () {

    function isNavigatorAxis(axis) {
        return axis.userOptions.className === 'highcharts-navigator-yaxis';
    }

    function getLastAxis(chart) {
        var axes = chart.yAxis,
            len = axes.length - 1;

        // If last yAxis is from navigator, return the previous one:
        return isNavigatorAxis(axes[len]) ? axes[len - 1] : axes[len];
    }

    function getHeight() {
        return window.innerHeight - document.getElementById('demo').offsetTop;
    }

    var indicatorsList = ['rsi', 'sma'],
        indicatorContainer = document.getElementById('indicators-container'),
        indicatorsButton = document.getElementById('indicators-dropdown'),
        analyzeButton = document.getElementById('#analyze-dropdown'),
        advOptions = {
            chart: {
                type: 'candlestick',
                panning: false,
                height: getHeight(),
                spacingLeft: 50,
                alignTicks: false,
                events: {
                    click: function (e) {
                        var annotation = Highcharts.Annotation[this.annotating];

                        if (annotation && annotation.onChartClick) {
                            annotation.onChartClick(e, this);
                        }
                    }
                }
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    },
                    dataGrouping: {
                        enabled: false
                    },
                    point: {
                        events: {
                            click: function () {
                                var annotation = Highcharts.Annotation[this.series.chart.annotating];

                                if (annotation && annotation.onPointClick) {
                                    annotation.onPointClick(this);
                                }
                            }
                        }
                    }
                }
            },
            rangeSelector: {
                buttonPosition: {
                    align: 'center',
                    x: 0,
                    y: 0
                },
                inputPosition: {
                    y: 0,
                    align: 'right',
                    x: -90
                },
                buttonTheme: {
                    fill: '#ffffff',
                    stroke: '#cccccc',
                    'stroke-width': 0,
                    width: '10px',
                    style: {
                        color: '#707070'
                    },
                    states: {
                        hover: {
                            fill: '#fff',
                            style: {
                                fontWeight: 'normal',
                                color: '#333333'
                            }
                        },
                        select: {
                            fill: '#fff',
                            style: {
                                fontWeight: 'normal',
                                color: '#29ABE2'
                            }
                        }
                    }
                },
                selected: 3,
                buttons: [{
                    type: 'day',
                    count: 7,
                    text: '1W'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1M'
                }, {
                    type: 'month',
                    count: 3,
                    text: '3M'
                }, {
                    type: 'month',
                    count: 6,
                    text: '6M'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },
            yAxis: [{
                height: '50%',
                resize: {
                    enabled: true,
                    controlledAxis: {
                        next: [1]
                    },
                    lineWidth: 4
                }
            }, {
                top: '50%',
                height: '50%',
                id: 'rsi'
            }],
            navigator: {
                yAxis: {
                    lineWidth: 0
                },
                xAxis: {
                    plotBands: [{
                        color: '#fff',
                        from: -Infinity,
                        to: Infinity
                    }]
                }
            },
            series: [{
                cropThreshold: 0,
                id: 'main',
                name: 'AAPL',
                data: [],
                tooltip: {
                    valueDecimals: 2
                },
                allowPointSelect: true
            }, {
                linkedTo: 'main',
                type: 'sma',
                id: 's-sma',
                params: {
                    period: 14
                },
                styles: {
                    'stroke-width': 1,
                    stroke: '#8ddd54',
                    dashstyle: 'solid'
                }
            }, {
                linkedTo: 'main',
                type: 'rsi',
                id: 's-rsi',
                params: {
                    period: 14
                },
                yAxis: 1,
                styles: {
                    'stroke-width': 1,
                    stroke: '#6ba583',
                    dashstyle: 'solid'
                }
            }]
        },
        defaultData = window.localStorage.getItem('data');


    function attachEvents() {

        var selectDropdowns;

        window.sideMenu();

        function manageIndicators(value, adder, useAxis) {
            var index = -1,
                chart = Highcharts.getChartById('container'),
                lastYAxis = getLastAxis(chart),
                lastYAxisIndex,
                previousYAxis,
                newHeight,
                nextAxis;

            chart.series.forEach(function (e, i) {
                if (e.options.type === value) {
                    index = i;
                }
            });

            if (adder) {
                if (useAxis) {
                    chart.addAxis({
                        top: lastYAxis.top + lastYAxis.height / 2,
                        height: lastYAxis.height / 2,
                        opposite: true,
                        minLength: 50,
                        id: value,
                        title: {
                            text: ''
                        }
                    }, false);
                    lastYAxis.update({
                        height: lastYAxis.height / 2,
                        resize: {
                            enabled: true,
                            controlledAxis: {
                                next: [value]
                            },
                            lineWidth: 4
                        }
                    }, false);
                }

                var lastIndicator = chart.addSeries({
                    linkedTo: 'main',
                    id: 's-' + value,
                    type: value,
                    yAxis: useAxis ? chart.yAxis.length - 1 : 0,
                    styles: {
                        'stroke-width': 1,
                        dashstyle: 'solid'
                    }
                });

                // set extremes i.e for Ichimoku
                chart.xAxis[0].setExtremes(chart.xAxis[0].min, lastIndicator.xData[lastIndicator.xData.length - 1]);

            } else {
                if (useAxis) {
                    // Remove last Axis
                    lastYAxis = chart.series[index].yAxis;
                    lastYAxisIndex = chart.yAxis.indexOf(lastYAxis);
                    newHeight = lastYAxis.height;
                    lastYAxis.remove(false);
                    // Now update previous Axis to fill the new space:
                    previousYAxis = isNavigatorAxis(chart.yAxis[lastYAxisIndex - 1]) ?
                        chart.yAxis[lastYAxisIndex - 2] : chart.yAxis[lastYAxisIndex - 1];

                    // If we removed last axis, go back by one:
                    if (!chart.yAxis[lastYAxisIndex]) {
                        lastYAxisIndex -= 1;
                    }

                    nextAxis = !isNavigatorAxis(chart.yAxis[lastYAxisIndex]) ?
                        chart.yAxis[lastYAxisIndex] : Highcharts.pick(
                            chart.yAxis[lastYAxisIndex + 1], // next if exists
                            chart.yAxis[lastYAxisIndex - 1] // previous otherwise
                        );

                    previousYAxis.update(
                        Highcharts.merge(
                            {
                                height: previousYAxis.height + newHeight
                            },
                            // If first yAxis on chart, and the only one, or
                            // it is last yAxis on the chart or
                            // it is a predefined axis on chart init
                            // then disable resizer:
                            previousYAxis === chart.yAxis[0] && chart.yAxis.length === 2 ||
                            previousYAxis === chart.yAxis[chart.yAxis.length - 1] ||
                            (
                                previousYAxis === chart.yAxis[chart.yAxis.length - 2] &&
                                chart.navigator.yAxis === chart.yAxis[chart.yAxis.length - 1]
                            ) ? // navigator jump
                            {
                                resize: {
                                    enabled: false
                                }
                            } :
                            // Otherwise set new reference for the next axis:
                            {
                                resize: {
                                    controlledAxis: {
                                        next: [nextAxis.options.id]
                                    }
                                }
                            }
                        )
                    );
                } else {
                    chart.series[index].remove();
                }
            }
        }

        selectDropdowns = document.querySelectorAll('#menu-nav .select-dropdown');

        selectDropdowns.forEach(function (dropdown) {
            dropdown.addEventListener('click', function (e) {
                var button = e.target,
                    dropdownMenu = button.nextElementSibling;

                if (dropdownMenu.style.display === 'block') {
                    button.classList.remove('dropdown-active');
                    dropdownMenu.style.display = 'none';
                } else {
                    button.classList.add('dropdown-active');
                    dropdownMenu.style.display = 'block';
                }
            });
        });

        document.addEventListener('click', function (e) {
            var target = e.target,
                isIndica = target.getAttribute('id') === 'indicators-dropdown',
                isAnalyze = target.getAttribute('id') === 'analyze-dropdown',
                hiders = [],
                removers = [];

            if (!isIndica && !isAnalyze) {
                removers = [indicatorsButton, analyzeButton];
                hiders = ['indicators-container', 'analyze-container'];
            } else if (isIndica && !isAnalyze) {
                removers = [analyzeButton];
                hiders = ['analyze-container'];
            } else if (!isIndica && isAnalyze) {
                removers = [indicatorsButton];
                hiders = ['indicators-container'];
            }


            removers.forEach(function (button) {
                if (button) {
                    button.classList.remove('dropdown-active');
                }
            });

            hiders.forEach(function (drop) {
                document.querySelectorAll('#' + drop + ' .dropdown-menu').forEach(function (dropdown) {
                    dropdown.style.display = 'none';
                });
            });
        });

        document.querySelectorAll('#indicators-container .dropdown-menu a').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var target = e.currentTarget,
                    val = target.getAttribute('data-value'),
                    useAxis = target.getAttribute('data-axis'),
                    inp = target.querySelectorAll('input')[0],
                    idx;

                if ((idx = indicatorsList.indexOf(val)) > -1) {
                    indicatorsList.splice(idx, 1);
                    setTimeout(function () {
                        inp.checked = false;
                    }, 0);
                    manageIndicators(val, false, useAxis);
                } else {
                    indicatorsList.push(val);
                    setTimeout(function () {
                        inp.checked = true;
                    }, 0);
                    manageIndicators(val, true, useAxis);
                }

                e.target.blur();

                return false;
            });
        });

        document.querySelectorAll('#analyze-container .dropdown-menu a').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var target = e.currentTarget,
                    dataset = window.analyzes[target.getAttribute('data-value')],
                    chart = Highcharts.getChartById('container');

                advOptions.annotations = dataset.annotations;
                advOptions.yAxis = dataset.yAxis;
                advOptions.series = [chart.series[0].userOptions].concat(dataset.indicators, dataset.flags || []);

                // Clear old ones:
                indicatorContainer.querySelectorAll('input').forEach(function (inp) {
                    inp.checked = false;
                });

                indicatorsList = [];
                advOptions.series.forEach(function (series) {
                    // check new ones:
                    var inp = indicatorContainer.querySelectorAll('a[data-value="' + series.type + '"] input');

                    if (Highcharts.defined(inp[0])) {
                        inp[0].checked = true;
                    }

                    indicatorsList.push(series.type);
                });

                Highcharts.stockChart('container', Highcharts.extend(dataset, advOptions));

                e.target.blur();

                return false;
            });
        });

        document.getElementById('highcharts-save').addEventListener('click', function () {
            var chart = Highcharts.getChartById('container'),
                chartYAxis = chart.yAxis,
                navYAxisIdex = chartYAxis.indexOf(chart.navigator.yAxis),
                annotations = [],
                indicators = [],
                flags = [],
                yAxis = [];

            chart.series.forEach(function (series) {
                if (series instanceof Highcharts.seriesTypes.sma) {
                    var index = indicators.push(series.userOptions);

                    // If indicator was added later, decrease index for future loading
                    // This cases problems when recreating chart
                    // Navigator in such case is always the last one:
                    if (navYAxisIdex < chartYAxis.indexOf(series.yAxis)) {
                        indicators[index - 1].yAxis -= 1;
                    }
                } else if (series.type === 'flags') {
                    flags.push(series.userOptions);
                }
            });

            chart.annotations.forEach(function (ann, i) {
                annotations[i] = ann.options;
            });

            chart.yAxis.forEach(function (axis) {
                if (!isNavigatorAxis(axis)) {
                    yAxis.push(axis.userOptions);
                }
            });

            window.localStorage.setItem('data', JSON.stringify({
                data: chart.series[0].options.data,
                indicators: indicators,
                flags: flags,
                annotations: annotations,
                yAxis: yAxis
            }));
        });

        document.getElementById('highcharts-reset').addEventListener('click', function () {
            if (confirm('Are you sure you want to clear the chart?')) {
                $jsonp('https://www.highcharts.com/samples/data/jsonp.php?a=e&filename=aapl-ohlc.json&callback=callbackfunc', {
                    callbackName: 'callbackfunc',
                    onSuccess: function (data) {
                        var chart = Highcharts.getChartById('container');

                        window.localStorage.removeItem('data');

                        indicatorContainer.querySelectorAll('input')[0].checked = false;
                        indicatorsList = []; // clear array too
                        chart.showLoading();
                        advOptions.series[0].data = data;
                        advOptions.series = [advOptions.series[0]];
                        advOptions.yAxis = [
                            Highcharts.extend(
                                advOptions.yAxis[0],
                                {
                                    height: '100%',
                                    resize: {
                                        enabled: false
                                    }
                                }
                            )
                        ];
                        advOptions.indicators = [];
                        advOptions.annotations = [];
                        chart.hideLoading();

                        Highcharts.stockChart('container', Highcharts.extend({}, advOptions));
                    }
                });
            }
        });
    }

    if (defaultData) {
        var parsedChart = JSON.parse(defaultData);
        advOptions.series[0].data = parsedChart.data;
        advOptions.annotations = parsedChart.annotations;
        advOptions.series = [advOptions.series[0]].concat(parsedChart.indicators, parsedChart.flags || []);
        advOptions.yAxis = parsedChart.yAxis;
        indicatorsList = advOptions.series.slice(1).map(function (ind) {
            return ind.type;
        });
        attachEvents(
            Highcharts.stockChart('container', Highcharts.extend({}, advOptions))
        );
    } else {
        $jsonp('https://www.highcharts.com/samples/data/jsonp.php?a=e&filename=aapl-ohlc.json&callback=callbackfunc', {
            callbackName: 'callbackfunc',
            onSuccess: function (data) {
                advOptions.series[0].data = data;
                attachEvents(
                    Highcharts.stockChart('container', Highcharts.extend({}, advOptions))
                );
            }
        });
    }

    // Initial select:
    indicatorsList.forEach(function (ind) {
        indicatorContainer.querySelectorAll('a[data-value="' + ind + '"] input')[0].checked = true;
    });

    // Adapt height on resize
    window.addEventListener('resize', function () {
        Highcharts.getChartById('container').setSize(undefined, getHeight(), false);
    });
};
