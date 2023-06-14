import React, { useState } from 'react'

function CalendarEventsForm() {

    /** form fields defs */
    const [notes, setNotes] = useState('');
    const [task, setTask] = useState('');

    return (
        <div>
            <h2>Event erstellen</h2>
            <form className="g-3 needs-validation" noValidate>
                <div className='row mb-3'>
                    <div className='d-flex'>
                    <label for="validationCustom04" className="form-label col-2 text-end pe-4">Eventtyp</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Manueller Auftrag</option>
                            <option>Auftrag</option>
                        </select>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='d-flex'>
                        <label class="form-label col-2 text-end pe-4">Notizen bitte hier eintragen</label>
                        <textarea class="form-control" rows="3"
                            name="title"
                            value={notes}
                            onChange={(e) => {
                                console.log(e);
                                setNotes(e.target.value);
                            }}
                            placeholder="Notizen bitte hier eintragen"
                            required
                        ></textarea>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='d-flex'>
                        <label class="form-label col-2 text-end pe-4">Auftragsnummern</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <div id="emailHelp" class="form-text offset-2 col-12">Nummern werden mit Komma getrennt eintragen.</div>
                </div>

                <div className='row mb-3'>
                    <div className='d-flex'>
                    <label for="validationCustom04" className="form-label col-2 text-end pe-4">Spedition</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>DHL</option>
                            <option>Hermes</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CalendarEventsForm