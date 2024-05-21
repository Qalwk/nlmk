import { PseudoInput } from "@nlmk/ds-2.0"
import "./Table4.css"
import Table4Comp from "./Table4Comp"
import Table2 from "./Table2"

const Table4 = () => {
  return (
    <div className="table-wrapper">
        <div>
        <p>Хим анализ чугуна со спектрометра</p>
        <div className="table-line-one">
            <PseudoInput label={"Kiwa"}>fdsgdfg</PseudoInput>
            <div className="table-line-one-rows">
                <PseudoInput label={"Si"}>1,43</PseudoInput>
                <PseudoInput label={"Mn"}>0,058</PseudoInput>
                <PseudoInput label={"S"}>0,063</PseudoInput>
                <PseudoInput label={"P"}>0,40</PseudoInput>
                <PseudoInput label={"Ti"}>0,014</PseudoInput>
                <PseudoInput label={"V"}>0,140</PseudoInput>
            </div>
        </div>
        </div>
        <div>
        <div className="table-line-two">
            <div className="table-line-two-rows">
                <PseudoInput label={"Si (смена)"}>0,97</PseudoInput>
                <PseudoInput label={"Si (сутки)"}>0,923</PseudoInput>
            </div>
            <div className="table-line-two-rows2">
            <PseudoInput label={"Вязкость шлака"}>0,923</PseudoInput>
            </div>
        </div>
        <Table4Comp/>
        <Table4Comp/>
        </div>
    </div>
  )
}

export default Table4
