import './Contact.css';

function Contact() {
  return (
    <div>
        <h1>Contato</h1>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder='Seu nome'/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='f1@gmail.com'/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols={30} rows={10} placeholder='Sua mensagem'></textarea>
            <button type="submit">Send</button>
        </form>
    

    </div>
  );
}

export default Contact;
