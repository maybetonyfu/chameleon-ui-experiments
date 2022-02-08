import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import { observable, computed, action, makeObservable, autorun, runInAction } from "mobx"
import { observer } from 'mobx-react-lite'
import dataFixture from "./data"
import { initializeEditor, highlight, drawAnnotations, clearDecorations } from "./editor"

const DataContext = createContext()
const { steps, typingTable } = dataFixture;

class EditorData {
    currentStep = 0
    editor = initializeEditor()
    constructor() {
        makeObservable(
            this,
            {
                currentStep: observable,
                isLastStep: computed,
                isFirstStep: computed,
                nextStep: action,
                prevStep: action,
                setStep: action,
                editor: false,
            })
    }

    get isLastStep() {
        return this.currentStep === 9
    }
    get isFirstStep() {
        return this.currentStep === 0
    }
    nextStep() {
        if (this.currentStep === 9) {
            return
        } else {
            this.currentStep = this.currentStep + 1
        }
    }
    prevStep() {
        if (this.currentStep === 0) {
            return
        } else {
            this.currentStep = this.currentStep - 1
            return
        }
    }
    setStep(n) {
        if (n < 0 || n > 9) {
            return
        } else {
            this.currentStep = n
            return
        }
    }
}

let editorData = new EditorData();
window.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
        e.preventDefault()
        console.log('key up')
        runInAction(() => {
            editorData.prevStep()
        })
    } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        console.log('key down')
        runInAction(() => {
            editorData.nextStep()
        })
    }
})
autorun(() => {
    let editor = editorData.editor;
    let currentStep = editorData.currentStep;
    clearDecorations(editor)
    highlight(
        steps[currentStep].locA,
        steps[currentStep].locB,
        steps[currentStep].groupA,
        steps[currentStep].groupB,
        editor);
    drawAnnotations(steps[currentStep].locA, steps[currentStep].locB, steps[currentStep].text, editor);

})

const Debuger = observer(() => {
    return <div className="p-4 flex flex-col" style={{ fontFamily: 'IBM Plex Sans' }}>
        <Message></Message>
        <TypingTable></TypingTable>
    </div>
})

const Message = observer(() => {
    return <div className="mb-5 italic">
        Chameleon cannot assign types to the following
        <span className="ml-2 px-1 bg-gray-700 text-white rounded-md not-italic">expressions</span>
    </div>
})

const TypingTable = observer(() => {
    return <table className='table-auto' style={{ fontFamily: 'JetBrains Mono' }}>
        <TableHeader></TableHeader>
        <TableBody></TableBody>
    </table>
})

const TableHeader = observer(() => {
    return <thead className="leading-10 h-10 ">
        <tr>
            <th></th>
            <th>TYPE</th>
            <th>EXPR</th>
            <th>TYPE</th>
        </tr>
    </thead>
})

const TableBody = observer(() => {
    return <tbody>
        {typingTable.map((row, i) => <TableRow row={row} key={i}></TableRow>)}
    </tbody>

})

const TableRow = observer(({ row }) => {
    let data = useContext(DataContext)
    return <tr className="text-sm tracking-tighter h-10 ">
        <td className='py-0'>
            {row.steps.map(step => <StepBar step={step} key={step}></StepBar>)}
        </td>
        <td className="text-center border-b border-gray-300" style={{ backgroundColor: '#FFE1D5' }}>
            <span className='px-4'>{row.typeA}</span>

        </td>
        <td className="text-center border-b border-gray-300">
            <span
                className={"py-0.5 px-1 mx-2 rounded-md side" + (row.sides[data.currentStep])}>{row.expression}</span>
        </td>
        <td className="text-center border-b border-gray-300" style={{ backgroundColor: '#D0E9F8' }}>
            <span className='px-4'>{row.typeB}</span>
        </td>
    </tr>
})

const StepBar = observer(({ step }) => {
    let data = useContext(DataContext)
    return <a
        onClick={action(_ => data.setStep(step))}
        className={"w-2 bg-gray-300 block cursor-pointer " + (data.currentStep === step ? 'bg-green-500' : '')}
        style={{ height: "42px" }}>
    </a>
})

ReactDOM.render(<DataContext.Provider value={editorData}><Debuger></Debuger></DataContext.Provider>, document.getElementById('debugger'));