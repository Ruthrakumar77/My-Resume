import './App.css'

function NewResume() {
    return (
        <>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl font-sans text-gray-800">
                <h1 className="text-3xl font-bold text-center">RUTHRAKUMAR D</h1>
                <h2 className="font-bold text-center mb-2"> Full-Stack Web Developer (MERN) </h2>

                <p className="text-center text-sm">
                    📞 9080745689 | 📧 druthrakumard@gmail.com |{" "}
                    <a href="https://github.com/Ruthrakumar77" className="text-blue-600 hover:underline">
                        <strong className="text-black">GitHub:</strong> Ruthrakumar77
                    </a> |{" "}
                    <a href="https://www.linkedin.com/in/ruthrakumar-d-76151735a/" className="text-blue-600 hover:underline">
                        <strong className="text-black">LinkedIn:</strong> ruthrakumar-d-
                    </a>
                </p>

                <section className="mt-4">
                    <h2 className="text-xl font-semibold border-b">Career Objective</h2>
                    <p>
                        A passionate and detail-oriented Computer Science graduate with a strong foundation in web technologies,
                        seeking an opportunity to apply my skills in front-end and back-end development. Eager to contribute
                        innovative solutions and grow within a dynamic tech environment.
                    </p>
                </section>

                <section className="mt-4">
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
                    <ul className="space-y-2">
                        <li>
                            <strong>B.Sc. in Computer Science</strong><br />
                            Arakkonam Arts & Science College, Thiruvalluvar University (2020)
                        </li>
                    </ul>
                </section>

                <section className="mt-4">
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Course</h2>
                    <div>
                        <p><strong>MERN Full-Stack Development</strong> (Jul 2024 – Jul 2025)</p>
                        <p>J-Spiders, Marathahalli, Bengaluru – 560037</p>
                        <p className="font-semibold">
                            Front-end - (HTML, CSS, JavaScript, React JS) <br />
                            Back-end - (Node JS, Express JS, Mongo DB)
                        </p>
                    </div>
                </section>

                <section className="mt-4">
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
                    <p className="mb-3"><strong>Technologies Used:</strong> HTML, CSS, JavaScript, React, Git, VS Code</p>

                    <div className="mb-2">
                        <h2><strong>Online Book Store</strong></h2>
                        <div>
                            <p>Developed a mini e-commerce web application that allows users to browse, search, and purchase books online. Implemented user authentication, shopping cart functionality, and a secure checkout process.</p>
                            <p className="font-semibold">
                                Website Link: <a href="https://online-book-store-app-in-react.vercel.app/" className="text-blue-600 hover:underline">View Project</a>
                            </p>
                        </div>
                    </div>

                    <div className="mb-2">
                        <h3><strong>Restaurant Management System</strong></h3>
                        <div>
                            <p>Created a React.js restaurant management system using Tailwind CSS for UI and Context API for global state management.</p>
                            <p className="font-semibold">
                                Website Link: <a href="https://restaurant-management-umber.vercel.app/" className="text-blue-600 hover:underline">View Project</a>
                            </p>
                        </div>
                    </div>

                    <div className="mb-2">
                        <h2><strong>Student Grade System</strong></h2>
                        <div>
                            <p>Developed a web-based application to help teachers manage student records and academic performance. The system supports student registration, grade entry, and dynamic performance tracking.</p>
                            <p className="font-semibold">
                                Website Link: <a href="https://student-grade-system-tawny.vercel.app/" className="text-blue-600 hover:underline">View Project</a>
                            </p>
                        </div>
                    </div>

                    <div className="mb-2">
                        <h2><strong>School Project UI</strong></h2>
                        <div>
                            <p>Developed a responsive UI for school management using modern web technologies.</p>
                            <p className="font-semibold">
                                Website Link: <a href="https://school-project-ui.vercel.app" className="text-blue-600 hover:underline">View Project</a>
                            </p>
                        </div>
                    </div>

                    <div className="mb-2">
                        <h2><strong>To Do List</strong></h2>
                        <div>
                            <p>Developed a task management application using React.js for the frontend. Implemented features such as task creation, editing, deletion, and filtering by status. Utilized React hooks for state management and localStorage for data persistence.</p>
                            <p className="font-semibold">
                                Website Link: <a href="https://react-to-do-app-five-rho.vercel.app/" className="text-blue-600 hover:underline">View Project</a>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mt-4">
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Technical Skills</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript, React, NodeJs, ExpressJS, MongoDB</li>
                        <li><strong>Databases:</strong> MySQL, MongoDB</li>
                        <li><strong>Tools:</strong> Git, VS Code</li>
                        <li><strong>Areas of Interest:</strong> Web Development, Responsive Design</li>
                    </ul>
                </section>

                <section className="mt-4">
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Internship</h2>
                    <div>
                        <p><strong>Web Developer Intern – Techsnapie Solutions</strong></p>
                        <p>Worked on real-world projects and gained hands-on experience in front-end development.</p>
                        <p><strong>Technologies Learned:</strong> HTML, CSS, JavaScript</p>
                    </div>
                </section>

                <section className="mt-4">
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Soft Skills</h2>
                    <ul className="list-disc list-inside">
                        <li>Problem-Solving</li>
                        <li>Teamwork</li>
                        <li>Communication</li>
                        <li>Adaptability</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default NewResume
