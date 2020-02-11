import React, { Component } from 'react'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: "", email: "", mobileno: "", productname: '', message: "",
        }
    }

    /* Netlify Form Methods* - Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            name:"contact",
            datanetlify: "true",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    /*End of Netlify Form Methods*/
    
    render() {
        const { username, email, mobileno, productname, message } = this.state;
        return (
            <div className="container">
                <h2 className="text-center">Contact Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <div>
                    {/* Netlify Form start */}

                    <div>
                            <form data-netlify="true" onSubmit={this.handleSubmit} >
                                <p>
                                    <label>
                                        Your Name: <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Your Name" />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Your Email" />
                                    </label>
                                </p>
                                
                                <p>
                                    <label>Mobile No.: <input type="number" name="mobileno" value={mobileno} onChange={this.handleChange}/></label>
                                </p>
                                <br />
                                <p>
                                    <label>Product Name: 
                                    <input type="text" name="productname" value={productname}  onChange={this.handleChange} required/></label>
                                </p>
                                <p>
                                    <label>
                                        Message: <textarea name="message" value={message} onChange={this.handleChange} placeholder="Your Message" />
                                    </label>
                                </p>
                                <p>
                                    <div data-netlify-recaptcha="true"></div>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>



                        </div>
                        {/* End of Netlify Form start */}
                </div>

            <p>..</p>
            </div>
        )
    }
}

export default Contact
