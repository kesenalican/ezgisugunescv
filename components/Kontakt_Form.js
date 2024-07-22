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
            
            <h1 className='heading'>Bana Ulaşın</h1>

            <form className='kontakt_form' method="POST" action="https://formsubmit.co/ezgisuguness@gmail.com">
    <div className="general_info">
      <input className='blur' type="text" id='imie' name="name" placeholder="Adınız ve Soyadınız" onChange={handleInputChange} required />

      <input className='blur' type="email" id="email" name="email" placeholder="E-posta" onChange={handleInputChange} required />

      <input className='blur' type="tel" id="tel" name="phoneNumber" placeholder="Telefon Numarası" onChange={handleInputChange} required />

      <textarea className='blur' id="temat" name="description" placeholder="Mesaj İçeriği" cols="30" rows="8" onChange={handleInputChange} required />
    </div>

    <div className="submit">
      <button className='dark' type="submit" value="Send">Mesajı Gönder</button>
    </div>
  </form>

            <div className="image_kontakt_form"></div>
        </section>
    )
}

export default Kontakt_Form