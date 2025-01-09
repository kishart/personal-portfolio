
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import './ContactMe.css'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
    <div className="contact-content">
        <div style={{flex:1}}>
        <ContactInfoCard
            iconUrl='https://img.icons8.com/ios/452/phone.png'
            text='+91 9876543210'
        />
         <ContactInfoCard
            iconUrl='https://img.icons8.com/ios/452/phone.png'
            text='+91 9876543210'
        />
         <ContactInfoCard
            iconUrl='https://img.icons8.com/ios/452/phone.png'
            text='+91 9876543210'
        />
        </div>
        <div style={{flex:1}}>
            <ContactForm />
        </div>

    </div>
    </section>
  )
}

export default ContactMe