// Type definitions for Snap.svg 0.1.0
// Project: http://snapsvg.io
// Definitions by: Atsushi Uchida <https://github.com/nikuuchi>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface BoundingBox {
    x: number;
    y: number;
    x2: number;
    y2: number;
    width: number;
    height: number;
}

interface BoundingBoxDescripter {
    cx: number;
    cy: number;
    h: number;
    height: number;
    path: string;
    r0: number;
    r1: number;
    r2: number;
    vb: string;
    w: number;
    width: number;
    x2: number;
    x: number;
    y2: number;
    y: number;
}

interface PointInformation {
    x: number;
    y: number;
    m: {
        x: number;
        y: number;
    };
    n: {
        x: number;
        y: number;
    };
    start: {
        x: number;
        y: number;
    };
    end: {
        x: number;
        y: number;
    };
    alpha: number;
}

interface Point {
    x: number;
    y: number;
    alpha: number;
}

interface inAnim {
    anim: any;
    curStatus: number;
    status: any;
    stop: any;
}

interface SnapElement {
    add(el: SnapElement): SnapElement;
    after(el: SnapElement): SnapElement;
    animate(attrs: any, duration: number, easing?: any, callback?: any): void;
    append(el: SnapElement): SnapElement;
    asPX(attr: string, value?: string): SnapElement;
    attr(params: any): SnapElement;
    attr(param: string): string;
    before(el: SnapElement): SnapElement;
    click(handler: any): SnapElement;
    clone(): SnapElement;
    data(key: string): any;
    data(key: string, value: string): SnapElement;
    dblclick(handler: any): SnapElement;
    drag(onmove: any, onstart: any, onend: any, mcontext?: string, scontext?: string, econtext?: string): SnapElement;
    getBBox(): BoundingBoxDescripter;
    getPointAtLength(length: number): Point;
    getSubpath(from: number, to: number): string;
    getTotalLength(): number;
    hover(f_in: any, f_out: any, icontext?: any, ocontext?: any): SnapElement;
    inAnim(): inAnim;
    innerSVG(): string;
    insertAfter(el: SnapElement): SnapElement;
    insertBefore(el: SnapElement): SnapElement;
    marker(x: number, y: number, width: number, height: number, refX: number, refY: number): any;
    mousedown(handler: any): SnapElement;
    mousemove(handler: any): SnapElement;
    mouseout(handler: any): SnapElement;
    mouseover(handler: any): SnapElement;
    mouseup(handler: any): SnapElement;
    parent(): SnapElement;
    pattern(x: number, y: number, width: number, height: number): SnapElement;
    prepend(el: SnapElement): SnapElement;
    remove(): SnapElement;
    removeData(key?: string): SnapElement;
    select(query: string): SnapElement;
    selectAll(query: string): SnapElement[];
    stop(): SnapElement;
    toDefs(): SnapElement;
    toString(): string;
    touchcancel(handler: any): SnapElement;
    touchend(handler: any): SnapElement;
    touchmove(handler: any): SnapElement;
    touchstart(handler: any): SnapElement;
    transform(tstr: string): SnapElement;
    unclick(handler: any): SnapElement;
    undblclick(handler: any): SnapElement;
    undrag(): any;
    unhover(f_in: any, f_out: any): SnapElement;
    unmousedown(handler: any): SnapElement;
    unmousemove(handler: any): SnapElement;
    unmouseout(handler: any): SnapElement;
    unmouseover(handler: any): SnapElement;
    unmouseup(handler: any): SnapElement;
    untouchcancel(handler: any): SnapElement;
    untouchend(handler: any): SnapElement;
    untouchmove(handler: any): SnapElement;
    untouchstart(handler: any): SnapElement;
    use(): SnapElement;
}

interface Fragment {
    select(query: string): SnapElement;
    selectAll(query: string): SnapElement[];
}

interface MatrixSplit {
    dx: number;
    dy: number;
    scalex: number;
    scaley: number;
    shear: number;
    rotate: number;
    isSimple: boolean;
}

interface Matrix {
    add(a: number, b: number, c: number, d: number, e: number, f: number): Matrix;
    add(matrix: Matrix): Matrix;
    clone(): Matrix;
    invert(): Matrix;
    rotate(a: number, x: number, y: number): Matrix;
    scale(x: number, y?: number, cx?: number, cy?: number): void;
    split(): MatrixSplit;
    toTransformString(): Matrix;
    translate(x: number, y: number):void;
    x(x: number, y: number): number;
    y(x: number, y: number): number;
}

interface Paper {
    circle(x: number, y: number, r: number): SnapElement;
    clear(): SnapElement;
    el(name: string, attr: any): SnapElement;
    ellipse(x: number, y: number, rx: number, ry: number): SnapElement;
    filter(filstr: string): SnapElement;
    g(...e: SnapElement[]): SnapElement;
    gradient(gradient: string): SnapElement;
    group(...e: SnapElement[]): SnapElement;
    image(src: string, x: number, y: number, width: number, height: number): SnapElement;
    line(x1: number, y1: number, x2: number, y2: number): SnapElement;
    path(pathString: string): SnapElement;
    polygon(points: number[]): SnapElement;
    polygon(...points: number[]): SnapElement;
    polyline(points: number[]): SnapElement;
    polyline(...points: number[]): SnapElement;
    rect(x: number, y: number, width: number, height: number, rx?: number, ry?: number): SnapElement;
    text(x: number, y: number, text: string): SnapElement;
    text(x: number, y: number, text: string[]): SnapElement;
    toString(): string;
}

interface Set {
    //clear();
    exclude(el: SnapElement): boolean;
    forEach(callback: any, thisArg: any): any;
    pop(): SnapElement;
    push(): SnapElement;
    splice(index: number, count: number, ...insertion: SnapElement[]): any;
}

interface MinaFormat {
    id: string;
    duration: any;
    easing: any;
    speed: any;
    status: any;
    stop: any;
}

interface SnapRGBColor {
    r: number;
    g: number;
    b: number;
    hex: string;
    error?: boolean;
}

interface SnapColor {
    r: number;
    g: number;
    b: number;
    hex: string;
    error: boolean;
    h: number;
    s: number;
    v: number;
    l: number;
}

interface Filter {
    blur(x: number, y: number): string;
    brightness(amount: number): string;
    contrast(amount: number): string;
    grayscale(amount: number): string;
    hueRotate(angle: number): string;
    invert(amount: number): string;
    saturate(amount: number): string;
    sepia(amount: number): string;
    shadow(dx: number, dy: number, blur?: number, color?: string): string;
}

interface Intersection {
    x: number;
    y: number;
    t1: number;
    t2: number;
    segment1: number;
    segment2: number;
    bez1: any[];
    bez2: any[];
}

interface Path {
    bezierBBox(p1x: number, p1y: number, c1x: number, c1y: number,
        c2x: number, c2y: number, p2x: number, p2y: number): any[];
    bezierBBox(bez: number[]): any[];
    findDotsAtSegment(p1x: number, p1y: number, c1x: number, c1y: number,
        c2x: number, c2y: number, p2x: number, p2y: number, t: number): PointInformation;
    getBBox(path: string): BoundingBox;
    getPointAtLength(path: string, length: number): { x: number; y: number; alpha: number };
    getSubpath(path: string, from: number, to: number): string;
    getTotalLength(path: string): number;
    intersection(path1: string, path2: string): Intersection[];
    isBBoxIntersect(bbox1: string, bbox2: string): boolean;
    isPointInside(path: string, x: number, y: number): boolean;
    isPointInsideBBox(bbox: string, x: string, y: string): boolean;
    map(path: string, matrix: Matrix): string;
    toAbsolute(path: string): string[];
    toCubic(pathString: string): any[];
    toCubic(pathString: number): any[];
    toRelative(path: string): string[];
}

interface Snap {
    (width: number, height: number): Paper;
    (width: string, height: string): Paper;
    (DOM: SVGElement): Paper;
    (query: string): Paper;
    Matrix(a: number, b: number, c: number, d: number, e: number, f: number): Matrix;
    Matrix(svgMatrix: SVGMatrix): Matrix;
    ajax(url: string, postData: string, callback: any, scope: any): XMLHttpRequest;
    ajax(url: string, callback: any, scope: any): XMLHttpRequest;
    angle(x1: number, y1: number, x2: number, y2: number, x3?: number, y3?: number): number;
    animate(from: number, to: number, setter: any, duration: number, easing?: any, callback?: any): MinaFormat;
    animation(attr: any, duration: number, easing: any, callback: any): any;
    color(clr: string): SnapColor;
    deg(rad: number): number;
    filter: Filter;
    format(token: string, json: any): string;
    fragment(...varargs: string[]): Fragment;
    getRGB(color: string): SnapRGBColor;
    hsb(h: number, s: number, b: number): string;
    hsb2rgb(h: number, s: number, v: number): SnapRGBColor;
    hsl(h: number, s: number, l: number): string;
    hsl2rgb(h: number, s: number, l: number): SnapRGBColor;
    is(o: any, type: string): boolean;
    load(url: string, callback: any, scope?: any): void;
    parse(svg: string): Fragment;
    parsePathString(pathString: string): any[];
    parsePathString(pathString: string[]): any[];
    parseTransformString(TString: string): any[];
    path: Path;
    rad(deg: number): number;
    rgb(r: number, g: number, b: number): string;
    rgb2hsb(r: number, g: number, b: number): { h: number; s: number; b: number; };
    rgb2hsl(r: number, g: number, b: number): { h: number; s: number; l: number; };
    select(query: string): SnapElement;
    selectAll(query: string): SnapElement[];
    snapTo(values: number, value: number, tolerance?: number): number;
    snapTo(values: number[], value: number, tolerance?: number): number;
}

interface AnimationDescripter {
    id: string;
    start: number;
    end: number;
    b: number;
    s: number;
    dur: number;
    spd: number;
    get: any;
    set: any;
    easing: any;
    status: any;
    speed: any;
    duration: any;
    stop: any;
}

interface Mina {
    (a: number, A: number, b: number, B: number, get: any, set: any, easing?: any): AnimationDescripter;
    backin(n: number): number;
    backout(n: number): number;
    bounce(n: number): number;
    easein(n: number): number;
    easeinout(n: number): number;
    easeout(n: number): number;
    elastic(n: number): number;
    getById(id: string): number;
    linear(n: number): number;
    time(): Date;
}

declare var Snap: Snap;
declare var mina: Mina;
