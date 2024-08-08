import React, {useState} from 'react'
import Link from 'next/link'

const Umow_Wizyte = () => {
    

    const dialNumber = () => {
        window.location.href = "tel:+48530023204"
    }

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
        <section id='umow_wizyte'>

            <h1 className="heading">Randevu Al</h1>

            <div className="umow_wizyte_1">
                <h3>Herhangi bir sorunuz veya şüpheniz varsa beni arayın veya yazın.</h3>
                <p>Aşağıdaki takvimi kullanarak telefonla veya online randevu alabilirsiniz.</p>
            </div>

            <div className="umow_wizyte_2">
                <h3>E-mail:</h3>
                <p>  <Link href="mailto:ezgisuguness@gmail.com">ezgisuguness@gmail.com</Link></p><br />
                <h3>Telefon:</h3>
                <p onClick={dialNumber}>0541 913 86 14</p>
            </div>

            <div className="umow_wizyte_3">
  <h3>Randevu Formu</h3>
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
</div>

        </section>
    )
}

export default Umow_Wizyte