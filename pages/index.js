<html>
<head>
  <title>Big Screen UI</title>
  <style>
    /* CSS for layout and styling */
    body {
      font-family: Arial, sans-serif;
    }
    
    #container {
      display: flex;
      flex-direction: row;
      height: 100vh;
    }
    
    #sidebar {
      width: 200px;
      background-color: #f0f0f0;
    }
    
    #main-content {
      flex-grow: 1;
      padding: 20px;
    }
    
    .button {
      display: block;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #4CAF50;
      color: white;
      text-decoration: none;
      text-align: center;
    }
    
    .button:hover {
      background-color: #45a049;
    }
    
    h1 {
      margin-top: 0;
    }
  </style>
</head>
<body>
  <div id="container">
    <div id="sidebar">
      <a href="#" class="button">Function 1</a>
      <a href="#" class="button">Function 2</a>
      <a href="#" class="button">Function 3</a>
      <a href="#" class="button">Function 4</a>
    </div>
    <div id="main-content">
      <h1>Welcome to the Big Screen UI!</h1>
      <p>Select a function from the left sidebar to view relevant content or settings here.</p>
    </div>
  </div>
</body>
</html>
