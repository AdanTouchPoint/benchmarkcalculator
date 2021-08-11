import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/cjs/Button";
import ProgressBar from "react-bootstrap/cjs/ProgressBar";
import logo from "./logo web.png"
function App() {
    const [sendButton, setSendButton] = useState(true)
    const [backButton, setBackButton] = useState(true)
    const [nextButton, setNextButton] = useState(false)
    const [page1, setPage1] = useState(false)
    const [page2, setPage2] = useState(true)
    const [page3, setPage3] = useState(true)
    const [sector, setSector] = useState()
    const [workCenters, setWorkCenters] = useState(0)
    const [employees, setEmployees] = useState(0)
    const [RRHH, setRRHH] = useState(0)
    const [days, setDays] = useState(0)
    const [incidences, setIncidences] = useState(0)
    const [payroll, setPayroll] = useState(0)
    const [taxes, setTaxes] = useState(0)
    const [taxDeductions, setTaxDeductions] = useState(0)
    const [absences, setAbsences] = useState(0)
    const [vacations, setVacations] = useState(0)
    const [assist, setAssist] = useState(0)
    const [receipts, setReceipts] = useState(0)
    const [payments, setPayments] = useState(0)
    const [information, setInformation] = useState(0)
    const [total, setTotal] = useState(0)
    const [text, setText] = useState("")
    const [progress, setProgress] = useState()
    const [dayBarProgress,setDayBarProgress]= useState()
    const [dayBarText,setDayBarText]= useState()
    const [incidencesBarText,setIncidencesBarText] =useState()
    const [incidencesBarProgress,setIncidencesBarProgress] =useState()
    const [payRollBarText,setPayRollBarText] =useState()
    const [payRollBarProgress,setPayRollBarProgress] =useState()
    const [taxesBarText,setTaxesBarText] =useState()
    const [taxesBarProgress,setTaxesBarProgress] =useState()
    const [taxDeductionBarText,setTaxDeductionBarText] =useState()
    const [taxDeductionBarProgress,setTaxDeductionBarProgress] =useState()
    const [absencesBarText,setAbsencesBarText] =useState()
    const [absencesBarProgress,setAbsencesBarProgress] =useState()
    const [vacationsBarText,setVacationsBarText] =useState()
    const [vacationsBarProgress,setVacationsBarProgress] =useState()
    const [assistsBarText,setAssistsBarText] =useState()
    const [assistsBarProgress,setAssistsBarProgress] =useState()
    const [receiptBarText,setReceiptsBarText] =useState()
    const [receiptBarProgress,setReceiptsBarProgress] =useState()
    const [paymentsBarText,setPaymentsBarText] =useState()
    const [paymentsBarProgress,setPaymentsBarProgress] =useState()
    const [informationBarText,setInformationBarText] =useState()
    const [informationBarProgress,setInformationBarProgress] =useState()
    const [showResult,setShowResult] = useState(true)

    const handleSector = e => {
        e.preventDefault()
        setSector(
            e.target.value
        )
    }
    const handleWorkCenters = e => {
        e.preventDefault();
        setWorkCenters(parseInt(e.target.value))
    }
    const handleEmployees = e => {
        e.preventDefault();
        setEmployees(parseInt(e.target.value))
    }
    const handleRRHH = e => {
        e.preventDefault();
        setRRHH(parseInt(e.target.value))
    }
    const handleDays = e => {
        e.preventDefault();
        setDays(parseInt(e.target.value))
    }
    function daysBar(data) {
        if (data >= 4) {
            setDayBarText("altamente digital")
            setDayBarProgress("success")
        } else {
            if (data >= 3) {
                setDayBarText("arriba del promedio")
                setDayBarProgress("info")
            } else {
                if (data >= 2) {
                    setDayBarText("promedio")
                    setDayBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setDayBarText("debajo del promedio")
                        setDayBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        daysBar(days)
    },[days])

    const handleIncidences = e => {
        e.preventDefault();
        setIncidences(parseInt(e.target.value))
    }
    function incidencesBar(data) {
        if (data >= 4) {
            setIncidencesBarText("altamente digital")
            setIncidencesBarProgress("success")
        } else {
            if (data >= 3) {
                setIncidencesBarText("arriba del promedio")
                setIncidencesBarProgress("info")
            } else {
                if (data >= 2) {
                    setIncidencesBarText("promedio")
                    setIncidencesBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setIncidencesBarText("debajo del promedio")
                        setIncidencesBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        incidencesBar(incidences)
    },[incidences])

    const handlePayRoll = e => {
        e.preventDefault();
        setPayroll(parseInt(e.target.value))
    }
    function payRollBar(data) {
        if (data >= 4) {
            setPayRollBarText("altamente digital")
            setPayRollBarProgress("success")
        } else {
            if (data >= 3) {
                setPayRollBarText("arriba del promedio")
                setPayRollBarProgress("info")
            } else {
                if (data >= 2) {
                    setPayRollBarText("promedio")
                    setPayRollBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setPayRollBarText("debajo del promedio")
                        setPayRollBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        payRollBar(payroll)
    },[payroll])

    const handleTaxes = e => {
        e.preventDefault();
        setTaxes(parseInt(e.target.value))
    }
    function taxesBar (data) {
        if (data >= 4) {
            setTaxesBarText("altamente digital")
            setTaxesBarProgress("success")
        } else {
            if (data >= 3) {
                setTaxesBarText("arriba del promedio")
                setTaxesBarProgress("info")
            } else {
                if (data >= 2) {
                    setTaxesBarText("promedio")
                    setTaxesBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setTaxesBarText("debajo del promedio")
                        setTaxesBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        taxesBar(taxes)
    },[taxes])

    const handleTaxDeductions = e => {
        e.preventDefault();
        setTaxDeductions(parseInt(e.target.value))
    }
    function taxDeducitonBar(data) {
        if (data >= 4) {
            setTaxDeductionBarText("altamente digital")
            setTaxDeductionBarProgress("success")
        } else {
            if (data >= 3) {
                setTaxDeductionBarText("arriba del promedio")
                setTaxDeductionBarProgress("info")
            } else {
                if (data >= 2) {
                    setTaxDeductionBarText("promedio")
                    setTaxDeductionBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setTaxDeductionBarText("debajo del promedio")
                        setTaxDeductionBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        taxDeducitonBar(taxDeductions)
    },[taxDeductions])

    const handleAbsences = e => {
        e.preventDefault();
        setAbsences(parseInt(e.target.value))
    }
    function absencesBar(data) {
        if (data >= 4) {
            setAbsencesBarText("altamente digital")
            setAbsencesBarProgress("success")
        } else {
            if (data >= 3) {
                setAbsencesBarText("arriba del promedio")
                setAbsencesBarProgress("info")
            } else {
                if (data >= 2) {
                    setAbsencesBarText("promedio")
                    setAbsencesBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setAbsencesBarText("debajo del promedio")
                        setAbsencesBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        absencesBar(absences)
    },[absences])

    const handleVacations = e => {
        e.preventDefault();
        setVacations(parseInt(e.target.value))
    }
    function vacatiosnBar(data) {
        if (data >= 4) {
            setVacationsBarText("altamente digital")
            setVacationsBarProgress("success")
        } else {
            if (data >= 3) {
                setVacationsBarText("arriba del promedio")
                setVacationsBarProgress("info")
            } else {
                if (data >= 2) {
                    setVacationsBarText("promedio")
                    setVacationsBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setVacationsBarText("debajo del promedio")
                        setVacationsBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        vacatiosnBar(vacations)
    },[vacations])

    const handleAssists = e => {
        e.preventDefault();
        setAssist(parseInt(e.target.value))
    }
    function assistsBar(data) {
        if (data >= 4) {
            setAssistsBarText("altamente digital")
            setAssistsBarProgress("success")
        } else {
            if (data >= 3) {
                setAssistsBarText("arriba del promedio")
                setAssistsBarProgress("info")
            } else {
                if (data >= 2) {
                    setAssistsBarText("promedio")
                    setAssistsBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setAssistsBarText("debajo del promedio")
                        setAssistsBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        assistsBar(assist)
    },[assist])

    const handleReceipts = e => {
        e.preventDefault();
        setReceipts(parseInt(e.target.value))
    }
    function receiptsBar(data) {
        if (data >= 4) {
            setReceiptsBarText("altamente digital")
            setReceiptsBarProgress("success")
        } else {
            if (data >= 3) {
                setReceiptsBarText("arriba del promedio")
                setReceiptsBarProgress("info")
            } else {
                if (data >= 2) {
                    setReceiptsBarText("promedio")
                    setReceiptsBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setReceiptsBarText("debajo del promedio")
                        setReceiptsBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        receiptsBar(receipts)
    },[receipts])

    const handlePayments = e => {
        e.preventDefault();
        setPayments(parseInt(e.target.value))
    }
    function paymentsBar(data) {
        if (data >= 4) {
            setPaymentsBarText("altamente digital")
            setPaymentsBarProgress("success")
        } else {
            if (data >= 3) {
                setPaymentsBarText("arriba del promedio")
                setPaymentsBarProgress("info")
            } else {
                if (data >= 2) {
                    setPaymentsBarText("promedio")
                    setPaymentsBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setPaymentsBarText("debajo del promedio")
                        setPaymentsBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        paymentsBar(payments)
    },[payments])

    const handleInformation = e => {
        e.preventDefault();
        setInformation(parseInt(e.target.value))
    }
    function informationBar(data) {
        if (data >= 4) {
            setInformationBarText("altamente digital")
            setInformationBarProgress("success")
        } else {
            if (data >= 3) {
                setInformationBarText("arriba del promedio")
                setInformationBarProgress("info")
            } else {
                if (data >= 2) {
                    setInformationBarText("promedio")
                    setInformationBarProgress("warning")
                } else {
                    if (data >= 0) {
                        setInformationBarText("debajo del promedio")
                        setInformationBarProgress("danger")
                    }
                }
            }
        }
    }
    useEffect(()=> {
        informationBar(information)
    },[information])
// suma
    const suma = () => {
        let data = (days + incidences + payroll + taxes + taxDeductions + absences + vacations + assist + receipts + payments + information) / 11
        setShowResult(false)
        console.log(data)
        return setTotal(parseInt(data))
    }
    //function for set text and progress to progress Bar Total result
    function totals(data) {
        if (data >= 4) {
            setText("altamente digital")
            setProgress("success")
        } else {
            if (data >= 3) {
                setText("arriba del promedio")
                setProgress("info")
            } else {
                if (data >= 2) {
                    setText("promedio")
                    setProgress("warning")
                } else {
                    if (data >= 0) {
                        setText("debajo del promedio")
                        setProgress("danger")
                    }
                }
            }
        }
    }
//Effect for set total result
    useEffect(() => {
        totals(total)
        console.log(text)
    }, [total])


// Next Button
    const next = () => {
        if (page1 === false) {
            setPage1(true)
            setPage2(false)
            setBackButton(false)
        } else {
            if (page2 === false) {
                setPage2(true)
                setPage3(false)
                setNextButton(true)
                setSendButton(false)
                // setBackButton(false)
            }
        }

    }
    //BackButton
    const back = () => {
        if (page3 === false) {
            setSendButton(true)
            setNextButton(false)
            setPage3(true)
            setPage2(false)
        } else {
            if (page2 === false) {
                setPage2(true)
                setPage1(false)
                setBackButton(true)
            }
        }

    }
    // 4 = altamente digital
    // 3 = arriba del promedio
    // 2 =promedio
    // 1 = deabajo del promedio

    return (
        <div className="container">
            <div >
                <img style={{ paddingLeft:'30px', marginTop: '30px', maxHeight: '150px', maxWidth: '200px', height: '100%', width: '150px'}}
                     src={logo}/>
            </div>
            <div className= "form" style={{justifyContent: 'center'}}>
                <div style={{paddingTop: '100px'}} className="container">
                    <Form>
                        <div hidden={page1}>
                            <Form.Group className="mb-3">
                                <Form.Label>¿A que sector pertenece tu empresa? </Form.Label>
                                <Form.Control  placeholder={'Introducir su respuesta'} onChange={handleSector} name={"sector"} type="text"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>¿Cuantos centros de trabajo tienes
                                    (oficinas,plantas,sucursales)? </Form.Label>
                                <Form.Control placeholder={'Usar flechas para ingresar su respuesta'} onChange={handleWorkCenters} name={"workCenters"} type="number"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>¿Cuantos empleados tiene tu empresa de manera permanente (en
                                    nómina)? </Form.Label>
                                <Form.Control  placeholder={'Usar flechas para ingresar su respuesta'} onChange={handleEmployees} name={"employees"} type="number"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>¿Cuantas personas conforman tu area de RRRHH? Solamente personal 100%
                                    dedicado? </Form.Label>
                                <Form.Control  placeholder={'Usar flechas para ingresar su respuesta'} onChange={handleRRHH} name={"RRHH"} type="number"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>¿Cuántas personas de tu área de RRHH se involucran en la preparación de
                                    nómina? </Form.Label>
                                <Form.Control  placeholder={'Usar flechas para ingresar su respuesta'} type="number"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>¿Aproximadamente cuantos días dedicas a la preparación de nómina por
                                    quincena? </Form.Label>
                                <Form.Control  onChange={handleDays} name={"days"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Menos de un día</option>
                                    <option value={4}>Una a dos días</option>
                                    <option value={3}>4 a 5 días</option>
                                    <option value={2}>Depende, puede variar</option>
                                    <option value={1}>Maquilamos la nómina con un externo</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                            </Form.Group>
                        </div>
                        <div hidden={page2}>
                            <Form.Group className="mb-3">
                                <Form.Label>¿Cómo es tu gestión de las siguientes funciones? </Form.Label>
                                <h4>Incidencias</h4>
                                <Form.Control onChange={handleIncidences} name={"incidences"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}>Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                                <h4>Calculo y emisión de nóminas</h4>
                                <Form.Control onChange={handlePayRoll} name={"payroll"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}> Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                                <h4>Gestión de impuestos</h4>
                                <Form.Control onChange={handleTaxes} name={"taxes"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}> Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                                <h4>Deducciones </h4>
                                <Form.Control onChange={handleTaxDeductions} name={"taxDeductions"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}> Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                                <h4>Ausencias</h4>
                                <Form.Control onChange={handleAbsences} name={"absences"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}> Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                            </Form.Group>
                        </div>

                        <div hidden={page3}>
                            <Form.Group>
                                <h4>Vacaciones</h4>
                                <Form.Control onChange={handleVacations} name={"vacations"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}> Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                                <h4>Asistencia</h4>
                                <Form.Control onChange={handleAssists} name={"assist"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}> Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                                <h4>Timbrado y emisión de recibos</h4>
                                <Form.Control onChange={handleReceipts} name={"receipts"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}> Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                                <h4>Transferencia de pagos</h4>
                                <Form.Control onChange={handlePayments} name={"payments"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}> Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>¿Cuál es la forma en la que sus colaboradores consultan su información
                                    laboral?
                                    Recibos de nómina, vacaciones, record de asistencia, evaluaciones, etc </Form.Label>
                                <Form.Control onChange={handleInformation} name={"information"} as="select">
                                    <option>Selecciona una opcion...</option>
                                    <option value={5}>Plataforma centralizada</option>
                                    <option value={4}>Tenemos un sistema para esta funcion específica</option>
                                    <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                                    <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos
                                    </option>
                                    <option value={1}> Utilizamos papeletas o formularios físicos</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                    Selecciona una opcion
                                </Form.Text>
                            </Form.Group>
                        </div>
                        <Button style={{margin: '10px'}} hidden={backButton} onClick={back}>Atras</Button>
                        <Button style={{margin: '10px'}} hidden={nextButton} onClick={next}> Siguiente </Button>
                        <Button hidden={sendButton} style={{margin: '10px'}} onClick={suma}>Calcular</Button>
                    </Form>
                </div>
                <div style={{paddingTop: '30px'}} className={'container'}>
                    <div hidden={showResult}>
                        <h1>RESULTADOS</h1>
                        {/*<h4>Empresa : "Empresa"</h4>*/}
                        {/*<h4>Centros de Trabajo:"WorkCenter"</h4>*/}
                        {/*<h4>Empleados:</h4>*/}
                        {/*<h4>Personal RRHH:</h4>*/}
                        {/*<h4>Personal de RRHH para nominas: </h4>*/}
                        {/*days + incidences + payroll + taxes + taxDeductions + absences + vacations + assist + receipts + payments + information*/}
                        <h4>Dias para preparar la nomina:</h4>
                        <ProgressBar>
                            <ProgressBar label={dayBarText} striped  now={days * 25} key={1}/>
                        </ProgressBar>
                        <h4>Incidencias: </h4>
                        <ProgressBar>
                            <ProgressBar label={incidencesBarText} striped now={incidences * 25} key={1}/>
                        </ProgressBar>
                        <h4>Calculo y emisión de nóminas: </h4>
                        <ProgressBar>
                            <ProgressBar label={payRollBarText} striped  now={payroll * 25} key={1}/>
                        </ProgressBar>
                        <h4>Gestión de impuestos: </h4>
                        <ProgressBar>
                            <ProgressBar label={taxesBarText} striped  now={taxes * 25} key={1}/>
                        </ProgressBar>
                        <h4>Deducciones: </h4>
                        <ProgressBar>
                            <ProgressBar label={taxDeductionBarText} striped  now={taxDeductions * 25} key={1}/>
                        </ProgressBar>
                        <h4>Ausencias: </h4>
                        <ProgressBar>
                            <ProgressBar label={absencesBarText} striped  now={absences * 25} key={1}/>
                        </ProgressBar>
                        <h4>Vacaciones: </h4>
                        <ProgressBar>
                            <ProgressBar label={vacationsBarText} striped now={vacations * 25} key={1}/>
                        </ProgressBar>
                        <h4>Asistencia: </h4>
                        <ProgressBar>
                            <ProgressBar label={assistsBarText} striped now={assist * 25} key={1}/>
                        </ProgressBar>
                        <h4>Timbrado y emisión de recibos: </h4>
                        <ProgressBar>
                            <ProgressBar label={receiptBarText} striped now={receipts * 25} key={1}/>
                        </ProgressBar>
                        <h4>Transferencia de pagos: </h4>
                        <ProgressBar>
                            <ProgressBar label={paymentsBarText} striped  now={payments * 25} key={1}/>
                        </ProgressBar>
                        <h4>¿Cuál es la forma en la que sus colaboradores consultan su información laboral?: </h4>
                        <ProgressBar>
                            <ProgressBar label={informationBarText} striped  now={information * 25} key={1}/>
                        </ProgressBar>
                        <h2> Tu puntuación es: {total} </h2>
                        <h2> Tu Empresa es: {text}</h2>
                        <ProgressBar>
                            <ProgressBar label={text} animated striped  now={total * 25} key={1}/>
                        </ProgressBar>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
