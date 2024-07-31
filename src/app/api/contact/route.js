import nodemailer from 'nodemailer';

export async function POST(req){
    try{
        const{action, ...formData} = await req.json();
        switch(action){
            case 'sendemail':
                return await sendemail(formData);
            default:
                return new Response(JSON.stringify({message:'invalid action requested'}),{status:400})
        }
    }catch(e){
        console.error(e);
    }
   console.log(req.body);
   return new Response(JSON.stringify({message:"success"}),{status:200});
}

async function sendemail(formData) {
    try {
        const { name, email, contactNo, subject, message } = formData;
    
        // Create a transporter using your email service
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          secure: 'true',
          port:465,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
    
        // Create the email content
        const mailOptions = {
          from: process.env.EMAIL_USER, // Sender address (user's email)
          to: 'adityachalla73@gmail.com', // Your email address
          subject: `New Contact Form Submission: ${subject}`, // Subject line
          text: `
            You have received a new message from your contact form.
    
            Name: ${name}
            Email: ${email}
            Contact No: ${contactNo}
            Subject: ${subject}
    
            Message:
            ${message}
          `,
          html: `
            <h3>You have received a new message from your contact form:</h3>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Contact No:</strong> ${contactNo}</li>
              <li><strong>Subject:</strong> ${subject}</li>
            </ul>
            <p><strong>Message:</strong><br>${message}</p>
          `,
        };
    
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
      } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
      }
  };
