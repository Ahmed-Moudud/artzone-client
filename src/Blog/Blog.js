import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>The five critical differences between SQL vs NoSQL are:

                        SQL databases are relational, NoSQL databases are non-relational.
                        SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                        It is compact, readable and digitally signed using a private key  or a public key pair by the Identity Provider(IdP).</p>
                    <p>
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                        User sign-in using username and password or google/facebook.
                        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                        User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                        Resource server then verifies the authenticity of the token using the secret salt/ public key.
                    </p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.</p>
                    <p>
                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                    </p>
                    <p>
                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                    </p>
                    <p>
                        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                        Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
                    </p>

                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;