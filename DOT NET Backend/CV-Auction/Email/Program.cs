using System.Net.Mail;
using System.Net;

namespace Email
{
    internal class Program
    {

        public static void SendEmail(string toEmail, string subject, string body)
        {
            try
            {
                // Gmail SMTP server configuration
                string smtpServer = "smtp.gmail.com";
                int smtpPort = 587;  // Use 465 for SSL

                // Your Gmail credentials
                string fromEmail = "cvauction02@gmail.com";  // Replace with your Gmail email
                string password = "meaimvlunnvvlfze";  // Use App Password if 2FA is enabled

                // Create a new MailMessage object
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress(fromEmail, "CV-Auction");
                mail.To.Add(new MailAddress(toEmail));
                mail.Subject = subject;
                mail.Body = body;
                mail.IsBodyHtml = true;  // If your email has HTML content

                // Set up the SMTP client
                SmtpClient smtp = new SmtpClient(smtpServer, smtpPort);
                smtp.Credentials = new NetworkCredential(fromEmail, password);
                smtp.EnableSsl = true;

                // Send the email
                smtp.Send(mail);
                Console.WriteLine("Email sent successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }
        }

        //public static void SendEmail(string toEmail, string toName, string subject, string body)
        //{
        //    try
        //    {
        //        // Gmail SMTP server configuration
        //        string smtpServer = "smtp.gmail.com";
        //        int smtpPort = 587;  // Use 465 for SSL

        //        // Your Gmail credentials
        //        string fromEmail = "bharambepratik2002@gmail.com";  // Replace with your Gmail email
        //        string fromName = "CV-Auction";  // Replace with your name (this will show as the sender's name)
        //        string password = "yhexjdsegqiforwq";  // Use App Password if 2FA is enabled

        //        // Create a new MailMessage object
        //        MailMessage mail = new MailMessage();

        //        // Set the 'From' address with display name
        //        mail.From = new MailAddress(fromEmail, fromName);  // Sender's name and email

        //        // Set the 'To' address with display name
        //        mail.To.Add(new MailAddress(toEmail, toName));  // Receiver's name and email

        //        mail.Subject = subject;
        //        mail.Body = body;
        //        mail.IsBodyHtml = true;  // If your email has HTML content

        //        // Set up the SMTP client
        //        SmtpClient smtp = new SmtpClient(smtpServer, smtpPort);
        //        smtp.Credentials = new NetworkCredential(fromEmail, password);
        //        smtp.EnableSsl = true;

        //        // Send the email
        //        smtp.Send(mail);
        //        Console.WriteLine("Email sent successfully.");
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine("Error: " + ex.Message);
        //    }
        //}


        static void Main(string[] args)
        {
            string? tomail = "sura.cdac@gmail.com";
            string? subject = "Test Email";
            string? body = "This is a test email from C# application.";
            SendEmail(tomail, subject, body);

        }
    }
}
