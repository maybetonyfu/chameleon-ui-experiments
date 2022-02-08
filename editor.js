import code from './code'


export function initializeEditor() {
    let editor = CodeMirror(document.getElementById('editor'), {
        lineNumbers: false,
        mode: null,
        value: code,
    });
    editor.setSize(null, '100%')
    return editor
}


export function clearDecorations(editor) {
    if (editor.getAllMarks().length) {
        editor.getAllMarks().forEach(m => m.clear())
    }
    ['widgetTop', 'widgeBottom', 'widgetInbetween', 'widgetAnnotation'].forEach(elemId => {
        let elem = document.getElementById(elemId);
        if (elem) elem.parentNode.removeChild(elem);
    })
}

export function highlight(locA, locB, groupA, groupB, editor) {
    groupA.forEach(hl => editor.markText(hl.from, hl.to, { className: "groupMarkerA", startStyle: 'outline-start', endStyle: 'outline-end' }))
    groupB.forEach(hl => editor.markText(hl.from, hl.to, { className: "groupMarkerB", startStyle: 'outline-start', endStyle: 'outline-end' }))
    editor.markText(locA.from, locA.to, { className: "markerA", startStyle: 'outline-start', endStyle: 'outline-end' })
    editor.markText(locB.from, locB.to, { className: "markerB", startStyle: 'outline-start', endStyle: 'outline-end' })
}


export function drawAnnotations(locA, locB, text, editor) {
    if (locB.from.line < locA.from.line) {
        // B
        //   A
        const topElem = document.getElementsByClassName('markerB')[0].getBoundingClientRect();
        const bottomElem = document.getElementsByClassName('markerA')[0].getBoundingClientRect();
        const [topBox, bottomBox, inbetweenBox, annotationBox] = boxStyles(topElem, bottomElem, text)
        editor.addWidget(locA.from, bottomBox)
        editor.addWidget(locA.from, annotationBox)
        editor.addWidget(locB.from, inbetweenBox)
        editor.addWidget(locB.from, topBox)

    }
    else {
        // A
        //   B
        const topElem = document.getElementsByClassName('markerA')[0].getBoundingClientRect();
        const bottomElem = document.getElementsByClassName('markerB')[0].getBoundingClientRect();
        const [topBox, bottomBox, inbetweenBox, annotationBox] = boxStyles(topElem, bottomElem, text, false)
        editor.addWidget(locA.from, topBox)
        editor.addWidget(locA.from, inbetweenBox)
        editor.addWidget(locB.from, bottomBox)
        editor.addWidget(locB.from, annotationBox)

    }
}


function boxStyles(topElem, bottomElem, text, color = false) {
    const downwardBarHeight = 5;
    const annotationWidth = 200;
    const annotationHeight = 20;
    const stepAsideDistance = 700;
    const styleTop = [
        color ? `background: aquamarine;` : '',
        `height: ${downwardBarHeight}px;`,
        `margin-left: ${topElem.width / 2}px;`,
        `width: ${stepAsideDistance - topElem.left - (topElem.width / 2)}px;`,
        `border-left: thin solid #0083FF;`,
        `border-bottom: thin solid #0083FF;`,
    ].join('')
    const styleBottom = [
        color ? `background: lightpink;` : '',
        `height: ${downwardBarHeight}px;`,
        `margin-left: ${bottomElem.width / 2}px;`,
        `width:${stepAsideDistance - bottomElem.left - (bottomElem.width / 2)}px;`,
        `border-left: thin solid #0083FF;`,
        `border-bottom: thin solid #0083FF;`,
        `border-right: thin solid #0083FF;`,
    ].join('')
    const styleInbetween = [
        color ? `background: burlywood;` : '',
        `width:${stepAsideDistance - topElem.left - (topElem.width / 2)}px;`,
        `height: ${bottomElem.bottom - topElem.bottom - annotationHeight - downwardBarHeight}px;`,
        `margin-top: ${downwardBarHeight}px;`,
        `margin-left: ${topElem.width / 2}px;`,
        `border-right: thin solid #0083FF;`,
    ].join('')
    const styleAnnotation = [
        color ? `background: lightgreen;` : '',
        // `background: beige;`,
        `width:${annotationWidth}px;`,
        `height: ${annotationHeight}px;`,
        `font-size: 14px;`,
        `margin-top: -${annotationHeight}px;`,
        `margin-left: ${stepAsideDistance - bottomElem.left - annotationWidth / 2}px;`,
        // `border: thin solid red;`
    ].join('')
    const topBox = html(`<div id="widgetTop" style="${styleTop}"></div>`)
    const bottomBox = html(`<div id="widgeBottom" style="${styleBottom}"></div>`)
    const inbetweenBox = html(`<div id="widgetInbetween" style="${styleInbetween}"></div>`)
    const annotationBox = html(`<div id="widgetAnnotation"  style="${styleAnnotation}">${text}</div>`)
    return [topBox, bottomBox, inbetweenBox, annotationBox]

}


function html(str) {
    const placeholder = document.createElement('div');
    placeholder.innerHTML = str;
    return placeholder.firstElementChild
}