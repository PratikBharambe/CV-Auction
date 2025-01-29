using CV_Auction.Models;
using Microsoft.EntityFrameworkCore;

namespace CV_Auction
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddDbContext<cvauctionContext>(
                options => options.UseSqlServer("name=constr")
                );

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors((policyBuilder) =>
            {
                policyBuilder.WithOrigins("*").WithHeaders("*").WithMethods("*");
            });

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
