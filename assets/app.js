/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// Initialization for ES Users

// any CSS you import will output into a single css file (app.css in this case)
import "./styles/app.scss";
import "tw-elements";

// Initialization for ES Users
import { Modal, Ripple, initTE } from "tw-elements";

initTE({ Modal, Ripple });
