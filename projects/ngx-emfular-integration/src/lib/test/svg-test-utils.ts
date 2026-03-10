export function createTestSvg(): SVGSVGElement {
    return document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;
}
