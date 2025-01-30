using System.Net.Mail;
using System.Net;

namespace Email
{
    internal class Program
    {

        static void Main()
        {
            // Example usage of the SendEmail function
            string smtpServer = "smtp.titan.email";  // Replace with Titan SMTP server address
            int smtpPort = 587;                     // Port 587 is commonly used for TLS
            string smtpUser = "info@cvauction.tech"; // Your Titan email address
            string smtpPassword = "cv@auction"; // Your Titan email password
            string fromEmail = "info@cvauction.tech"; // From email address
            string toEmail = "sura.cdac@gmail.com"; // Recipient email address
            string subject = "Test Email from Titan Mail";
            string body = "This is a test email sent using Titan Mail SMTP in .NET.";

            bool emailSent = SendEmail(smtpServer, smtpPort, smtpUser, smtpPassword, fromEmail, toEmail, subject, body);

            if (emailSent)
            {
                Console.WriteLine("Email sent successfully!");
            }
            else
            {
                Console.WriteLine("Failed to send email.");
            }
        }

        static bool SendEmail(string smtpServer, int smtpPort, string smtpUser, string smtpPassword, string fromEmail, string toEmail, string subject, string body)
        {
            try
            {
                // Create MailMessage object
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress(fromEmail);
                mail.To.Add(toEmail);
                mail.Subject = subject;
                mail.Body = body;

                // Set up SMTP client with authentication
                SmtpClient smtpClient = new SmtpClient(smtpServer)
                {
                    Port = smtpPort,
                    Credentials = new NetworkCredential(smtpUser, smtpPassword),
                    EnableSsl = true // Set to true for secure connection
                };

                // Send the email
                smtpClient.Send(mail);
                return true; // Email sent successfully
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return false; // Failed to send email
            }
        }
    }
}
