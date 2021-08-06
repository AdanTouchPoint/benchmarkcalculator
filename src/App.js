import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/cjs/Button";

function App() {
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
    const [text,setText]=useState("")

    const handleSector = e => {
        e.preventDefault()
        setSector(
            e.target.value
        )
    }
    useEffect(() => {
        console.log(sector)
    }, [sector])

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
    const handleIncidences = e => {
        e.preventDefault();
        setIncidences(parseInt(e.target.value))
    }
    const handlePayRoll = e => {
        e.preventDefault();
        setPayroll(parseInt(e.target.value))
    }
    const handleTaxes = e => {
        e.preventDefault();
        setTaxes(parseInt(e.target.value))
    }
    const handleTaxDeductions = e => {
        e.preventDefault();
        setTaxDeductions(parseInt(e.target.value))
    }
    const handleAbsences = e => {
        e.preventDefault();
        setAbsences(parseInt(e.target.value))
    }
    const handleVacations = e => {
        e.preventDefault();
        setVacations(parseInt(e.target.value))
    }
    const handleAssists = e => {
        e.preventDefault();
        setAssist(parseInt(e.target.value))
    }
    const handleReceipts = e => {
        e.preventDefault();
        setReceipts(parseInt(e.target.value))
    }
    const handlePayments = e => {
        e.preventDefault();
        setPayments(parseInt(e.target.value))
    }
    const handleInformation = e => {
        e.preventDefault();
        setInformation(parseInt(e.target.value))
    }

    const suma = () => {
        let data =  (days + incidences + payroll + taxes + taxDeductions + absences + vacations + assist + receipts + payments + information) / 10
        console.log(data)
     return setTotal(parseInt(data))
    }
    function totals(data) {
        if (data >= 4) {
            setText ( "altamente digital")
        } else {
            if (data >= 3) {
                setText("arriba del promedio")
            } else {
                if (data >= 2) {
                   setText("promedio")
                } else {
                    if (data >= 0) {
                        setText("debajo del promedio")
                    }
                }
            }
        }
    }
useEffect(() => {
    totals(total)
    console.log(text)
},[total])

    // 4 = altamente digital
    // 3 = arriba del promedio
    // 2 =promedio
    // 1 = deabajo del promedio

    return (
        <div className="container" style={{display: 'flex'}}>
            <div style={{paddingTop: '30px'}} className="container">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>¿A que sector pertenece tu empresa? </Form.Label>
                        <Form.Control onChange={handleSector} name={"sector"} type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>¿Cuantos centros de trabajo tienes (oficinas,plantas,sucursales)? </Form.Label>
                        <Form.Control onChange={handleWorkCenters} name={"workCenters"} type="number"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>¿Cuantos empleados tiene tu empresa de manera permanente (en nómina)? </Form.Label>
                        <Form.Control onChange={handleEmployees} name={"employees"} type="number"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>¿Cuantas personas conforman tu area de RRRHH? Solamente personal 100%
                            dedicado? </Form.Label>
                        <Form.Control onChange={handleRRHH} name={"RRHH"} type="number"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>¿Cuántas personas de tu área de RRHH se involucran en la preparación de
                            nómina? </Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>¿Aproximadamente cuantos días dedicas a la preparación de nómina por
                            quincena? </Form.Label>
                        <Form.Control onChange={handleDays} name={"days"} as="select">
                            <option >Selecciona una opcion...</option>
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
                    <Form.Group className="mb-3">
                        <Form.Label>¿Cómo es tu gestión de las siguientes funciones? </Form.Label>
                        <h4>Incidencias</h4>
                        <Form.Control onChange={handleIncidences} name={"incidences"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}>Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                        <h4>Calculo y emisión de nóminas</h4>
                        <Form.Control onChange={handlePayRoll} name={"payroll"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}> Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                        <h4>Gestión de impuestos</h4>
                        <Form.Control onChange={handleTaxes} name={"taxes"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}> Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                        <h4>Deducciones </h4>
                        <Form.Control onChange={handleTaxDeductions} name={"taxDeductions"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}> Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                        <h4>Ausencias</h4>
                        <Form.Control onChange={handleAbsences} name={"absences"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}> Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                        <h4>Vacaciones</h4>
                        <Form.Control onChange={handleVacations} name={"vacations"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}> Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                        <h4>Asistencia</h4>
                        <Form.Control onChange={handleAssists} name={"assist"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}> Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                        <h4>Timbrado y emisión de recibos</h4>
                        <Form.Control onChange={handleReceipts} name={"receipts"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}> Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                        <h4>Transferencia de pagos</h4>
                        <Form.Control onChange={handlePayments} name={"payments"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}> Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>¿Cuál es la forma en la que sus colaboradores consultan su información laboral?
                            Recibos de nómina, vacaciones, record de asistencia, evaluaciones, etc </Form.Label>
                        <Form.Control onChange={handleInformation} name={"information"} as="select">
                            <option >Selecciona una opcion...</option>
                            <option value={5}>Plataforma centralizada</option>
                            <option value={4}>Tenemos un sistema para esta funcion específica</option>
                            <option value={3}>Cada responsable lleva sus records en hoja de cálculo</option>
                            <option value={2}>Utilizamos correo electrónico para enviar y recibir documentos</option>
                            <option value={1}> Utilizamos papeletas o formularios físicos</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Selecciona una opcion
                        </Form.Text>
                    </Form.Group>
                    <Button onClick={suma}>Calcular</Button>
                </Form>
            </div>
            <div style={{paddingTop: '30px'}} className={'container'}>
                <h1>RESULTS</h1>
                Tu Empresa es: {text}

            </div>
        </div>
    );
}

export default App;
