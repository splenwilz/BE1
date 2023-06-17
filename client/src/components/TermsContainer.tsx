import { useState } from 'react';
import styles from '../styles.module.css';
import axios from 'axios';


// const bcrypt = require('bcrypt');

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface TermsContainerProps {
    
}

const TermsContainer: React.FunctionComponent<TermsContainerProps> = () => {
  

   
    return ( 
        <div className={styles.content__container}>
            <ToastContainer />            
            <div className={styles.content}>                
                <div className={styles.terms__content}>
                <h1>Terms & Conditions</h1>

<p>Welcome to Be1 Encyclopedia!</p>

<p>These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website and using our services, we assume you accept these terms and conditions. Do not continue to use our website and services if you do not agree to all the terms and conditions stated on this page.</p>

<h2>Intellectual Property Rights</h2>

<p>Unless otherwise stated, Be1 Encyclopedia and/or its licensors own the intellectual property rights for all material on our website and services. All intellectual property rights are reserved. You may access this from our website for your personal use, but you must not republish, sell, rent, or sub-license any material from our website and services.</p>

<h2>Restrictions</h2>

<p>You are specifically restricted from:</p>
<ul>
    <li>Publishing any material from our website and services in any other media without obtaining explicit written permission.</li>
    <li>Selling, sublicensing, or commercializing any material from our website and services.</li>
    <li>Using our website and services in any way that is or may be damaging to Be1 Encyclopedia.</li>
    <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity regarding our website and services.</li>
    <li>Using our website and services to engage in any advertising or marketing without our prior written consent.</li>
</ul>

<h2>No Warranty</h2>

<p>Our website and services are provided "as is," with all faults, and Be1 Encyclopedia expresses no representations or warranties of any kind related to our website and services or the materials contained on our website. Additionally, nothing contained on our website and services shall be interpreted as advising you.</p>

<h2>Limitation of Liability</h2>

<p>In no event shall Be1 Encyclopedia, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of our website and services. Be1 Encyclopedia shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of our website and services.</p>

<h2>Indemnification</h2>

<p>You hereby indemnify to the fullest extent Be1 Encyclopedia from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these terms and conditions.</p>

<h2>Severability</h2>

<p>If any provision of these terms and conditions is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>

<h2>Variation of Terms</h2>

<p>Be1 Encyclopedia is permitted to revise these terms and conditions at any time as it sees fit, and by using our website and services, you are expected to review these terms and conditions regularly.</p>

<h2>Governing Law & Jurisdiction</h2>

<p>These terms and conditions will be governed by and construed in accordance with the laws of [Your Country/State], and you submit to the non-exclusive jurisdiction of the courts located in [Your City/Country] for the resolution of any disputes.</p>


                </div>
            </div>
        </div>
     );
}
 
export default TermsContainer;

