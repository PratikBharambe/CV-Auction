using Microsoft.AspNetCore.Mvc;
using CV_Auction099.Models;
using System.Collections.Generic;
using System.Linq;

namespace CV_Auction099.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepositPlansController : ControllerBase
    {
        private readonly cvAuction01Context _context;

        public DepositPlansController(cvAuction01Context context)
        {
            _context = context;
        }

        // GET: api/DepositPlans
        [HttpGet]
        public ActionResult<IEnumerable<DepositPayment>> GetDepositPayments()
        {
            return _context.DepositPayments.ToList();
        }

        // GET api/DepositPlans/5
        [HttpGet("{paymentNo}")]
        public ActionResult<DepositPayment> GetDepositPayment(int paymentNo)
        {
            var depositPayment = _context.DepositPayments
                                         .FirstOrDefault(d => d.PaymentNo == paymentNo);

            if (depositPayment == null)
            {
                return NotFound();
            }

            return depositPayment;
        }

        // POST api/DepositPlans
        [HttpPost]
        public ActionResult<DepositPayment> PostDepositPayment([FromBody] DepositPayment depositPayment)
        {
            if (depositPayment == null)
            {
                return BadRequest();
            }

            _context.DepositPayments.Add(depositPayment);
            _context.SaveChanges();

            return CreatedAtAction("GetDepositPayment", new { paymentNo = depositPayment.PaymentNo }, depositPayment);
        }

        // PUT api/DepositPlans/5
        [HttpPut("{paymentNo}")]
        public IActionResult PutDepositPayment(int paymentNo, [FromBody] DepositPayment depositPayment)
        {
            if (depositPayment == null || depositPayment.PaymentNo != paymentNo)
            {
                return BadRequest();
            }

            var existingDepositPayment = _context.DepositPayments
                                                 .FirstOrDefault(d => d.PaymentNo == paymentNo);

            if (existingDepositPayment == null)
            {
                return NotFound();
            }

            existingDepositPayment.Uid = depositPayment.Uid;
            existingDepositPayment.TransactionTime = depositPayment.TransactionTime;
            existingDepositPayment.Amt = depositPayment.Amt;
            existingDepositPayment.PaymentId = depositPayment.PaymentId;
            existingDepositPayment.OrderId = depositPayment.OrderId;
            existingDepositPayment.PlanType = depositPayment.PlanType;

            _context.SaveChanges();

            return NoContent();
        }

        // DELETE api/DepositPlans/5
        [HttpDelete("{paymentNo}")]
        public IActionResult DeleteDepositPayment(int paymentNo)
        {
            var depositPayment = _context.DepositPayments
                                         .FirstOrDefault(d => d.PaymentNo == paymentNo);

            if (depositPayment == null)
            {
                return NotFound();
            }

            _context.DepositPayments.Remove(depositPayment);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
