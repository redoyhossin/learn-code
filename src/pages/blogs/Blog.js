import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div className='my-14 mx-6'>


            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title>
                        what is cors
                    </Accordion.Title>
                    <Accordion.Content>
                        Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests initiated from scripts running in the browser. If your REST API resources receive non-common cross-origin HTTP requests, you need to enable CORS support.
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                        Why are you using firebase? What other options do you have to implement authentication?
                    </Accordion.Title>
                    <Accordion.Content>
                        Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.
                        Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. <br /> <br />
                        <h1>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</h1>
                    </Accordion.Content>
                </Accordion.Panel>


                <Accordion.Panel>
                    <Accordion.Title>
                        How does the private route work
                    </Accordion.Title>
                    <Accordion.Content>

                        Private/Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the this page
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is Node? How does Node work
                    </Accordion.Title>
                    <Accordion.Content>
                        Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side application using JavaScript.
                        <br />
                        Node.js is an open-source framework under MIT license. (MIT license is a free software license originating at the Massachusetts Institute of Technology (MIT).)
                        Uses JavaScript to build entire server side application.
                        Lightweight framework that includes bare minimum modules. Other modules can be included as per the need of an application.
                        Asynchronous by default. So it performs faster than other frameworks.
                        Cross-platform framework that runs on Windows, MAC or Linux
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>

        </div>
    );
};

export default Blog;