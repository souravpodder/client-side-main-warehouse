import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='blogs container'>
      <p> Question 1:Javascript is an implementation of ECMAScript, a standard defining the programming language.Browsers have a built-in interpreter for Javascript, along with a bunch of libraries and a run-time environment for working with web pages.

        Nodejs is an interpreter and environment for javascript which includes a bunch of libraries for using javascript as a general-purpose programming language, with an emphasis on asynchronicity and non-blocking operations. Node actually runs the same interpreter as Google Chrome v8 engine, but provides a different set of libraries and a different run-time environment. It also includes a package management system  and a few language extensions you won't find standard in browsers </p>

      <p>Question 2: Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
        MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.

        As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data.

      </p>

      <p>
        Question 4: JSON Web Token is a standard used to create access tokens for an application.
        It works this way: the server generates a token that certifies the user identity, and sends it to the client.
        The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.
      </p>


    </div>
  );
};

export default Blogs;