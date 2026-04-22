import React from "react";
import Container from "../Components/Ui/Container";

const Blog = () => {
  return (
    <>

      <Container>
        <div className="gird grid-cols-1 my-20">
          <div className="p-5 border my-10">
            <div>
              <h1 className="text-xl font-semibold text-center mb-6">
                What is One way data binding
              </h1>
              <p>
                One-way data binding is a concept used in web development and
                user interface design to describe a unidirectional flow of data
                between a data source (typically a model or a variable) and a
                presentation layer (usually the user interface or a view). In
                this data binding approach, changes in the data source are
                reflected in the user interface, but not the other way around.
                It means that changes in the user interface do not affect the
                underlying data source.
                <br></br>
                One-way data binding is a common pattern in front-end frameworks
                and libraries like AngularJS, React, and Vue.js. It helps
                maintain a clear separation of concerns between the data and the
                presentation, making it easier to manage and update complex user
                interfaces
              </p>
            </div>
          </div>

          <div className="p-5 border my-10">
            <div>
              <h1 className="text-xl font-semibold text-center mb-5">
                What is NPM in node.js?
              </h1>
              <p>
                npm is the standard package manager for Node.js A package in
                Node.js contains all the files you need for a module. Modules
                are JavaScript libraries you can include in your project. In
                September 2022 over 2.1 million packages were reported being
                listed in the npm registry, making it the biggest single
                language code repository on Earth, and you can be sure there is
                a package for (almost!) everything. It started as a way to
                download and manage dependencies of Node.js packages, but it has
                since become a tool used also in frontend JavaScript.
              </p>
            </div>
          </div>

          <div className="p-5 border my-10">
            <div>
              <h1 className="text-xl font-semibold text-center mb-5">
                Different between Mongodb database vs mySQL database
              </h1>
              <p>
                MongoDB and MySQL are both popular database management systems,
                but they have distinct differences in terms of their data
                models, architecture, and use cases. Here's a comparison of
                MongoDB and MySQL:
                <br />
				<p className="font-semibold my-2">MongoDB</p>
                <ul className="list-disc list-inside">
                  <li>NoSQL database.</li>
                  <li>Document-oriented data model using BSON.</li>
                  <li>Schema-less design with flexible document structures.</li>
                  <li>Query language based on JSON-like documents.</li>
                  <li>
                    Known for horizontal scalability, suitable for handling
                    large volumes of data.
                  </li>
                  <li>
                    Provides ACID compliance at the document level and supports
                    multi-document transactions.
                  </li>
                  <li>
                    Ideal for scenarios with evolving or unstructured data, like
                    content management systems and real-time analytics.
                  </li>
                </ul>
                <p className="font-semibold my-2">MySQL</p>
                <ul className="list-disc list-inside">
                  <li>Relational database management system (RDBMS).</li>
                  <li>
                    Tabular, structured data model with predefined schemas.
                  </li>
                  <li>Requires schema alterations to change data structure.</li>
                  <li>
                    Utilizes SQL (Structured Query Language) for querying and
                    manipulation.
                  </li>
                  <li>
                    Can scale vertically or use configurations like master-slave
                    or sharding for distribution.
                  </li>
                  <li>
                    Provides ACID compliance at both the transaction and table
                    levels.
                  </li>
                  <li>
                    Suitable for applications with stable, structured data, such
                    as e-commerce and financial systems.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
