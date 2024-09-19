export default function Editor() {
  return (
    <div id="wd-assignment-editor">
      <h3 id="wd-assignment-editor-title">Assignment Name</h3>
      <input
        type="text"
        id="wd-assignment-list"
        placeholder="Assignment Name"
        value="A1 - ENV + HTML"
        readOnly
      />
      <br />
      <br />
      <textarea id="wd-assignment-editor-textarea" rows="5" cols="80">
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section, links to each of the lab
        assignments, link to the Kanbas application, and links to all relevant
        source code repositories. The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <div>
        <label>Points </label>
        <input type="number" value="100" readOnly />
      </div>
      <br />
      <div>
        <label>Assignment Group </label>
        <select>
          <option>ASSIGNMENTS</option>
        </select>
      </div>
      <br />
      <div>
        <label>Display Grade as </label>
        <select>
          <option>Percentage</option>
        </select>
      </div>
      <br />
      <div>
        <label>Submission Type </label>
        <select>
          <option>Online</option>
        </select>
      </div>
      <br />
      <div>
        <label>Online Entry Options</label>
        <br />
        <input type="checkbox" /> Text Entry
        <br />
        <input type="checkbox" /> Website URL
        <br />
        <input type="checkbox" /> Media Recordings
        <br />
        <input type="checkbox" /> Student Annotation
        <br />
        <input type="checkbox" /> File Uploads
      </div>
      <br />
      <div>
        <label>Assign to</label>
        <input type="text" value="Everyone" readOnly />
      </div>
      <br />
      <div>
        <label>Due </label>
        <input type="date" value="2024-05-13" />
      </div>
      <br />
      <div>
        <label>Available from </label>
        <input type="date" value="2024-05-06" />
        <label> Until </label>
        <input type="date" value="2024-05-20" />
      </div>
      <br />
      <br />
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
