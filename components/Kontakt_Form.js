import React, {useState} from 'react'

const Kontakt_Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        service: '',
        description: '',
        budget: '',
        timeHorizon: '',
        payment: '',
    })

    const handleInputChange = async (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="kontakt_form">
            
            <h1 className='heading'>Napisz do mnie</h1>

            <form className='kontakt_form' method="POST" action="https://formsubmit.co/paulina.janik.gabinet@gmail.com">
                <div className="general_info">
                    <input className='blur' type="text" id='imie' name="name" placeholder="Twoje imię i nazwisko" onChange={handleInputChange} required />

                    <input className='blur' type="email" id="email" name="email" placeholder="Email" onChange={handleInputChange} required />

                    <input className='blur' type="tel" id="tel" name="phoneNumber" placeholder="Numer telefonu" onChange={handleInputChange} required />

                    <textarea className='blur' id="temat" name="description" placeholder="Treść wiadomości" cols="30" rows="8"onChange={handleInputChange} required />
                </div>

                <div className="submit">
                    <button className='dark' type="submit" value="Send">Wyślij wiadomość</button>
                </div>
            </form>

            <div className="image_kontakt_form"></div>
        </section>
    )
}

export default Kontakt_Form