import React from "react";

function Form() {
  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-body rounded">
            <form action="/" method="post" class="needs-validation" novalidate>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="example@gmail.com" required />
                <div class="invalid-feedback">Please provide a valid email.</div>
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
