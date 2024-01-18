const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === '/') 
  {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
        <form method="post" action="/submit">
            <label for="username">User:</label>
            <input type="text" id="username" name="username" ><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br>

            <label for="dob">DOB</label>
            <input type="date" id="dob" name="dob" placeholder="mm/dd/yyyy" ><br>

            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="Male" required>
            <label for="male">Male</label>

            <input type="radio" id="female" name="gender" value="Female" required>
            <label for="female">Female</label><br>

            <input type="submit" value="submit">
        </form>
    `);
    res.end();
  } 
  else if (path === '/submit') 
  {
    let body = '';
    req.on('data', (x) => {
      body += x.toString();
    });

    req.on('end', () => {
      const formData = qs.parse(body);
      const { username, password, dob, gender } = formData;
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(`<p>Welcome ${username}</p>`);
      res.write(`<p>Password: ${password}</p>`);
      res.write(`<p>DOB: ${dob}</p>`);
      res.write(`<p>Gender: ${gender}</p>`);
      res.end();
    });
  }
});


server.listen(3030, () => {
  console.log("Server running at 3030");
});