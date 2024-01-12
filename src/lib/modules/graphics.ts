export function generateDotPattern(
    diameter: number,
    spacing: number,
    color: string,
    width: number,
    height: number,
    offsetEvenLines: number  // Additional parameter for offsetting odd lines
): SVGSVGElement {
    // Calculate the number of dots that can fit in the width and height
    const dotsAcross = Math.floor(width / (diameter + spacing - 2));
    const dotsDown = Math.floor(height / (diameter + spacing - 1));

    // Create an SVG element
    const svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElem.setAttribute("width", width.toString());
    svgElem.setAttribute("height", height.toString());

    // Loop to create the dots
    for (let y = 0; y < dotsDown; y++) {
        for (let x = 0; x < dotsAcross; x++) {
            // Adjust posX for odd lines by the offset value
            const isEvenLine = y % 2 === 1;
            const posX = x * (diameter + spacing) + diameter / 2 + (isEvenLine ? offsetEvenLines : 0);
            const posY = y * (diameter + spacing) + diameter / 2;
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", posX.toString());
            circle.setAttribute("cy", posY.toString());
            circle.setAttribute("r", (diameter / 2).toString());
            circle.setAttribute("fill", color);
            svgElem.appendChild(circle);
        }
    }

    return svgElem;
}

function removeAllChildren(element: HTMLElement) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export function appendDotPattern(
    target: HTMLElement,
    svgElem: SVGSVGElement
): void {
    removeAllChildren(target);
    target.appendChild(svgElem);
}