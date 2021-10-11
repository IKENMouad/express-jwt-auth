import React from "react";

function TodoForm(todo) {
  console.log("todo ", todo);
  return (
    <div className="container my-5">
      <form>
        <div className="form-group ">
          <label
            htmlFor="inputName"
            className="col-sm-1-12 col-form-label"
          ></label>
          <div className="col-sm-1-12">
            <input
              type="text"
              className="form-control"
              placeholder="todo ..."
              name="inputName"
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
