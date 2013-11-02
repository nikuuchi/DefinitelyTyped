///<reference path="snap.svg.d.ts" />

var s = Snap("#content");
var circle = s.circle(200, 200, 200);
var ell = s.ellipse(500, 100, 100, 200);
ell.attr({fill:"#aaa"});
circle.attr({ fill: "#bada55", stroke: "#123", strokeWidth: 5 });

var smallCircle = s.circle(100, 150, 70);

var discs = s.group(smallCircle, s.circle(300, 500, 70), s.circle(400, 100, 10));
