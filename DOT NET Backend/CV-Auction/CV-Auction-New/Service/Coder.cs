using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace CV_Auction.Service
{
    public class Coder : ICoder
    {

        private readonly IConfiguration _configuration;

        public class EncryptionHelper
        {
            // Encrypt a string using AES
            public static string EncryptString(string plainText, string key)
            {
                using (Aes aesAlg = Aes.Create())
                {
                    aesAlg.Key = Encoding.UTF8.GetBytes(key); // Key should be 16, 24, or 32 bytes for AES-128, AES-192, or AES-256
                    aesAlg.IV = new byte[16]; // Initialization Vector (use a fixed one or generate a random one)

                    ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);

                    using (MemoryStream msEncrypt = new MemoryStream())
                    {
                        using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                        using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                        {
                            swEncrypt.Write(plainText);
                        }

                        return Convert.ToBase64String(msEncrypt.ToArray()); // Return encrypted text as Base64 string
                    }
                }
            }

            // Decrypt a string using AES
            public static string DecryptString(string cipherText, string key)
            {
                using (Aes aesAlg = Aes.Create())
                {
                    aesAlg.Key = Encoding.UTF8.GetBytes(key); // Key should be 16, 24, or 32 bytes for AES-128, AES-192, or AES-256
                    aesAlg.IV = new byte[16]; // Use the same IV that was used during encryption

                    ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

                    using (MemoryStream msDecrypt = new MemoryStream(Convert.FromBase64String(cipherText)))
                    using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                    using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                    {
                        return srDecrypt.ReadToEnd(); // Return the decrypted string
                    }
                }
            }
        }


    }
}
