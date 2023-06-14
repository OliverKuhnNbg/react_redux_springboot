import React, {useState} from 'react'

function EventBookingForm() {

    /** form fields definitions */
    const [eventType, setEventType] = useState('');
    const [notes, setNotes] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [carrierService, setCarrierService] = useState('');
    const [supplier, setSupplier] = useState('');
    const [truckClassification, setTruckClassification] = useState('');
    const [truckPlateId, setTruckPlateId] = useState('');

    return (
        <div className='col-12'>
            <h2>Event erstellen</h2>

            <form className='g-3 needs-validation' noValidate>
                <div className='row mb-3'>
                    <div className='d-flex'>
                        <label for='validationCustom04' className='form-label col-2 text-end pe-4'>Eventtyp </label>
                        <select className='form-select' id='validationCustom04' required
                            onChange={(e) => {
                                setEventType(e.target.value);
                            }}
                        >
                            <option selected disabled value=''>Bitte wählen Sie einen Auftragstyp...</option>
                            <option value='Manueller Auftrag'>Manueller Auftrag</option>
                            <option value='Auftrag'>Auftrag</option>
                        </select>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='d-flex'>
                        <label className='form-label col-2 text-end pe-4'>Notizen bitte hier eintragen</label>
                        <textarea className='form-control' rows='3'
                            name='notes'
                            value={notes}
                            onChange={(e) => {
                                setNotes(e.target.value);
                            }}
                            placeholder='Notizen bitte hier eintragen'
                            required
                        ></textarea>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='d-flex'>
                        <label className='form-label col-2 text-end pe-4'>Auftragsnummern</label>
                        <textarea className='form-control' rows='3'
                            name='orderNumber'
                            value={orderNumber}
                            onChange={(e) => {
                                setOrderNumber(e.target.value);
                            }}
                            placeholder='Notizen bitte hier eintragen'
                            required
                        ></textarea>
                    </div>
                    <div className='form-text offset-2 col-10'>Nummern durch Komma getrennt eintragen.</div>
                </div>

                <div className='row mb-3'>
                    <div className='d-flex'>
                        <label for='validationCustom04' className='form-label col-2 text-end pe-4'>Spedition</label>
                        <select className='form-select' id='validationCustom04' required
                            onChange={(e) => {
                                setCarrierService(e.target.value);
                            }}
                        >
                            <option selected disabled value=''>Bitte wählen Sie eine Spedition...</option>
                            <option value='DHL'>DHL</option>
                            <option value='Hermes'>Hermes</option>
                        </select>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='d-flex'>
                        <label className='form-label col-2 text-end pe-4'>Kunde</label>
                        <select className='form-select' required
                            onChange={(e) => {
                                setSupplier(e.target.value);
                            }}
                        >
                            <option selected disabled value=''>Wählen Sie einen Kunden...</option>
                            <option value='Ancud It GmbH'>Ancud It GmbH</option>
                            <option value='GetBottels GmbH'>GetBottels GmbH</option>
                        </select>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='d-flex'>
                        <label className='form-label col-2 text-end pe-4'>LKW Klasse</label>
                        <select className='form-select' required
                            onChange={(e) => {
                                setTruckClassification(e.target.value);
                            }}
                        >
                            <option selected disabled value=''>Wählen Sie eine LKW-Klasse...</option>
                            <option value='C'>C</option>
                            <option value='CE'>CE</option>
                            <option value='C1'>C1</option>
                            <option value='C1E'>C1E</option>
                        </select>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='d-flex'>
                        <label className='form-label col-2 text-end pe-4'>LKW Kennzeichen</label>
                        <input className='form-control'
                            type='text'
                            name='truckId'
                            value={truckPlateId}
                            onChange={(e) => {
                                setTruckPlateId(e.target.value);
                            }}
                            placeholder='LKW Kennzeichen hier eintragen'
                            required
                        />
                    </div>
                </div>

                

            </form>

            <h3 className='mt-5 mb-3'>Ihre bisher gemachten Eingaben</h3>
            <div className=''></div>
            <p>{eventType}</p>
            <p>{notes}</p>
            <p>{orderNumber}</p>
            <p>{carrierService}</p>
            <p>{supplier}</p>
            <p>{truckClassification}</p>
            <p>{truckPlateId}</p>
        </div>
    )
}

export default EventBookingForm