export interface Pattern {
    [key: string]: any;
}

export const variableMapping: { [key: string]: number } = {
    // patterns
    patternName: 0,
    linkColors: 1,
    color: 2,
    secondaryColor: 3,
    sparkleColor: 4,
    flashColor: 5,
    patternSpeed: 6,
    patternDuration: 7,
    colorCycleSpeed: 8,
    synchronized: 9,
    disabled: 14,
    duration: 15,


    // sparkleColor
    on: 10,
    speed: 11,
    intensity: 12,

    // flashColor
    dutyCycle: 13,

    // general
    true: 1,
    false: 0,
}

function getDefaultSmallPattern(name: string, id: number, patternName: string) {
    return {
        id: id,
        name: name,
        displayName: name,
        patternName: patternName,
        disabled: false,
        sparkleColor: {
            name: "Sparkle Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ]
        },
        flashColor: {
            name: "Flash Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ],
        },
        [aliases.patternSpeed]: 1,
        [aliases.patternDuration]: 10,
        [aliases.synchronized]: aliases.true
    }
}


function getDefaultPattern(patternName: string) {
    return {
        id: id,
        name: name,
        displayName: name,
        patternName: patternName,
        disabled: false,
        linkColors: true,
        color: {
            name: "Color",
            linkColors: true,
            color: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ]
        },
        sparkleColor: {
            name: "Sparkle Color",
            on: false,
            speed: 0,
            intensity: 0,
            linkColors: true,
            color: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ],
        },
        flashColor: {
            name: "Flash Color",
            on: false,
            speed: 0,
            dutyCycle: 0,
            linkColors: true,
            color: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ],
        },
        [aliases.patternSpeed]: 1,
        [aliases.colorCycleSpeed]: 1,
        [aliases.patternDuration]: 10,
        [aliases.synchronized]: aliases.true
    }
}

function  getDefaultLargePattern(patternName: string) {
    return {
        id: id,
        name: name,
        displayName: name,
        patternName: patternName,
        disabled: false,
        color: {
            name: "Color",
            linkColors: true,
            color: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ]
        },
        sparkleColor: {
            name: "Sparkle Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ],
        },
        flashColor: {
            name: "Flash Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ],
        },
        patternSpeed: 0,
        colorCycleSpeed: 5,
        secondaryColor: {
            name: "Secondary Color",
            on: false,
            speed: 0,
            duration: 0,
            linkColors: true,
            color: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ],
        },
        [aliases.patternSpeed]: 1,
        [aliases.colorCycleSpeed]: 1,
        [aliases.patternDuration]: 10,
        [aliases.synchronized]: aliases.true
    }
}

export const patterns = {
    "Solid Color": getDefaultPattern("solidColor"),
    "Pulsing Color": getDefaultPattern("pulsingColor"),
    "Spirals": getDefaultLargePattern("spirals"),
    "Stripes": getDefaultLargePattern("stripes"),
    "Multipole": getDefaultLargePattern("multipole"),
    "Confetti": getDefaultLargePattern("confetti"),
    "Linear Rainbow": getDefaultSmallPattern("linearRainbow"),
    "Vertical Rainbow": getDefaultSmallPattern("verticalRainbow"),
    "Vertical Wave": getDefaultLargePattern("verticalWave"),
    "Torch": getDefaultLargePattern("torch"),
    "BPM": getDefaultSmallPattern("bpm"),
    "Juggle": getDefaultSmallPattern("juggle"),
}
