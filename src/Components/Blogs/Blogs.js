import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='blogs container'>
      <p className='py-4'> <span className='fw-bold'>Question 1:</span> Javascript is a programming language. Javascipt is used to make the web pages more dynamic. On the other hand, NodeJs is a Javascipt runtime environment through which we can run Javascipt on the server side also. Javascript can easily add HTML and manipulate the DOM. Nodejs can not manipulate the dom. JavaScript can execute on any engine such as spider monkey, v8 engine of google chrome, JavaScript core of Safari. On the other hand, Node.js is capable of only on the v8 engine of google chrome. </p>

      <p><span className='fw-bold'>Question 2:</span><br />
        when to use node: <br />
        <ul>
          <li>Data streaming is needed breaking large files into smaller files to provide lag free streaming. Node.js is perfect for this tasks, because it provides an api to function with streams and enables creating readable and writable data streams.</li>
          <li>Node js can manage several processes at the same time. Node.js is useful for applications where frequent updates and management of multiple processes are needed. For example: team management</li>
          <li>When ever we need to handle real-time situations we need a server. nodejs is a trustworthy and it gives a great performance on the server side. so we can use it efficiently on the server side.</li>
        </ul><br />

        when to use mongodb:
        <ul>
          <li>Mongodb can be used for the applications in which users do not interact with each other. For example a blogging application where the user only need to access his own blogs. With some simple queries mongodb can provide the user only his blogs' access.</li>
          <li> We should use MongoDB is trying to combine many datasets. Its unique design allows for flexibility to store the data. we can store data from many data sources like websites, databases, RSS feeds, etc in a single place</li>

        </ul>



      </p>

      <p>
        <span className='fw-bold'>Question 3:</span> SQL databases use structured data. nosql databases use dynamic schemas for unstructured data.SQL databases are formed as a table, whereas nosql databases represent document, key-value, graph etc.SQL databases are vertically scalable. whereas nosql are horizontally scalable. SQL databases are best for complex and big queries. Nosql databases are not so good for complex queries because they are not as efficient as sql databases.
      </p>


    </div>
  );
};

export default Blogs;