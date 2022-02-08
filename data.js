const step1 = {
    tableRow: 0,
    locA: { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
    locB: { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
    groupA: [
        { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
        { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
        { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
        { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
        { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
        { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
        { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
        { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
        { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
    ],
    groupB: [],
    text: `
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>
    is defined at 
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>`
}

const step2 = {
    tableRow: 1,
    locA: { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
    locB: { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
    groupA: [
        { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
        { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
        { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
        { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
        { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
        { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
        { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
        { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
    ],
    groupB: [
        { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
    ],
    text: `
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>
    is bound at 
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>
    `
}


const step3 = {
    tableRow: 1,
    locA: { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
    locB: { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
    groupA: [
        { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
        { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
        { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
        { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
        { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
        { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
        { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
    ],
    groupB: [
        { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
        { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
    ],
    text: `
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>
    is identical to
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>`
}

const step4 = {
    tableRow: 2,
    locA: { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
    locB: { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
    groupA: [
        { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
        { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
        { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
        { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
        { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
        { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
    ],
    groupB: [
        { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
        { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
        { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
    ],
    text: `
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>
    is applied to
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>
    `
}

const step5 = {
    tableRow: 2,
    locA: { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
    locB: { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
    groupA: [
        { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
        { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
        { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
        { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
        { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
    ],
    groupB: [
        { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
        { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
        { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
        { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
    ],
    text: `
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>
    is defined at
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>`
}

const step6 = {
    tableRow: 3,
    locA: { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
    locB: { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
    groupA: [
        { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
        { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
        { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
        { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
    ],
    groupB: [
        { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
        { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
        { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
        { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
        { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
    ],
    text: `
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>
    is bound at
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>
    `
}

const step7 = {
    tableRow: 3,
    locA: { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
    locB: { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
    groupA: [
        { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
        { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
        { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
    ],
    groupB: [
        { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
        { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
        { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
        { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
        { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
        { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
    ],
    text: `
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>
    is identical to
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>`
}

const step8 = {
    tableRow: 4,
    locA: { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
    locB: { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
    groupA: [
        { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
        { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
    ],
    groupB: [
        { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
        { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
        { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
        { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
        { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
        { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
        { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
    ],
    text: `
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>
    is applied to
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>
    `
}

const step9 = {
    tableRow: 4,
    locA: { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
    locB: { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
    groupA: [
        { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
    ],
    groupB: [
        { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
        { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
        { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
        { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
        { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
        { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
        { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
        { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
    ],
    text: `
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>
    is defined at
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>`
}

const step10 = {
    tableRow: 4,
    locA: { from: { line: 19, ch: 14 }, to: { line: 19, ch: 40 } },
    locB: { from: { line: 19, ch: 0 }, to: { line: 19, ch: 10 } },
    groupA: [
    ],
    groupB: [
        { from: { line: 7, ch: 4 }, to: { line: 7, ch: 10 } },
        { from: { line: 17, ch: 14 }, to: { line: 17, ch: 20 } },
        { from: { line: 17, ch: 21 }, to: { line: 17, ch: 22 } },
        { from: { line: 17, ch: 45 }, to: { line: 17, ch: 46 } },
        { from: { line: 17, ch: 33 }, to: { line: 17, ch: 44 } },
        { from: { line: 24, ch: 0 }, to: { line: 24, ch: 11 } },
        { from: { line: 24, ch: 13 }, to: { line: 24, ch: 14 } },
        { from: { line: 24, ch: 32 }, to: { line: 24, ch: 33 } },
        { from: { line: 24, ch: 21 }, to: { line: 24, ch: 31 } },
    ],
    text: `
    <span class="markerB inline-block w-3 h-3 rounded-sm"></span>
    is annotated to be
    <span class="markerA inline-block w-3 h-3 rounded-sm"></span>
    `
}

const typingTable = [
    {
        expression: "JArray",
        typeA: "[JValue] -> JValue",
        typeB: "[(String, JValue)] -> JValue",
        steps: [0],
        sides: ['AB', 'A', 'A','A', 'A','A', 'A','A', 'A', 'A']
    },
    {
        expression: "a",
        typeB: "[(String, JValue)]",
        typeA: "[JValue]",
        steps: [1, 2],
        sides: ['B', 'B', 'AB','A', 'A','A', 'A','A', 'A', 'A']


    },
    {
        expression: "renderPairs",
        typeB: "[(String, JValue)] -> String",
        typeA: "[JValue] -> String",
        steps: [3, 4],
        sides: ['B', 'B', 'B','B', 'AB','A', 'A','A', 'A', 'A']


    },
    {
        expression: "p",
        typeB: "(String, JValue)",
        typeA: "JValue",
        steps: [5, 6],
        sides: ['B', 'B', 'B','B', 'B','B', 'AB','A', 'A', 'A']
    },
    {
        expression: "renderPair",
        typeB: "(String, JValue) -> String",
        typeA: "[JValue] -> String",
        steps: [7, 8, 9],
        sides: ['B', 'B', 'B','B', 'B','B', 'B','B', 'AB', 'A']

    },
]



export default {
    steps: [step1, step2, step3, step4, step5, step6, step7, step8, step9, step10],
    typingTable,
}