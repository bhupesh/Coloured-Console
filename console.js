(function (g) {
    'use strict';
    var oConsole = g.console,
        namedColors;

    namedColors = [
        "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
        "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood",
        "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan",
        "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen",
        "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey",
        "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue",
        "firebrick", "floralwhite", "forestgreen", "fuchsia",
        "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey",
        "honeydew", "hotpink",
        "indianred", "indigo", "ivory",
        "khaki",
        "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow",
        "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
        "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen",
        "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
        "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
        "navajowhite", "navy",
        "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid",
        "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink",
        "plum", "powderblue", "purple",
        "rebeccapurple", "red", "rosybrown", "royalblue",
        "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray",
        "slategrey", "snow", "springgreen", "steelblue",
        "tan", "teal", "thistle", "tomato", "turquoise",
        "violet",
        "wheat", "white", "whitesmoke",
        "yellow", "yellowgreen"];

    var options = {
        "background": 'white',
        "fontFamily": 'monospace',
        "fontWeight": 'bold'
    };

    function getFormatStr(l) {
        var formatStr = '%c';

        l.forEach(function (val, idx) {
            if (typeof val === 'string') {
                formatStr += '%s ';
            } else if (typeof val === 'number') {
                formatStr += '%f ';
            } else if (typeof val === 'object') {
                formatStr += '%O ';
            }
        });
        return formatStr;
    }

    console.color = function (color, l) {
        var l = l || [].slice.apply(arguments, 1),
                formatStr = getFormatStr(l);

        l.unshift('color: ' + color + ';background-color:' + options.background + ';font-weight:' + options.fontWeight + ';font-family:' + options.fontFamily + ';');
        l.unshift(formatStr);

        oConsole.log.apply(oConsole, l);
    };

    console.random = function () {
        var r = namedColors[Math.floor(Math.random() * namedColors.length)];

        console.color(r, [].slice.apply(arguments));
    };

    namedColors.forEach(function (color) {
        console[color] = function () {
            console.color(color, [].slice.apply(arguments));
        };
    });

}(new Function('return this')()));
