namespace CV_Auction.Service
{
    public interface EmailService
    {
        void SendEmail(string toEmail, string subject, string body);
    }
}
