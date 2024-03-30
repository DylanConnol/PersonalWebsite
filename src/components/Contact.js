import AnimatedPage from "./AnimatedPage";

function Contact () {
    return (
        <AnimatedPage exitdirection = {props.exitdirection}>
        <div>
            <subpage>
            <title>Contact Information</title>
            <images>
            <a href="mailto:djconnol@bu.edu">
            <img src="gmail.png"></img>
            <span>djconnol@bu.edu</span>
            </a>
            <a href="tel:617-320-0153">
            <img src="phone.png"></img>
            <span>617-320-0153</span>

            
            </a>

            </images>

            

            </subpage>
        </div>
        </AnimatedPage>

    )
}

export default Contact;
