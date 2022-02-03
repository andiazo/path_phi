import React from 'react'
 
const Donation =() =>{
    return (
        <div id="donate-button-container">
            <div id="donate-button"></div>
            <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
                {
                PayPal.Donation.Button({env:'production',hosted_button_id:'GK8L7QHQNP33C',image: {
                src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
                alt:'Donate with PayPal button',
                title:'PayPal - The safer, easier way to pay online!',
                }
                }).render('#donate-button')
                }
        </div>
    )
}