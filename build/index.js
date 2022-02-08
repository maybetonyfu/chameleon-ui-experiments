import React, {createContext, useContext} from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {observable, computed, action, makeObservable, autorun, runInAction} from "./_snowpack/pkg/mobx.js";
import {observer} from "./_snowpack/pkg/mobx-react-lite.js";
import dataFixture from "./data.js";
import {initializeEditor, highlight, drawAnnotations, clearDecorations} from "./editor.js";
const DataContext = createContext();
const {steps, typingTable} = dataFixture;
class EditorData {
  currentStep = 0;
  editor = initializeEditor();
  constructor() {
    makeObservable(this, {
      currentStep: observable,
      isLastStep: computed,
      isFirstStep: computed,
      nextStep: action,
      prevStep: action,
      setStep: action,
      editor: false
    });
  }
  get isLastStep() {
    return this.currentStep === 9;
  }
  get isFirstStep() {
    return this.currentStep === 0;
  }
  nextStep() {
    if (this.currentStep === 9) {
      return;
    } else {
      this.currentStep = this.currentStep + 1;
    }
  }
  prevStep() {
    if (this.currentStep === 0) {
      return;
    } else {
      this.currentStep = this.currentStep - 1;
      return;
    }
  }
  setStep(n) {
    if (n < 0 || n > 9) {
      return;
    } else {
      this.currentStep = n;
      return;
    }
  }
}
let editorData = new EditorData();
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    console.log("key up");
    runInAction(() => {
      editorData.prevStep();
    });
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    console.log("key down");
    runInAction(() => {
      editorData.nextStep();
    });
  }
});
autorun(() => {
  let editor = editorData.editor;
  let currentStep = editorData.currentStep;
  clearDecorations(editor);
  highlight(steps[currentStep].locA, steps[currentStep].locB, steps[currentStep].groupA, steps[currentStep].groupB, editor);
  drawAnnotations(steps[currentStep].locA, steps[currentStep].locB, steps[currentStep].text, editor);
});
const Message = observer(() => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-5 italic"
  }, "Chameleon cannot assign types to the following", /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 px-1 bg-gray-700 text-white rounded-md not-italic"
  }, "expressions"));
});
const Debuger = observer(function() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-4 flex flex-col",
    style: {fontFamily: "IBM Plex Sans"}
  }, /* @__PURE__ */ React.createElement(Message, null), /* @__PURE__ */ React.createElement(TypingTableInner, null));
});
const StepBar = observer(({step}) => {
  let data = useContext(DataContext);
  return /* @__PURE__ */ React.createElement("a", {
    onClick: action((_) => data.setStep(step)),
    className: "w-2 bg-gray-300 block cursor-pointer " + (data.currentStep === step ? "bg-green-500" : ""),
    style: {height: "42px"}
  });
});
const TypingTableInner = observer(() => {
  return /* @__PURE__ */ React.createElement("table", {
    className: "table-auto",
    style: {fontFamily: "JetBrains Mono"}
  }, /* @__PURE__ */ React.createElement(TableHeader, null), /* @__PURE__ */ React.createElement(TableBody, null));
});
const TableHeader = observer(() => {
  return /* @__PURE__ */ React.createElement("thead", {
    className: "leading-10 h-10 "
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null), /* @__PURE__ */ React.createElement("th", null, "TYPE"), /* @__PURE__ */ React.createElement("th", null, "EXPR"), /* @__PURE__ */ React.createElement("th", null, "TYPE")));
});
const TableRow = observer(({row}) => {
  let data = useContext(DataContext);
  return /* @__PURE__ */ React.createElement("tr", {
    className: "text-sm tracking-tighter h-10 "
  }, /* @__PURE__ */ React.createElement("td", {
    className: "py-0"
  }, row.steps.map((step) => /* @__PURE__ */ React.createElement(StepBar, {
    step,
    key: step
  }))), /* @__PURE__ */ React.createElement("td", {
    className: "text-center border-b border-gray-300",
    style: {backgroundColor: "#FFE1D5"}
  }, /* @__PURE__ */ React.createElement("span", {
    className: "px-4"
  }, row.typeA)), /* @__PURE__ */ React.createElement("td", {
    className: "text-center border-b border-gray-300"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "py-0.5 px-1 mx-2 rounded-md side" + row.sides[data.currentStep]
  }, row.expression)), /* @__PURE__ */ React.createElement("td", {
    className: "text-center border-b border-gray-300",
    style: {backgroundColor: "#D0E9F8"}
  }, /* @__PURE__ */ React.createElement("span", {
    className: "px-4"
  }, row.typeB)));
});
const TableBody = observer(() => {
  return /* @__PURE__ */ React.createElement("tbody", null, typingTable.map((row, i) => /* @__PURE__ */ React.createElement(TableRow, {
    row,
    key: i
  })));
});
ReactDOM.render(/* @__PURE__ */ React.createElement(DataContext.Provider, {
  value: editorData
}, /* @__PURE__ */ React.createElement(Debuger, null)), document.getElementById("debugger"));
