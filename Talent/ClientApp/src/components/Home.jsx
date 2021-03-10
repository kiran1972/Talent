import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

    update
  render () {
    return (
      <div>
            <center><h1>Talent Project</h1></center>
            <hr></hr>
            <p>Welcome to Talent Project This is a MVC Shopping Web application with Visual Studio that connects to a SQL database. Application Front-end is developed with React JS components and used AXIOS to interface with backend and used Semantic-UI-React Elements in views. Models and Controlers are developed using C#. This Shopping web application provides basic CURD operations on Customers,Products,Stores and Sales. Sales are associated with Customers, Products and Stores.</p>
            <br></br>
            <h2>DB Design</h2>
            <hr></hr>
            <center><img src="./DB_Design.jpg"></img></center>
            {/*<ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            </ul>
            <p> To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      */}</div>
    );
  }
}
