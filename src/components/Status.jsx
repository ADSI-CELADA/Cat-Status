import { Select, SelectItem } from "@nextui-org/react";
import { dataStatus100, dataStatus200, dataStatus300, dataStatus400, dataStatus500 } from "../data/dataStatus";
import { NumStates } from "../hooks/NumStates";
import { ImageStatus } from "./ImageStatus";

export const Status = () => {

    const { numberState, setNumberState } = NumStates();

    

    const setState = (n, description) => {
        setNumberState({value : n, description})
    }



    return (
        <>
            <div className="grid grid-cols-3 text-center gap-10">
                <div className="w-full">
                    <Select label="Selecciona numero de estado" className="max-w-xs " color="primary" variant="flat">
                        {
                            dataStatus100.map((num) => (
                                <SelectItem key={num.value} value={num.value} color="primary" variant="flat" onClick={() => setState(num.value, num.description)}>
                                    {num.label}
                                </SelectItem>
                            ))
                        }
                    </Select>
                </div>

                <div className="w-full">
                    <Select label="Selecciona numero de estado" className="max-w-xs" color="secondary" variant="flat">
                        {
                            dataStatus200.map((num) => (
                                <SelectItem key={num.value} value={num.value} color="secondary" variant="flat" onClick={() => setState(num.value, num.description)}>
                                    {num.label}
                                </SelectItem>
                            ))
                        }
                    </Select>
                </div>

                <div className="w-full">
                    <Select label="Selecciona numero de estado" className="max-w-xs" color="success" variant="flat">
                        {
                            dataStatus300.map((num) => (
                                <SelectItem key={num.value} value={num.value} color="success" variant="flat" onClick={() => setState(num.value, num.description)}>
                                    {num.label}
                                </SelectItem>
                            ))
                        }
                    </Select>
                </div>

                <div className="w-full">
                    <Select label="Selecciona numero de estado" className="max-w-xs" color="warning" variant="flat">
                        {
                            dataStatus400.map((num) => (
                                <SelectItem key={num.value} value={num.value} color="warning" variant="flat" onClick={() => setState(num.value, num.description)}>
                                    {num.label}
                                </SelectItem>
                            ))
                        }
                    </Select>
                </div>

                <div className="w-full">
                    <Select label="Selecciona numero de estado" className="max-w-xs" color="danger" variant="flat">
                        {
                            dataStatus500.map((num) => (
                                <SelectItem key={num.value} value={num.value} color="danger" variant="flat" onClick={() => setState(num.value, num.description)}>
                                    {num.label}
                                </SelectItem>
                            ))
                        }
                    </Select>
                </div>
            </div>

            <div className="flex justify-start">
                <div className="p-6">
                    <ImageStatus numberState={numberState}/>
                </div>
            </div>
        </>
    )
}
