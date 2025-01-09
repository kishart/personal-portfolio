import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className='contact-form-content'> 
    <form>
            <input type="text" name='name' placeholder='Name' />
            <input type="text" name="email" placeholder='Email' />
            <textarea type="text" name="message" placeholder="Message"></textarea>
            <button>Send</button>
       
    </form>
    </div>
  )
}

export default ContactForm    