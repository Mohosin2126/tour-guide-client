import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gbnixu6', 'template_1ueqg8d', form.current, 'XQ2yMZZaZrHnlcCyo')
          .then((result) => {
            Swal.fire({
              title: "Receive Your Message Successfully",
              text: "Thanks For Message Me",
              icon: "success"
            });
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
      <div>
        <div>
        <h1 className="text-center font-serif text-3xl text-extrabold mt-10">Contact Us</h1>
        <p className="text-center mt-2 font-serif  text-base">For Further Inquiry</p>
    </div>
          <div className='container mx-auto mb-10'>
            
            <form className='border-4 shadow-xl  border-green-600 text-center mt-5 ' ref={form} onSubmit={sendEmail}>
   
     <div className='flex md:gap-32 lg:gap-16'>
     <label className="form-control  w-full max-w-xs">
 <div className="label">
   <span className="label-text">Name</span>
   
 </div>
 <input type="text" placeholder="Your Name" name="from_name" className="input input-bordered w-full " />
 
</label>
     <label className="form-control mr-1   w-full max-w-xs">
 <div className="label">
   <span className="label-text">Email</span>
   
 </div>
 <input type="email" placeholder="Your Email"  name="email_id" className="input input-bordered w-full max-w-xs" />
 
</label>
     </div>
     
     
     <label className="form-control">
 <div className="label">
   <span className="label-text">Message</span>
   
 </div>
 <textarea className="textarea textarea-bordered h-24" name="message" placeholder="Send Me Message"></textarea>
 
</label>
     <input className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border  hover:border-transparent rounded" type="submit" value="Send" />
   </form>
       </div>
      </div>
    );
};

export default Contact;
