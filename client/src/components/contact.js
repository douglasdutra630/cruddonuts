import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div>
                    Contact
                </div>
                <div className="form-group">
                    <input type="text" id="fullName" placeholder="Your name"></input>
                    <label for="fullName"></label>
                </div>
                <div className="form-group">
                    <input type="email" id="email" placeholder="Your email"></input>
                    <label for="email"></label>
                </div>

                <div className="form-group2">
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                    ></textarea>
                    <label for="message"></label>
                </div>

                <div className="center-btn-wrapper">
                    <button type="submit" class="btn"> <img src="https://res.cloudinary.com/teepublic/image/private/s--5zbNDsGF--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_1260,w_1260,x_-76,y_-100/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-76,y_-100/bo_157px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1572871243/production/designs/6584408_0.jpg"/>
                        Send
                    </button>
                </div>
            </div>
        )
    }
}