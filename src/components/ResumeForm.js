import React from 'react';

function ResumeForm() {
  return (
    <div>
      <h1>Resume Builder</h1>
      <div className="container">
        <form class="row g-3">
          <div class="col-md-4">
            <label for="inputName" class="form-label">
              First Name
            </label>
            <input type="text" class="form-control" aria-label="First name" />
          </div>
          <div class="col-md-4">
            <label for="inputLastName" class="form-label">
              Last Name
            </label>
            <input type="text" class="form-control" aria-label="Last name" />
          </div>
          <div class="col-md-4">
            <label for="inputLastName" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              aria-label="Title"
              placeholder="Title Ex : FrontEnd Developer"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPhoneno" class="form-label">
              Phone No
            </label>
            <input type="number" class="form-control" id="inputPhoneno" />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumeForm;
